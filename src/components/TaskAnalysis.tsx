import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmotionSummaryPlot from "./EmotionSummaryPlot";
import EmotionTrendPlot from "./EmotionTrendPlot";
import QualitativeAnalysis from "./QualitativeAnalysis";
import { ActionButton } from "./ActionButton";

const moodOptions = [
  { label: "😄 Happy", value: "happy" },
  { label: "🙂 Content", value: "content" },
  { label: "😐 Neutral", value: "neutral" },
  { label: "😔 Sad", value: "sad" },
  { label: "😡 Frustrated", value: "frustrated" },
];

const TaskAnalysis: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sessionSummary = location.state?.sessionSummary;

  // Feedback state
  const [helpful, setHelpful] = useState<"yes" | "no" | null>(null);
  const [comments, setComments] = useState("");
  const [mood, setMood] = useState<string | null>(null);

  if (!sessionSummary) return <div>No session data found.</div>;

  const handleSubmit = () => {
    const payload = { helpful, comments, mood };
    console.log("Submitting feedback:", payload);
    // TODO: send `payload` to your feedback API endpoint via fetch/axios
    // e.g. fetch("/api/feedback", { method: "POST", body: JSON.stringify(payload) })
    navigate("/task-1", { state: { markOngoingDone: true } });
  };

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

      {/* SUCCESS BANNER */}
      <p className="w-full text-center text-green-600 text-xl font-semibold mb-4">
        🎉 Well done, that’s one more task completed today!!
      </p>

      <h2 className="text-2xl font-bold mb-6">Session Summary</h2>

      {sessionSummary.message ? (
        <p className="text-red-600 font-semibold">{sessionSummary.message}</p>
      ) : (
        <>
          {/* Face Emotion Analysis */}
          <h3 className="text-xl font-semibold w-full text-left px-8 mb-2">
            Facial Emotion Analysis
          </h3>
          <div className="flex w-full justify-between px-8">
            <div className="w-1/2 pr-4">
              <EmotionSummaryPlot data={sessionSummary.top_5_face_emotions} />
              <p className="mt-4 font-semibold">
                Analysis: {sessionSummary.summary}
              </p>
            </div>
            <div className="w-1/2 pl-4">
              <EmotionTrendPlot timeEmotions={sessionSummary.final_time_emotions} />
            </div>
          </div>

          <div className="mt-10 w-full px-8">
            <QualitativeAnalysis summary={sessionSummary.qualitative_analysis} />
          </div>

          {/* Voice Emotion Analysis */}
          <h3 className="text-xl font-semibold w-full text-left px-8 mt-10 mb-2">
            Voice Emotion Analysis
          </h3>
          <div className="flex w-full justify-between px-8">
            <div className="w-1/2 pt-4 pl-4">
              <EmotionSummaryPlot data={sessionSummary.top_5_voice_emotions} />
              <p className="mt-4 font-semibold">
                Analysis: {sessionSummary.voice_summary}
              </p>
            </div>
            <div className="w-1/2 pt-4 pl-4">
              <EmotionTrendPlot timeEmotions={sessionSummary.final_time_emotions} />
            </div>
          </div>
        </>
      )}

      {/* --- Feedback Section --- */}
      <div className="mt-16 px-8 w-full max-w-2xl">
        {/* 1) Was this helpful? */}
        <h3 className="text-lg font-semibold mb-2">
          Was this analysis helpful?
        </h3>
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => setHelpful("yes")}
            className={`px-4 py-2 rounded-xl border ${
              helpful === "yes" ? "border-green-600 bg-green-100" : "border-gray-300"
            }`}
          >
            👍 Yes
          </button>
          <button
            onClick={() => setHelpful("no")}
            className={`px-4 py-2 rounded-xl border ${
              helpful === "no" ? "border-red-600 bg-red-100" : "border-gray-300"
            }`}
          >
            👎 No
          </button>
        </div>

        {/* 2) Open‑ended comments */}
        <h3 className="text-lg font-semibold mb-2">Any suggestions or comments?</h3>
        <textarea
          value={comments}
          onChange={e => setComments(e.target.value)}
          placeholder="Type your feedback here…"
          rows={3}
          className="w-full p-3 border rounded-lg resize-none mb-4"
        />

        {/* 3) Mood selector */}
        <h3 className="text-lg font-semibold mb-2">
          How do you feel after completing this task?
        </h3>
        <div className="flex gap-4 mb-6">
          {moodOptions.map(opt => (
            <button
              key={opt.value}
              onClick={() => setMood(opt.value)}
              className={`text-2xl p-2 rounded-full border-2 ${
                mood === opt.value ? "border-rose-300" : "border-transparent"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* 4) Submit */}
        <button
          onClick={handleSubmit}
          disabled={!helpful || !mood}
          className="w-full bg-rose-400 text-white py-2 rounded-lg hover:bg-rose-400 disabled:opacity-50"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default TaskAnalysis;
