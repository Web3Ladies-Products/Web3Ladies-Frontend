import React from "react";
import Button from "../buttons/Button";
import BaseInput from "../UI/BaseInput";
import BaseSelect from "../UI/BaseSelect";

const AwardForm = ({
  showLoader,
  submitDonation,
  handleFormInputChange,
  formData,
  errors,
  ...props
}) => {
  const paymentFrequencyOptions = [
    {
      label: "One-off",
      value: "one-off",
    },
    {
      label: "Monthly",
      value: "monthly",
    },
    {
      label: "Quarterly",
      value: "quarterly",
    },
    {
      label: "Yearly",
      value: "yearly",
    },
  ];

  return (
    <form onSubmit={submitDonation} {...props}>
      <div className="input full-40">
        <BaseInput
          placeholder="Jen Eche"
          label="Full name"
          name="full_name"
          value={formData.full_name}
          onChange={handleFormInputChange}
          errors={[errors.full_name]}
          autoFocus={true}
          required={true}
        />
      </div>
      <div className="input full-40">
        <BaseInput
          placeholder="Web3Ladies"
          label="Company's name"
          name="company_name"
          value={formData.company_name}
          onChange={handleFormInputChange}
          errors={[errors.company_name]}
          required={true}
        />
      </div>
      <div className="input full-40">
        <BaseInput
          placeholder="example@web3ladies.com"
          label="Company’s email"
          name="company_email"
          value={formData.company_email}
          onChange={handleFormInputChange}
          errors={[errors.company_email]}
          required={true}
        />
      </div>
      <div className="input full-40">
        <BaseSelect
          placeholder="Select area of sponsorship"
          label="Area of Sponsorship"
          name="area_of_sponsorship"
          options={[
            { label: "Mentorship", value: "mentorship" },
            { label: "Worktools", value: "worktools" },
            { label: "IRLs", value: "irls" },
          ]}
          onChange={handleFormInputChange}
          errors={[errors.area_of_sponsorship]}
          required={true}
        />
      </div>
      {/* <div className="input--checkbox">
      <input type="checkbox" name="terms" id="terms" required />
      <label htmlFor="terms">
        <div className="input--checkbox--box">
          <span className="input--checkbox--box--check"></span>
        </div>
        I agree to the <a href="#">Terms and Conditions</a>
      </label>
    </div> */}
      <div className="radio-list">
        <div className="radio-list__title">Payment Frequency</div>
        <ul>
          {paymentFrequencyOptions.map((option, index) => {
            return (
              <li key={index}>
                <input
                  type="radio"
                  name="payment_frequency"
                  id={option.value}
                  value={option.value}
                  onChange={handleFormInputChange}
                  checked={formData.payment_frequency === option.value}
                />
                <label
                  htmlFor={option.value}
                  className={
                    formData.payment_frequency === option.value ? "active" : ""
                  }
                >
                  {option.label}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full mt-15">
        <Button
          buttonText={showLoader ? "Loading..." : "Proceed"}
          variant={"primary"}
          disabled={showLoader}
          type="submit"
        />
      </div>
    </form>
  );
};

export default AwardForm;
