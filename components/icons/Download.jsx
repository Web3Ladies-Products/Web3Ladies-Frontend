import React from "react";

const Download = ({ color, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.8327 18.3332H4.16602V16.6665H15.8327V18.3332ZM9.99935 14.9998L4.99935 9.99984L6.17435 8.82484L9.16602 11.8082V4.1665H10.8327V11.8082L13.8243 8.82484L14.9993 9.99984L9.99935 14.9998Z"
        fill={color || "#7D0BFE"}
      />
    </svg>
  );
};

export default Download;
