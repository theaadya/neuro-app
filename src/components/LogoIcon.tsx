import React from "react";

export const LogoIcon: React.FC = () => {
  return (
    <div className="absolute top-5 left-5 h-[60px] w-[60px]">
      <svg
        width="1440"
        height="1024"
        viewBox="0 0 1440 1024"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="w-full h-full"
      >
        <g clipPath="url(#clip0_68_259)">
          <rect width="1440" height="1024" fill="black" />
          <rect width="1440" height="1024" fill="black" fillOpacity="0.2" />
          <rect
            x="0.5"
            y="0.5"
            width="1439"
            height="1023"
            rx="9.5"
            fill="white"
            stroke="black"
            strokeLinejoin="round"
          />
          <mask
            id="mask0_68_259"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="1024"
          >
            <rect
              x="0.5"
              y="0.5"
              width="1439"
              height="1023"
              rx="9.5"
              fill="white"
              stroke="white"
              strokeLinejoin="round"
            />
          </mask>
          <g mask="url(#mask0_68_259)">
            <g filter="url(#filter0_f_68_259)">
              <ellipse
                cx="516.48"
                cy="552.016"
                rx="516.48"
                ry="552.016"
                transform="matrix(-1 0 0 1 846.72 -24.1123)"
                fill="url(#paint0_radial_68_259)"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_68_259"
            x="-322.154"
            y="-160.026"
            width="1304.79"
            height="1375.86"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="67.957"
              result="effect1_foregroundBlur_68_259"
            />
          </filter>
          <radialGradient
            id="paint0_radial_68_259"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(784.048 629.65) rotate(91.5003) scale(851.875 797.113)"
          >
            <stop stopColor="#FFD9D7" />
            <stop offset="1" stopColor="#F2EEFF" />
          </radialGradient>
          <clipPath id="clip0_68_259">
            <rect width="1440" height="1024" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
