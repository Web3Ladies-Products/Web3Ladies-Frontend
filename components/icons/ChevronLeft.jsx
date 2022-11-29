import React from "react";

const ChevronLeft = ({ width, height, color, style }) => {
  return (
    <svg
      width={width || "17"}
      height={height || "16"}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M9.83344 4L10.7734 4.94L7.7201 8L10.7734 11.06L9.83344 12L5.83344 8L9.83344 4Z"
        fill={color || "black"}
      />
    </svg>
  );
};

export default ChevronLeft;
