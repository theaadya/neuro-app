import React, { useRef, useState, useEffect } from "react";
import TopExpressions from "./TopExpressions";
import ExpressionLevels from "./ExpressionLevels";
import { useNavigate } from "react-router-dom";

const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [emotions, setEmotions] = useState<any[]>([]);
  const [voiceEmotions, setVoiceEmotions] = useState<any[]>([]);
  const [sessionSummary, setSessionSummary] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageCount, setImageCount] = useState(0);

  // Audio-related refs
  const audioStreamRef = useRef<MediaStream | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const detectionFrameRef = useRef<number>(0);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [stressHistory, setStressHistory] = useState<number[]>([]);
  const [fatigueHistory, setFatigueHistory] = useState<number[]>([]);
  const [popupType, setPopupType] = useState<"stress" | "fatigue" | null>(null);
  const [disablePopup, setDisablePopup] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const startSession = async () => {
    setIsSessionActive(true);
    setImageCount(0);
    setSessionSummary(null);
    setEmotions([]);
    setVoiceEmotions([]);

    // Start video
    const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = videoStream;
    }

    // Start audio
    const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    audioStreamRef.current = audioStream;
    // Setup MediaRecorder
    const mediaRecorder = new MediaRecorder(audioStream);
    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.ondataavailable = (e: BlobEvent) => {
      if (e.data.size > 0) {
        sendAudioToAPI(e.data);
      }
    };
    // Setup AudioContext for noise detection
    const audioContext = new AudioContext();
    audioContextRef.current = audioContext;
    const source = audioContext.createMediaStreamSource(audioStream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 2048;
    analyserRef.current = analyser;
    source.connect(analyser);
    const bufferLength = analyser.fftSize;
    dataArrayRef.current = new Uint8Array(bufferLength);

    // Kick off noise detection loop
    detectNoise();

    // Initialize image capture interval
    captureIntervalRef.current = setInterval(captureImage, 5000);
  };

  const stopSession = async () => {
    setIsSessionActive(false);

    // Stop video
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }

    // Stop audio stream
    if (audioStreamRef.current) {
      audioStreamRef.current.getTracks().forEach(track => track.stop());
    }

    // Cancel noise detection
    cancelAnimationFrame(detectionFrameRef.current);

    // Clear capture interval
    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
      captureIntervalRef.current = null;
    }

    await fetchSessionAnalysis();
  };

  const captureIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;
    const context = canvasRef.current.getContext("2d");
    if (context) {
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          setIsLoading(true);
          setImageCount(prev => prev + 1);
          sendImageToAPI(blob);
        }
      }, "image/jpeg");
    }
  };

  const sendImageToAPI = async (blob: Blob) => {
    const formData = new FormData();
    formData.append("file", blob, "captured.jpg");
    try {
      setIsLoading(true);
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      setEmotions(data.message ? [{ name: data.message, score: "-" }] : data[0].top_5_emotions);
  
      const groundTruth = data[0].ground_truth;
      console.log("ground truth", groundTruth);
      
      // Update stress history
      setStressHistory(prev => {
        const updated = [...prev.slice(-2), groundTruth.stress_score];
        if (!disablePopup && updated.length === 3 && updated.every(score => score > 0.3)) {
          setPopupMessage("You seem stressed. Would you like to take a break?");
          setPopupType("stress");
          setShowPopup(true);
        }        
        return updated;
      });

      // Update fatigue history
      setFatigueHistory(prev => {
        const updated = [...prev.slice(-2), groundTruth.fatigue_score];
        if (!disablePopup && updated.length === 3 && updated.every(score => score > 0.3)) {
          setPopupMessage("You seem tired. Would you like to take a break?");
          setPopupType("fatigue");
          setShowPopup(true);
        }        
        return updated;
      });
  
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePopupResponse = (answer: "yes" | "no" | "disable") => {
    setShowPopup(false);
  
    if (answer === "yes") {
      stopSession();
    } else if (answer === "no") {
      if (popupType === "stress") {
        setStressHistory([]);
      } else if (popupType === "fatigue") {
        setFatigueHistory([]);
      }
    } else if (answer === "disable") {
      setDisablePopup(true);
    }
  
    setPopupType(null);
  };
      
  const sendAudioToAPI = async (audioBlob: Blob) => {
    console.log("audio detected");
    const formData = new FormData();
    formData.append("file", audioBlob, "audio.webm");
    try {
      const response = await fetch("http://127.0.0.1:5000/upload_audio", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`Audio upload failed: ${response.status}`);
      const data = await response.json();
      console.log("🔊 Audio API Response:", data);
      setVoiceEmotions(data.top_5_emotions);
      // Optionally handle ground truth or summary in UI
    } catch (err) {
      console.error(err);
    }
  };

  const detectNoise = () => {
    const analyser = analyserRef.current;
    const dataArray = dataArrayRef.current;
    if (analyser && dataArray) {
      analyser.getByteTimeDomainData(dataArray);
      let sum = 0;
      for (let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] - 128;
        sum += v * v;
      }
      const rms = Math.sqrt(sum / dataArray.length);
      const threshold = 20; // tweak as needed
      if (rms > threshold && mediaRecorderRef.current?.state === "inactive") {
        // record 3 seconds
        mediaRecorderRef.current.start();
        setTimeout(() => {
          if (mediaRecorderRef.current?.state === "recording") {
            mediaRecorderRef.current.stop();
          }
        }, 3000);
      }
    }
    detectionFrameRef.current = requestAnimationFrame(detectNoise);
  };

  const navigate = useNavigate();

  // Replace fetchSessionAnalysis with this
  const fetchSessionAnalysis = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/end_session");
      if (!response.ok) throw new Error(`Status: ${response.status}`);
      const data = await response.json();
      navigate("/analysis", { state: { sessionSummary: data } });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex relative flex-col items-center px-20 pt-14 pb-28 w-full rounded-none min-h-[1024px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ca341ce415189a9df5af718d9f0232504132f9?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
        alt="Background"
        className="object-cover absolute inset-0 size-full z-[-1] -mt-10"
      />
  
      {/* Start Session Button at Top Right */}
      {!isSessionActive && (
        <div className="absolute top-4 right-4">
          <button onClick={startSession} className="px-12 py-2 rounded-[80px] shadow-md text-2xl bg-rose-200 text-black">
            Start Session
          </button>
        </div>
      )}

      <div className="flex flex-row items-start gap-6 mt-10">
        <div className="flex flex-col items-center">
          {isSessionActive && (
            <>
              <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg" />
              <button onClick={stopSession} className="px-12 py-2 mt-2 rounded-[80px] shadow-md text-2xl bg-stone-400 text-white">
                End Session
              </button>
              <p className="mt-2 text-gray-700">Images Captured: {imageCount}</p>
            </>
          )}
          <canvas ref={canvasRef} width="640" height="480" className="hidden" />
        </div>
  
        {!sessionSummary && (
          <div className="flex flex-col gap-4">
            <TopExpressions expressions={emotions} />
            <ExpressionLevels expressions={emotions} />
          </div>
        )}
      </div>
      
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <p className="text-xl font-semibold mb-6">{popupMessage}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button
                className="px-6 py-2 bg-rose-400 text-white rounded-full"
                onClick={() => handlePopupResponse("yes")}
              >
                Yes
              </button>
              <button
                className="px-6 py-2 bg-stone-500 text-black rounded-full"
                onClick={() => handlePopupResponse("no")}
              >
                No
              </button>
              <button
                className="px-6 py-2 bg-stone-300 text-white rounded-full"
                onClick={() => handlePopupResponse("disable")}
              >
                Don't Show Again
              </button>
            </div>

            {/* Add "Why was this shown?" button */}
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
              onClick={() => setShowExplanation(true)}
            >
              Why was this shown?
            </button>

            {/* Explanation Section */}
            {showExplanation && (
              <div className="mt-4 p-4 bg-gray-100 rounded-lg text-left">
                <p className="text-sm text-gray-700">
                  This message is shown because your stress or fatigue levels have been consistently high for the last three measurements. Taking a break can help you relax and recharge.
                </p>
                <button
                  className="mt-2 px-4 py-1 bg-gray-300 text-black rounded-lg"
                  onClick={() => setShowExplanation(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
