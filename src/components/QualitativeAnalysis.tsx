import React, { useState } from "react";

interface QualitativeAnalysisProps {
  summary: string;
}

const QualitativeAnalysis: React.FC<QualitativeAnalysisProps> = ({ summary }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-6 rounded bg-gray-100 shadow-md w-full text-center p-4">
      <h2 className="text-lg font-bold mb-2">Qualitative Analysis</h2>
      <p
        className={`text-gray-700 text-sm transition-all duration-300 ${
          expanded ? "" : "line-clamp-2"
        }`}
      >
        {summary}
      </p>
      {summary.split(" ").length > 20 && (
        <button
          className="mt-2 text-blue-500 hover:underline text-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default QualitativeAnalysis;
