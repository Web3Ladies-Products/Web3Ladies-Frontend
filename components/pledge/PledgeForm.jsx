import React from "react";
import Button from "../buttons/Button";
import BaseInput from "../UI/BaseInput";
import BaseSelect from "../UI/BaseSelect";

const PledgeForm = ({
  showLoader,
  submitDonation,
  handleFormInputChange,
  formData,
  errors,
  ...props
}) => {
  return (
    <form onSubmit={submitDonation} {...props}>
      <div className="input full-40">
        <BaseInput
          placeholder="Johanna Doe"
          label={null}
          name="name"
          value={formData.name}
          onChange={handleFormInputChange}
          errors={[errors.name]}
          autoFocus={true}
          required={true}
        />
      </div>
      <div>
        <p>
          hereby take a pledge to support, share and donate to the <br />{" "}
          Web3Ladies vision. To:{" "}
        </p>
      </div>
      <div>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing eli. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing eli. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing eli. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing eli. </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing eli. </li>
        </ul>
      </div>
      <div className="input full-40">
        <BaseInput
          placeholder="Email"
          label={null}
          name="email"
          value={formData.email}
          onChange={handleFormInputChange}
          errors={[errors.email]}
          autoFocus={true}
          required={true}
        />
      </div>

      <div className="w-full mt-15">
        <Button
          buttonText={showLoader ? "Loading..." : "Take the pledge"}
          variant={"primary"}
          disabled={showLoader}
          type="submit"
        />
      </div>
    </form>
  );
};

export default PledgeForm;
