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
  ...props
}) => {
  return (
    <button
      className={cn(
        props.className,
        variant ? variant : "primary",
        color ? color + "-color" : "",
        hasIcon ? "has-icon" : "",
        fullWidth ? "w-full" : ""
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
