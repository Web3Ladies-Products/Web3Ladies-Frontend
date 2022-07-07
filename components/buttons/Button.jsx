import React from "react";

const Button = ({ type, hasIcon, buttonText, handleClick }) => {
  return (
    <button className={type} onClick={() => handleClick()}>
      {buttonText}
    </button>
  );
};

export default Button;
