import React from "react";

const BaseInput = ({
  errors,
  label,
  type,
  prefixIcon,
  className,
  ...nativeInputProps
}) => {
  return (
    <label className={`base-input ${className}`}>
      {label ? <span className="base-input__label">{label}</span> : null}
      <div
        className={`base-input__text-space-wrapper ${
          prefixIcon ? "has-prefix-icon" : ""
        }`}
      >
        {!!prefixIcon && <span className="base-input__icon">{prefixIcon}</span>}
        <input
          type={type ? type : "text"}
          className={`${
            errors[0]?.length && "input__form_error"
          } base-input__text-space`}
          {...nativeInputProps}
        />
      </div>

      {errors?.map?.((error, index) => (
        <span className="base-input__error" key={index}>
          {error}
        </span>
      ))}
    </label>
  );
};

export default BaseInput;
