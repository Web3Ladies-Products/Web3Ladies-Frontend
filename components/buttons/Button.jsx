import React from "react";

const Button = ({
  variant,
  hasIcon,
  buttonText,
  handleClick,
  color,
  children,
  ...props
}) => {
  return (
    <button
      className={`${variant} ${color ? color + "-color" : ""} ${
        hasIcon ? "has-icon" : ""
      }`}
      onClick={() => (props.type === "submit" ? null : handleClick())}
      {...props}
    >
      {buttonText}
      {children && children}
    </button>
  );
};

export default Button;
