import React from "react";

const ChevronDown = ({ width, height, color, style }) => {
  return (
    <svg
      width={width || "12"}
      height={height || "8"}
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M2.00039 0.799805L6.00039 4.7998L10.0004 0.799805L11.6004 1.5998L6.00039 7.1998L0.400391 1.5998L2.00039 0.799805Z"
        fill={color || "black"}
      />
    </svg>
  );
};

export default ChevronDown;
