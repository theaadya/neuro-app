import os
import cv2
from flask import Flask, request, jsonify
from PIL import Image
from hume import HumeBatchClient
from hume.models.config import FaceConfig
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
from collections import defaultdict
from huggingface_hub import InferenceClient
from config import MY_HF_API_KEY

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

HF_API_KEY = MY_HF_API_KEY
hf_client = InferenceClient(
    provider="hf-inference",
    api_key=HF_API_KEY,
)

HUME_API_KEY = "ofxFiRwh5TzUUM7Ek6Ll4msPGlAETw0MG3Sp2OKd7cvl2fb8"
session_emotions = defaultdict(list)
time_emotions = defaultdict(list)
total_images = 0

def detect_faces(image_path):
    """Detect faces in an image using OpenCV and save detected face images."""
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    filepaths = []
    for i, (x, y, w, h) in enumerate(faces):
        face_image = image[y:y+h, x:x+w]
        pil_image = Image.fromarray(cv2.cvtColor(face_image, cv2.COLOR_BGR2RGB))

        face_path = os.path.join(UPLOAD_FOLDER, f'face_{i}.jpeg')
        pil_image.save(face_path, "JPEG")
        filepaths.append(face_path)

    return filepaths

def analyze_faces(filepaths):
    """Send face images to Hume API and return the top 5 emotions."""
    client = HumeBatchClient(HUME_API_KEY)
    config = FaceConfig()
    job = client.submit_job(None, [config], files=filepaths)

    job.await_complete()
    predictions = job.get_predictions()
    # job.download_predictions("predictions.json")

    results = []
    for prediction in predictions:
        face_data = prediction.get("results", {}).get("predictions", [])
        for face in face_data:
            face_file = face.get("file", "unknown_face")
            emotions = face.get("models", {}).get("face", {}).get("grouped_predictions", [])[0].get("predictions", [])[0].get("emotions", [])

            global total_images
            time_emotions[total_images] = emotions

            # Sort emotions by score and keep top 5
            top_5_emotions = sorted(emotions, key=lambda x: x["score"], reverse=True)[:5]

            for emotion in top_5_emotions:
                session_emotions[emotion["name"]].append(emotion["score"])
                # time_emotions[emotion["name"]].append((total_images, emotion["score"]))
            total_images += 1

            results.append({
                "face": face_file,
                "top_5_emotions": top_5_emotions
            })

    return results

@app.route('/upload', methods=['POST'])
@cross_origin()
def upload_file():
    """Handle image upload, detect faces, and return top 5 emotion predictions."""
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    filename = secure_filename(file.filename)
    image_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(image_path)

    faces = detect_faces(image_path)
    if not faces:
        return jsonify({"message": "No faces detected"}), 200

    predictions = analyze_faces(faces)

    return jsonify(predictions)

@app.route('/end_session', methods=['GET'])
@cross_origin()
def end_session():
    """Returns the top 3 most frequent emotions in the session."""
    if not session_emotions:
        return jsonify({"message": "No emotions recorded in this session"}), 200

    emotion_counts = defaultdict(float)
    for emotion, scores in session_emotions.items():
        emotion_counts[emotion] = sum(scores)  # Sum scores for each emotion

    # Get top 3 emotions
    sorted_emotions = sorted(emotion_counts.items(), key=lambda x: x[1], reverse=True)[:3]
    top_3_emotions = [{"name": name, "score": round((score / total_images) * 100, 2)} for name, score in sorted_emotions]
    
    global total_images
    final_time_emotions = defaultdict(list)
    for frame in range(total_images):
        for emotion in top_3_emotions:
            all_emotions = time_emotions[frame]
            for ae in all_emotions:
                if ae["name"] == emotion["name"]:
                    final_time_emotions[ae["name"]].append((frame, ae["score"]))
    
    # Generate session summary
    summary = f"During this session, the most common emotions were: " + ", ".join([f"{e['name']} ({e['score']}%)" for e in top_3_emotions]) + "."
    completion = hf_client.chat.completions.create(
        model="mistralai/Mistral-7B-Instruct-v0.2",
        messages=[
            {
                "role": "user",
                "content": f"Give an analysis for my emotions in the session in 2-3 lines. {summary}"
            }
        ],
        max_tokens=500,
    )
    qualitative_analysis = completion.choices[0].message['content']

    response = jsonify({"top_3_emotions": top_3_emotions, "summary": summary, "final_time_emotions": final_time_emotions, "qualitative_analysis": qualitative_analysis})

    session_emotions.clear()
    time_emotions.clear()
    total_images = 0
    return response, 200

if __name__ == '__main__':
    app.run(debug=True)
