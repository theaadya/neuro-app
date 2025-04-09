import React from "react";

interface Expression {
  name: string;
  score: number;
}

interface ExpressionLevelsProps {
  expressions: Expression[];
}

const ExpressionLevels: React.FC<ExpressionLevelsProps> = ({ expressions }) => (
  <div className="p-4 bg-gray-100 rounded w-64">
    <h2 className="text-lg font-bold mb-2">Expression Levels</h2>
    {expressions.length === 0 ? (
      <p>No data available</p>
    ) : (
      <ul>
        {expressions.map((expression, index) => (
          <li key={index} className="flex items-center mb-2">
            <div className="w-2/3 mr-2 bg-gray-300 rounded-full h-4 overflow-hidden">
              <div
                className="bg-black h-4"
                style={{ width: `${expression.score * 100}%` }}
              ></div>
            </div>
            <span className="text-sm">{expression.name}</span>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ExpressionLevels;
