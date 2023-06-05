import Image from "next/image";
import React from "react";

export default function BaseSelect({
  label,
  placeholder,
  options,
  errors,
  ...nativeSelectProps
}) {
  return (
    <label className="base-input">
      <div className="base-input__select">
        {label ? <span className="base-input__label">{label}</span> : null}
        <select
          className={`${
            errors[0].length && "input__form_error"
          } base-input__text-space`}
          {...nativeSelectProps}
        >
          {placeholder ? <option value="">{placeholder}</option> : null}
          {options?.map?.((option, index) => (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="base-input__select__arrow">
          <Image
            src="/assets/images/drop-arrow.svg"
            alt="notification-icon"
            height={16}
            width={16}
          />
        </div>
      </div>

      {errors?.map?.((error, index) => (
        <span className="base-input__error" key={index}>
          {error}
        </span>
      ))}
    </label>
  );
}
