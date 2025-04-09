import React from "react";

interface QualitativeAnalysisProps {
  summary: string;
}

const QualitativeAnalysis: React.FC<QualitativeAnalysisProps> = ({ summary }) => {
  return (
    <div className="mt-6 rounded bg-gray-100 shadow-md w-full text-center">
      <h2 className="text-lg font-bold mb-2">Qualitative Analysis</h2>
      <p className="text-gray-700">{summary}</p>
    </div>
  );
};

export default QualitativeAnalysis;
