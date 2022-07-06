import React from "react";

const Button = ({ type, hasIcon, buttonText }) => {
  return <button className={type}>{buttonText}</button>;
};

export default Button;
