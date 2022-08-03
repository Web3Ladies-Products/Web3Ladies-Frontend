import React from "react";

const All = ({ width, height, isActive }) => {
  return (
    <svg
      width={width || "25"}
      height={height || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.8571 4H6.14286C5.83975 4 5.54906 4.12041 5.33474 4.33474C5.12041 4.54906 5 4.83975 5 5.14286V18.8571C5 19.1602 5.12041 19.4509 5.33474 19.6653C5.54906 19.8796 5.83975 20 6.14286 20H19.8571C20.1602 20 20.4509 19.8796 20.6653 19.6653C20.8796 19.4509 21 19.1602 21 18.8571V5.14286C21 4.83975 20.8796 4.54906 20.6653 4.33474C20.4509 4.12041 20.1602 4 19.8571 4ZM18.7143 6.28571V10.8571H14.1429V6.28571H18.7143ZM11.8571 6.28571V10.8571H7.28571V6.28571H11.8571ZM7.28571 17.7143V13.1429H11.8571V17.7143H7.28571ZM14.1429 17.7143V13.1429H18.7143V17.7143H14.1429Z"
        fill={isActive ? "#7D0BFE" : "#646464"}
      />
    </svg>
  );
};

export default All;
