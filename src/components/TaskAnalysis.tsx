import { useLocation, useNavigate } from "react-router-dom";
import EmotionSummaryPlot from "./EmotionSummaryPlot";
import EmotionTrendPlot from "./EmotionTrendPlot";
import QualitativeAnalysis from "./QualitativeAnalysis";
import { ActionButton } from "./ActionButton";

const TaskAnalysis = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionSummary = location.state?.sessionSummary;

  if (!sessionSummary) return <div>No session data found.</div>;

  return (
    <div className="flex relative flex-col items-center px-20 pt-14 pb-28 w-full rounded-none min-h-[1024px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/03ca341ce415189a9df5af718d9f0232504132f9?placeholderIfAbsent=true&apiKey=2cda7839db8f4018bae6be70e9c6edce"
        alt="Background"
        className="object-cover absolute inset-0 size-full z-[-1] -mt-10"
      />

      <ActionButton
        onClick={() => navigate("/taskmanage")}
        className="absolute top-4 right-4"
      >
        Back to Task
      </ActionButton>

      <h2 className="text-2xl font-bold mb-6">Session Summary</h2>

      {sessionSummary.message ? (
        <p className="text-red-600 font-semibold">{sessionSummary.message}</p>
      ) : (
        <>
          {/* Face Emotion Analysis */}
          <h3 className="text-xl font-semibold w-full text-left px-8 mb-2">Facial Emotion Analysis</h3>
          <div className="flex w-full justify-between px-8">
            <div className="w-1/2 pr-4">
              <EmotionSummaryPlot data={sessionSummary.top_5_face_emotions} />
              <p className="mt-4 font-semibold">Analysis: {sessionSummary.summary}</p>
            </div>
            <div className="w-1/2 pl-4">
              <EmotionTrendPlot timeEmotions={sessionSummary.final_time_emotions} />
            </div>
          </div>

          <div className="mt-10 w-full px-8">
            <QualitativeAnalysis summary={sessionSummary.qualitative_analysis} />
          </div>

          {/* Voice Emotion Analysis */}
          <h3 className="text-xl font-semibold w-full text-left px-8 mt-10 mb-2">Voice Emotion Analysis</h3>
          <div className="flex w-full justify-between px-8">
            <div className="w-1/2 pt-4 pl-4">
              <EmotionSummaryPlot data={sessionSummary.top_5_voice_emotions} />
              <p className="mt-4 font-semibold">Analysis: {sessionSummary.voice_summary}</p>
            </div>
            <div className="w-1/2 pt-4 pl-4">
              <EmotionTrendPlot timeEmotions={sessionSummary.final_time_emotions} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskAnalysis;
