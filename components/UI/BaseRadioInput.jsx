import React from "react";

const BaseRadioInput = ({
  label,

  ...nativeInputProps
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <input
        className={`${errors[0].length && "input__form_error"} `}
        {...nativeInputProps}
      />
      <label>{label} </label>
    </div>
  );
};

export default BaseRadioInput;
