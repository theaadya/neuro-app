import React from "react";

interface Expression {
  name: string;
  score: number | string; // Allowing string in case of API inconsistencies
}

interface TopExpressionsProps {
  expressions: Expression[];
}

const TopExpressions: React.FC<TopExpressionsProps> = ({ expressions }) => (
  <div className="p-4 bg-gray-100 rounded w-64">
    <h2 className="text-lg font-bold">Top Expressions</h2>
    {expressions.length === 0 ? (
      <p>No data available</p>
    ) : (
      <ul>
        {expressions.map((expression, index) => (
          <li key={index} className="flex justify-between py-1">
            <span>{index + 1}. {expression.name}</span>
            <strong>
              {typeof expression.score === "number" ? expression.score.toFixed(2) : "-"}
            </strong>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default TopExpressions;
