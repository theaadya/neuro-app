import os
import cv2
import torch
from flask import Flask, request, jsonify
from PIL import Image
from hume import HumeBatchClient
from hume.models.config import FaceConfig, BurstConfig
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
from collections import defaultdict
from huggingface_hub import InferenceClient
from config import MY_HF_API_KEY
from user_sig_weights import input_score_weights
from fusion_model import MultiModalFusionNetwork

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

HF_API_KEY = MY_HF_API_KEY
hf_client = InferenceClient(
    provider="hf-inference",
    api_key=HF_API_KEY,
)

HUME_API_KEY = "Sk9KTQxkPsTG1VhrpwRx86HH3zcAXGFCwOLzDSjWKXN60ZCt"
session_emotions = defaultdict(list)
session_voice_emotions = defaultdict(list)
time_emotions = defaultdict(list)
total_images = 0

loaded_model = MultiModalFusionNetwork()
loaded_model.load_state_dict(torch.load('fusion_model_weights.pt'))
loaded_model.eval()
print("Model weights loaded into new instance.")

emotion_types = list(input_score_weights.keys())

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

    emotion_voice_counts = defaultdict(float)
    for emotion, scores in session_voice_emotions.items():
        emotion_voice_counts[emotion] = sum(scores)  # Sum scores for each emotion

    sorted_face_emotions = sorted(emotion_counts.items(), key=lambda x: x[1], reverse=True)[:5]
    top_5_face_emotions = [{"name": name, "score": round((score / total_images) * 100, 2)} for name, score in sorted_face_emotions]

    sorted_voice_emotions = sorted(emotion_voice_counts.items(), key=lambda x: x[1], reverse=True)[:5]
    top_5_voice_emotions = [{"name": name, "score": round((score / total_images) * 100, 2)} for name, score in sorted_voice_emotions]

    get_model_output(top_5_face_emotions, top_5_voice_emotions)

    global total_images
    final_time_emotions = defaultdict(list)
    for frame in range(total_images):
        for emotion in top_5_face_emotions:
            all_emotions = time_emotions[frame]
            for ae in all_emotions:
                if ae["name"] == emotion["name"]:
                    final_time_emotions[ae["name"]].append((frame, ae["score"]))
    
    # Generate session summary
    summary = f"During this session, the most common emotions were: " + ", ".join([f"{e['name']} ({e['score']}%)" for e in top_5_face_emotions]) + "."
    voice_summary = f"During this session, the most common voice emotions were: " + ", ".join([f"{e['name']} ({e['score']}%)" for e in top_5_voice_emotions]) + "."

    completion = hf_client.chat.completions.create(
        model="microsoft/Phi-3.5-mini-instruct",
        messages=[
            {
                "role": "user",
                "content": f"Give an analysis for my emotions in 2-3 lines. {summary}"
            }
        ],
        max_tokens=500,
    )
    qualitative_analysis = completion.choices[0].message['content']

    response = jsonify({"top_5_face_emotions": top_5_face_emotions, "top_5_voice_emotions": top_5_voice_emotions, "summary": summary, "voice_summary": voice_summary, "final_time_emotions": final_time_emotions, "qualitative_analysis": qualitative_analysis})

    session_emotions.clear()
    session_voice_emotions.clear()
    time_emotions.clear()
    total_images = 0
    return response, 200

def find_ground_truth(top_5_emotions):
    output_score = {
        "stress_score": 0,
        "engagement_score": 0,
        "fatigue_score": 0
    }

    for i in range(5):
        label = top_5_emotions[i]["name"]
        score = top_5_emotions[i]["score"]
        for state in ["stress_score", "engagement_score", "fatigue_score"]:
            output_score[state] += score * input_score_weights[label.lower()][state.replace("_score", "")]

    # Normalize the scores
    total = sum(output_score.values())
    if total > 0:
        for state in output_score:
            output_score[state] /= total
    else:
        # If total is 0, avoid division by zero and assign equal weights
        for state in output_score:
            output_score[state] = 1.0 / 3

    print(output_score)
    return output_score

@app.route('/upload_audio', methods=['POST'])
@cross_origin()
def upload_audio():
    if 'file' not in request.files:
        return jsonify({"error": "No audio file uploaded"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No audio file selected"}), 400

    filename = secure_filename(file.filename)
    audio_path = os.path.join(UPLOAD_FOLDER, filename)
    file.save(audio_path)

    # Submit to Hume Burst model
    client = HumeBatchClient(HUME_API_KEY)
    config = BurstConfig()
    job = client.submit_job(None, [config], files=[audio_path])
    job.await_complete()
    predictions = job.get_predictions()

    # Extract burst predictions
    burst = predictions[0]["results"]["predictions"][0]["models"]["burst"]["grouped_predictions"]
    if len(burst) == 0:
        return jsonify({"message": "No emotions recorded in this session"}), 200
    group = burst[0]["predictions"][0]
    emotions = group.get("emotions", [])

    top_5 = sorted(emotions, key=lambda x: x["score"], reverse=True)[:5]
    gt_scores = find_ground_truth(top_5)

    for emotion in top_5:
        session_voice_emotions[emotion["name"]].append(emotion["score"])

    try:
        os.remove(audio_path)
    except OSError:
        pass

    return jsonify({
        "top_5_emotions": top_5
    }), 200

def get_model_output(face_emotions, voice_emotions):
    default_emotions = [{'name': emotion, 'score': 0.0} for emotion in emotion_types[:5]]

    if not face_emotions:
        face_emotions = default_emotions
    if not voice_emotions:
        voice_emotions = default_emotions

    combined_input = face_emotions + voice_emotions
    label = find_ground_truth(combined_input)

    face_emotion_names = [e['name'] for e in face_emotions]
    voice_emotion_names = [e['name'] for e in voice_emotions]

    face_emotion_idxs = [emotion_types.index(e) if e in emotion_types else 0 for e in face_emotion_names]
    voice_emotion_idxs = [emotion_types.index(e) if e in emotion_types else 0 for e in voice_emotion_names]

    facial_tensor = torch.tensor([e['score'] for e in face_emotions], dtype=torch.float32)
    voice_tensor = torch.tensor([e['score'] for e in voice_emotions], dtype=torch.float32)
    task_tensor  = torch.tensor([0.9], dtype=torch.float32)
    face_idxs_tensor  = torch.tensor(face_emotion_idxs, dtype=torch.long)
    voice_idxs_tensor  = torch.tensor(voice_emotion_idxs, dtype=torch.long)
        
    out = loaded_model(
        facial_tensor.unsqueeze(0), 
        voice_tensor.unsqueeze(0), 
        task_tensor.unsqueeze(0), 
        face_idxs_tensor.unsqueeze(0), 
        voice_idxs_tensor.unsqueeze(0)
    )

    print(out.squeeze(0))
    print(label)


if __name__ == '__main__':
    app.run(debug=True)
