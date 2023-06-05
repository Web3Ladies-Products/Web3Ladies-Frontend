import React from "react";

const BaseTextarea = ({
  errors,
  label,
  type,
  prefixIcon,
  className,
  rows,
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
        <textarea
          rows={rows}
          type={type ? type : "text"}
          className={`${
            errors[0].length && "input__form_error"
          } base-input__text-space`}
          
          {...nativeInputProps}
        />
      </div>

      {errors?.map?.((error, index) => (
        <span
          className="base-input__error"
          style={{ color: "red" }}
          key={index}
        >
          {error}
        </span>
      ))}
    </label>
  );
};

export default BaseTextarea;
