import React from "react";

const Press = ({ width, height, isActive }) => {
  return (
    <svg
      width={width || "25"}
      height={height || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 20C19.0304 20 19.5391 19.7893 19.9142 19.4142C20.2893 19.0391 20.5 18.5304 20.5 18V7C20.5 6.73478 20.3946 6.48043 20.2071 6.29289C20.0196 6.10536 19.7652 6 19.5 6H16.5V14V20H18.5ZM18.5 20C17.9696 20 17.4609 19.7893 17.0858 19.4142C16.7107 19.0391 16.5 18.5304 16.5 18V5C16.5 4.73478 16.3946 4.48043 16.2071 4.29289C16.0196 4.10536 15.7652 4 15.5 4H5.5C5.23478 4 4.98043 4.10536 4.79289 4.29289C4.60536 4.48043 4.5 4.73478 4.5 5V17C4.5 17.7956 4.81607 18.5587 5.37868 19.1213C5.94129 19.6839 6.70435 20 7.5 20H18.5ZM8.5 8H12.5M8.5 12H12.5M8.5 16H12.5"
        stroke={isActive ? "#7D0BFE" : "#646464"}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Press;
