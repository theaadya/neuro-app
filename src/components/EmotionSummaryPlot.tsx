import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface EmotionSummaryProps {
  data: { name: string; score: number }[];
}

const EmotionSummaryPlot: React.FC<EmotionSummaryProps> = ({ data }) => {
  return (
    <div className="w-full h-64 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Top 3 Frequent Emotions</h2>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data}>
          <XAxis dataKey="name" tick={{ fontSize: 14 }} />
          <YAxis tick={{ fontSize: 14 }} />
          <Tooltip />
          <Bar dataKey="score" fill="#8884d8" barSize={40} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionSummaryPlot;
