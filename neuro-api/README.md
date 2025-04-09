## **README for Running the Emotion Prediction API**

This guide will walk you through setting up the environment, running the API, and making a request to the API.

---

### **1. Set Up Virtual Environment**

It’s recommended to use a **virtual environment** to avoid conflicts with system-wide packages.

#### **Windows**:
1. **Create a virtual environment**:
    ```bash
    python -m venv venv
    ```

2. **Activate the virtual environment**:
    ```bash
    .\venv\Scripts\activate
    ```

#### **macOS/Linux**:
1. **Create a virtual environment**:
    ```bash
    python3 -m venv venv
    ```

2. **Activate the virtual environment**:
    ```bash
    source venv/bin/activate
    ```

---

### **2. Install Requirements**

After activating the virtual environment, install the required dependencies using `pip`.

1. **Install required packages**:
    ```bash
    pip install -r requirements.txt
    ```

Alternatively, if you don't have a `requirements.txt` file, you can manually install the dependencies:

```bash
pip install flask opencv-python pillow hume werkzeug
```

---

### **3. Run the Flask API**

Once the virtual environment is set up and dependencies are installed, you can run the Flask API.

1. **Start the Flask API**:
    ```bash
    python API.py
    ```

   This will start the server on `http://127.0.0.1:5000/`.

---

### **4. Making a Request using `curl`**

After the Flask API is running, you can make a `POST` request to upload an image and receive emotion predictions.

1. **Prepare an image file**: Ensure you have an image file (e.g., `IMG_1329.JPG`) ready to upload.

2. **Make a `POST` request** using `curl`:

    ```bash
    curl -X POST -F "file=@IMG_1329.JPG" http://127.0.0.1:5000/upload
    ```

    Replace `IMG_1329.JPG` with the path to your image file.

---

### **5. Example Response**

If the image contains faces, you’ll receive a JSON response with the top 5 emotions for each detected face.

#### **Response**:
```json
[
  {
    "face": "face_0.jpeg",
    "top_5_emotions": [
      { "name": "Concentration", "score": 0.6594 },
      { "name": "Calmness", "score": 0.5833 },
      { "name": "Boredom", "score": 0.5620 },
      { "name": "Doubt", "score": 0.3605 },
      { "name": "Confusion", "score": 0.4019 }
    ]
  }
]
```

If no faces are detected, the response will be:

#### **Response when no faces are detected**:
```json
{
  "message": "No faces detected"
}
```

---

### **6. Stopping the Flask API**

To stop the API, simply press `CTRL+C` in your terminal where the Flask API is running.

---

### **Additional Notes**

- The API is set up for local development, so you can change the port or host if necessary in the `app.py` file.
- Ensure you replace the Hume API key with your own in the code if needed.

---

### **Example of Folder Structure**

```
project_directory/
│
├── API.py              # Flask API
├── requirements.txt     # Dependencies file (optional)
└── uploads/             # Folder where uploaded images and face images are saved
```

