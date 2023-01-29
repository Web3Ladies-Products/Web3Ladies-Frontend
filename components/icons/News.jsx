import React from "react";

const News = ({ width, height, isActive }) => {
  return (
    <svg
      width={width || "25"}
      height={height || "24"}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.5 5.99997H14.914L17.207 3.70697L15.793 2.29297L12.5 5.58597L9.207 2.29297L7.793 3.70697L10.086 5.99997H4.5C3.397 5.99997 2.5 6.89697 2.5 7.99997V19C2.5 20.103 3.397 21 4.5 21H20.5C21.603 21 22.5 20.103 22.5 19V7.99997C22.5 6.89697 21.603 5.99997 20.5 5.99997ZM4.5 19V7.99997H20.5L20.502 19H4.5Z"
        fill={isActive ? "#7D0BFE" : "#646464"}
        fillOpacity="0.8"
      />
    </svg>
  );
};

export default News;
