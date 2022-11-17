import React from "react";
import cn from "classnames";
const Button = ({
  variant,
  hasIcon,
  buttonText,
  handleClick,
  color,
  children,
  fullWidth,
  border,
  ...props
}) => {
  return (
    <button
      className={cn(
        props.className,
        variant ? "primary" : "",
        color ? color + "-color" : "",
        hasIcon ? "has-icon" : "",
        fullWidth ? "w-full" : "",
        border ? "border__btn" : "",
      )}
      onClick={() => (props.type === "submit" ? null : handleClick())}
      {...props}
    >
      {buttonText}
      {children && children}
    </button>
  );
};

export default Button;
