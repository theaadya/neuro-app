import React, { useRef, useState } from "react";
import TopExpressions from "./TopExpressions";
import ExpressionLevels from "./ExpressionLevels";
import EmotionSummaryPlot from "./EmotionSummaryPlot";
import EmotionTrendPlot from "./EmotionTrendPlot";
import QualitativeAnalysis from "./QualitativeAnalysis ";

const CameraCapture: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [emotions, setEmotions] = useState<any[]>([]);
  const [sessionSummary, setSessionSummary] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageCount, setImageCount] = useState(0);
  const captureIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startSession = async () => {
    setIsSessionActive(true);
    setImageCount(0);
    setSessionSummary(null);
    setEmotions([]);

    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
    }

    captureIntervalRef.current = setInterval(captureImage, 5000);
  };

  const stopSession = async () => {
    setIsSessionActive(false);

    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }

    if (captureIntervalRef.current) {
      clearInterval(captureIntervalRef.current);
      captureIntervalRef.current = null;
    }

    await fetchSessionAnalysis();
  };

  const captureImage = () => {
    if (!canvasRef.current || !videoRef.current) return;

    const context = canvasRef.current.getContext("2d");
    if (context) {
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      canvasRef.current.toBlob((blob) => {
        if (blob) {
          setIsLoading(true);
          setImageCount(prevCount => prevCount + 1);
          sendToAPI(blob);
        }
      }, "image/jpeg");
    }
  };

  const sendToAPI = async (imageBlob: Blob) => {
    const formData = new FormData();
    formData.append("file", imageBlob, "captured.jpg");

    try {
      console.log("📸 Sending image to API...");
      const response = await fetch("http://127.0.0.1:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ API Response:", data);

      if (data.message) {
        setEmotions([{ name: data.message, score: "-" }]);
      } else {
        setEmotions(data[0].top_5_emotions);
      }
    } catch (error) {
      console.error("❌ Error sending image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSessionAnalysis = async () => {
    try {
      console.log("📊 Fetching session analysis...");
      const response = await fetch("http://127.0.0.1:5000/end_session", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("📈 Session Analysis:", data);
      setSessionSummary(data);
    } catch (error) {
      console.error("❌ Error fetching session analysis:", error);
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
          {isSessionActive ? (
            <>
              <video ref={videoRef} autoPlay className="w-full max-w-md rounded-lg" />
              <button onClick={stopSession} className="px-12 py-2 mt-2 rounded-[80px] shadow-md text-2xl bg-stone-400 text-white">
                End Session
              </button>
              <p className="mt-2 text-gray-700">Images Captured: {imageCount}</p>
            </>
          ) : null}
          <canvas ref={canvasRef} width="640" height="480" className="hidden" />
        </div>
  
        {!sessionSummary && (
          <div className="flex flex-col gap-4">
            <TopExpressions expressions={emotions} />
            <ExpressionLevels expressions={emotions} />
          </div>
        )}
  
        {sessionSummary && (
          <div className="mt-4 p-4 rounded">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center">
              <h2 className="text-lg font-bold">Session Summary</h2>
            </div>
            {sessionSummary.message ? (
              <p className="text-red-600 font-semibold">{sessionSummary.message}</p>
            ) : (
              <>
                <div className="absolute top-20 left-4 p-4 w-2/5 flex flex-col items-center">
                  <EmotionSummaryPlot data={sessionSummary.top_3_emotions} />
                  <p className="mt-2 font-semibold">Analysis: {sessionSummary.summary}</p>
                </div>
                <div className="absolute top-20 right-4 p-4 w-2/5 flex flex-col items-center">
                  <EmotionTrendPlot timeEmotions={sessionSummary.final_time_emotions} />
                </div>
                <div className="mt-[300px] w-full px-8">
                  <QualitativeAnalysis summary={sessionSummary.qualitative_analysis} />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );  
};

export default CameraCapture;
