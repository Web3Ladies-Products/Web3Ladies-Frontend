import React from "react";

const Learn = ({ width, height, isActive }) => {
  return (
    <svg
      width={width || "25"}
      height={height || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 3L1.5 9L5.5 11.18V17.18L12.5 21L19.5 17.18V11.18L21.5 10.09V17H23.5V9L12.5 3ZM19.32 9L12.5 12.72L5.68 9L12.5 5.28L19.32 9ZM17.5 15.99L12.5 18.72L7.5 15.99V12.27L12.5 15L17.5 12.27V15.99Z"
        fill={isActive ? "#7D0BFE" : "#646464"}
        fill-opacity="0.8"
      />
    </svg>
  );
};

export default Learn;
