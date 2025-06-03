export const Arrow = ({inverted=false}) => {
    
  return (
    <svg
      width="38"
      height="39"
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: inverted ? "rotate(180deg)" : "none" }}
    >
      <g filter="url(#filter0_d_6327_3759)">
        <path
          d="M19 27.5C25.9036 27.5 31.5 21.9036 31.5 15C31.5 8.09644 25.9036 2.5 19 2.5C12.0964 2.5 6.5 8.09644 6.5 15C6.5 21.9036 12.0964 27.5 19 27.5Z"
          fill="#EB672F"
        />
      </g>
      <path
        d="M20.5748 19.4129L16.1748 15.0004L20.5748 10.5879"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <filter
          id="filter0_d_6327_3759"
          x="0.5"
          y="1.5"
          width="37"
          height="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0705882 0 0 0 0 0.108235 0 0 0 0 0.169412 0 0 0 0.22 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6327_3759"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6327_3759"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
