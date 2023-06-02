import React from "react";
import Button from "../buttons/Button";
import BaseInput from "../UI/BaseInput";

import BaseSelect from "../UI/BaseSelect";
import BaseTextarea from "../UI/BaseTextarea";

const PartnershipForm = ({
  handleFormInputChange,
  formData,
  submitRegisterForm,
  errors,
  showLoader,
  selectedFile,
  setSelectedFile,
}) => {
  return (
    <form className="" onSubmit={submitRegisterForm}>
      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="Jen Eche"
            label="Full name"
            name="full_name"
            value={formData.full_name}
            onChange={handleFormInputChange}
            errors={[errors.full_name]}
            required
          />
        </div>
        <div className="input">
          <BaseInput
            placeholder="weg3ladies"
            label="Company's name"
            name="company_name"
            value={formData.company_name}
            onChange={handleFormInputChange}
            errors={[errors.company_name]}
            required
          />
        </div>
      </div>

      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="example@web3ladies.com"
            label="Email *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleFormInputChange}
            errors={[errors.email]}
            required
          />
        </div>
        <div className="input">
          <BaseSelect
            placeholder="Select an area of partnership"
            label="Area of partnership"
            name="area_of_partnership"
            options={[
              { label: "Mentor", value: "mentor" },
              { label: "Mentorship", value: "mentorship" },
              { label: "Sponsor", value: "sponsor" },
              { label: "Donator", value: "donator" },
            ]}
            onChange={handleFormInputChange}
            errors={[errors.area_of_partnership]}
            required
          />
        </div>
      </div>
      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseTextarea
            placeholder=""
            rows={5}
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleFormInputChange}
            errors={[errors.message]}
            required
          />
        </div>
      </div>

      <div className="w-full mt-10">
        <Button
          buttonText={showLoader ? "Loading..." : "Submit"}
          variant={"primary"}
          disabled={showLoader}
          type="submit"
        />
      </div>
    </form>
  );
};

export default PartnershipForm;
