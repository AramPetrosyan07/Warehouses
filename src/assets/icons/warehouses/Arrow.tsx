import React from "react";

interface ShortArrowProps {
  rotate?: number; // degrees, e.g. 90, 180, etc.
  width?: number | string;
  height?: number | string;
}

export const ShortArrow: React.FC<ShortArrowProps> = ({
  rotate = 0,
  width = 24,
  height = 25,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M9 6.5L15 12.5L9 18.5"
        stroke="#687384"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
