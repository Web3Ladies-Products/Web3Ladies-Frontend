import React from "react";

const Button = ({
  type,
  hasIcon,
  buttonText,
  handleClick,
  color,
  children,
  ...props
}) => {
  return (
    <button
      className={`${type} ${color ? color + "-color" : ""} ${
        hasIcon ? "has-icon" : ""
      }`}
      onClick={() => handleClick()}
      {...props}
    >
      {buttonText}
      {children && children}
    </button>
  );
};

export default Button;
