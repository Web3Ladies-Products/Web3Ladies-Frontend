import React from "react";

const Button = ({ type, hasIcon, buttonText, handleClick, color }) => {
  return (
    <button className={`${type} ${color}-color`} onClick={() => handleClick()}>
      {buttonText}
    </button>
  );
};

export default Button;
