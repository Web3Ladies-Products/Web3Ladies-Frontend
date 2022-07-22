import React from "react";

const Button = ({
  type,
  hasIcon,
  buttonText,
  handleClick,
  color,
  children,
}) => {
  return (
    <button
      className={`${type} ${color ? color + "-color" : ""} ${
        hasIcon ? "has-icon" : ""
      }`}
      onClick={() => handleClick()}
    >
      {buttonText}
      {children && children}
    </button>
  );
};

export default Button;
