import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface EmotionTrendPlotProps {
  timeEmotions: Record<string, [number, number][]>;
}

const EmotionTrendPlot: React.FC<EmotionTrendPlotProps> = ({ timeEmotions }) => {
  // Convert dictionary to array format suitable for recharts
  const data: { frame: number; [emotion: string]: number }[] = [];
  
  Object.entries(timeEmotions).forEach(([emotion, values]) => {
    values.forEach(([frame, score]) => {
      let entry = data.find(d => d.frame === frame);
      if (!entry) {
        entry = { frame };
        data.push(entry);
      }
      entry[emotion] = score;
    });
  });

  // Sort data by frame index
  data.sort((a, b) => a.frame - b.frame);
  console.log(data)

  const colors = ["#8884d8", "#82ca9d", "#ff7300", "#ff6384", "#36a2eb", "#ffcc00", "#4bc0c0"];
  const emotionKeys = Object.keys(timeEmotions);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="frame" label={{ value: "Time", position: "insideBottomRight", offset: -5 }} />
        <YAxis label={{ value: "Emotion Score", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        {emotionKeys.map((emotion, index) => (
          <Line key={emotion} type="monotone" dataKey={emotion} stroke={colors[index % colors.length]} dot={true} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default EmotionTrendPlot;