"use client";
import * as React from "react";

interface Category {
  title: string;
  subtasks: string[];
}

interface MindMapContentProps {
  categories: Category[];
  centralLabel: string;
}

export const MindMapContent: React.FC<MindMapContentProps> = ({ categories, centralLabel }) => {
  // Base SVG dimensions for viewBox
  const width = 900;
  const height = 900;
  const centerX = width / 2;
  const centerY = height / 2;
  const primaryRadius = Math.min(width, height) / 2 - 180;
  const subRadius = 140;

  const categoryColors = [
    '#FDE68A', // yellow
    '#FECACA', // red
    '#BFDBFE', // blue
    '#C7D2FE', // purple
    '#D1FAE5', // teal
    '#FEE2E2'  // pink
  ];

  return (
    <main className="relative w-full mt-9">
      <div className="relative w-full aspect-square rounded-3xl">
        {/* Responsive SVG */}
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {categories.map((_, i) => {
              const color = categoryColors[i % categoryColors.length];
              return (
                <marker
                  key={`marker-${i}`}
                  id={`arrow-${i}`}
                  markerWidth="8"
                  markerHeight="8"
                  refX="6"
                  refY="4"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L8,4 L0,8" fill={color} />
                </marker>
              );
            })}
          </defs>

          {categories.map((_, i) => {
            const angle = (2 * Math.PI * i) / categories.length - Math.PI / 2;
            const x = centerX + primaryRadius * Math.cos(angle);
            const y = centerY + primaryRadius * Math.sin(angle);
            const color = categoryColors[i % categoryColors.length];
            return (
              <line
                key={`line-${i}`}
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke={color}
                strokeWidth={3}
                markerEnd={`url(#arrow-${i})`}
              />
            );
          })}

          {categories.map((cat, i) => {
            const angle = (2 * Math.PI * i) / categories.length - Math.PI / 2;
            const x = centerX + primaryRadius * Math.cos(angle);
            const y = centerY + primaryRadius * Math.sin(angle);
            const color = categoryColors[i % categoryColors.length];

            return cat.subtasks.map((_, j) => {
              const subAngle = angle + ((j - (cat.subtasks.length - 1) / 2) * 0.6);
              const sx = x + subRadius * Math.cos(subAngle);
              const sy = y + subRadius * Math.sin(subAngle);
              return (
                <line
                  key={`sline-${i}-${j}`}
                  x1={x}
                  y1={y}
                  x2={sx}
                  y2={sy}
                  stroke={color}
                  strokeWidth={2}
                  markerEnd={`url(#arrow-${i})`}
                />
              );
            });
          })}
        </svg>

        {/* Central Node */}
        <div
          className="absolute flex items-center justify-center bg-white px-6 py-4 rounded-3xl shadow-lg border border-gray-200"
          style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '220px'
          }}
        >
          <span className="text-center text-lg font-semibold text-gray-800 whitespace-pre-line">
            {centralLabel}
          </span>
        </div>

        {/* Primary Categories and Subtasks */}
        {categories.map((cat, i) => {
          const angle = (2 * Math.PI * i) / categories.length - Math.PI / 2;
          const x = centerX + primaryRadius * Math.cos(angle);
          const y = centerY + primaryRadius * Math.sin(angle);
          const bgColor = categoryColors[i % categoryColors.length];

          return (
            <React.Fragment key={i}>
              {/* Primary node */}
              <div
                className="absolute flex items-center justify-center px-4 py-3 rounded-2xl shadow-md border border-gray-300"
                style={{
                  top: `calc(${(y / height) * 100}% - 30px)`,
                  left: `calc(${(x / width) * 100}% - 80px)`,
                  backgroundColor: bgColor,
                  maxWidth: '160px'
                }}
              >
                <span className="text-center text-sm font-medium text-gray-900 whitespace-pre-line">
                  {cat.title}
                </span>
              </div>

              {/* Subtasks around each primary */}
              {cat.subtasks.map((sub, j) => {
                const subAngle = angle + ((j - (cat.subtasks.length - 1) / 2) * 0.6);
                const sx = x + subRadius * Math.cos(subAngle);
                const sy = y + subRadius * Math.sin(subAngle);
                return (
                  <div
                    key={j}
                    className="absolute flex items-center justify-center px-3 py-2 rounded-xl shadow-sm border border-gray-200"
                    style={{
                      top: `calc(${(sy / height) * 100}% - 28px)`,
                      left: `calc(${(sx / width) * 100}% - 65px)`,
                      backgroundColor: bgColor,
                      maxWidth: '130px'
                    }}
                  >
                    <span className="text-center text-xs text-gray-800 whitespace-pre-line">
                      {sub}
                    </span>
                  </div>
                );
              })}
            </React.Fragment>
          );
        })}
      </div>
    </main>
  );
};