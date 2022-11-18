import React from "react";
import Button from "../buttons/Button";
import BaseInput from "../UI/BaseInput";
import BaseRadioInput from "../UI/BaseRadioInput";
import BaseSelect from "../UI/BaseSelect";

const RegisterForm = ({
  handleFormInputChange,
  formData,
  submitRegisterForm,
  errors,
  showLoader,
}) => {
  return (
    <form className="" onSubmit={submitRegisterForm}>
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
            autoFocus={true}
            required={true}
          />
        </div>
        <div className="input">
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
      </div>
      <div className="d-flex register-joinedfield mb-20">
        <div>
          <p>Are you an active member of the LadiesDoTech community?</p>
          <div className="d-flex register-joinedfield_checkbox">
            <BaseRadioInput
              label="Yes"
              name="isactive"
              onChange={handleFormInputChange}
              value="yes"
              checked={formData.isactive === "yes"}
              type="radio"
            />

            <BaseRadioInput
              label="No"
              onChange={handleFormInputChange}
              value="no"
              name="isactive"
              checked={formData.isactive === "no"}
              type="radio"
            />
          </div>
        </div>
      </div>

      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="+234"
            label="Phone number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleFormInputChange}
            errors={[errors.phone_number]}
            autoFocus={true}
            required={true}
          />
        </div>
        <div className="input">
          <BaseInput
            placeholder="Johanna Doe"
            label="Twitter handle"
            name="twitter_handle"
            value={formData.twitter_handle}
            onChange={handleFormInputChange}
            errors={[errors.twitter_handle]}
            autoFocus={true}
            required={true}
          />
        </div>
      </div>

      <div className="d-flex  register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="example@web3ladies.com"
            label="Slack Username on LadiesDoTech community"
            name="slack_username"
            value={formData.slack_username}
            onChange={handleFormInputChange}
            errors={[errors.slack_username]}
            autoFocus={true}
            required={true}
          />
        </div>
        <div className="input">
          <BaseInput
            placeholder="linkedin.com/in/web3ladies"
            label="LinkedIn Url"
            name="linkedin_url"
            value={formData.linkedin_url}
            onChange={handleFormInputChange}
            errors={[errors.linkedin_url]}
            autoFocus={true}
            required={true}
          />
        </div>
      </div>
      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="Nigerian"
            label="What is your Nationality?"
            name="nationality"
            value={formData.nationality}
            onChange={handleFormInputChange}
            errors={[errors.nationality]}
            autoFocus={true}
            required={true}
          />
        </div>
        <div className="input">
          <BaseSelect
            placeholder="Blockchain Developer"
            label="Tracks"
            name="track"
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
      </div>

      <div className="d-flex register-joinedfield mb-20">
        <div>
          <p>Employment Status</p>
          <div className="d-flex register-joinedfield_checkbox">
            <BaseRadioInput
              label="Employed"
              onChange={handleFormInputChange}
              value="employed"
              name="employment_status"
              checked={formData.employment_status === "employed"}
              type="radio"
            />
            <BaseRadioInput
              label="Unemployed"
              onChange={handleFormInputChange}
              value="unemployed"
              name="employment_status"
              checked={formData.employment_status === "unemployed"}
              type="radio"
            />
            <BaseRadioInput
              label="Self-employed"
              onChange={handleFormInputChange}
              value="selfEmployed"
              name="employment_status"
              checked={formData.employment_status === "selfEmployed"}
              type="radio"
            />
            <BaseRadioInput
              label="Student"
              onChange={handleFormInputChange}
              value="student"
              name="employment_status"
              checked={formData.employment_status === "student"}
              type="radio"
            />
          </div>
        </div>
      </div>
      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder=""
            label="Why did you decide to apply to the program?"
            name="reason1"
            value={formData.reason1}
            onChange={handleFormInputChange}
            errors={[errors.reason1]}
            autoFocus={true}
            required={true}
          />
        </div>
      </div>
      <div className="d-flex register-joinedfield mb-20">
        <div>
          <p>Are you willing to dedicate your time for the training?</p>
          <div className="d-flex register-joinedfield_checkbox">
            <BaseRadioInput
              label="Yes"
              name="dedication"
              onChange={handleFormInputChange}
              value="yes"
              checked={formData.dedication === "yes"}
              type="radio"
            />

            <BaseRadioInput
              label="No"
              onChange={handleFormInputChange}
              value="no"
              name="dedication"
              checked={formData.dedication === "no"}
              type="radio"
            />
          </div>
        </div>
      </div>
      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder=""
            label="Why do you think you are a good fit for this program?"
            name="reason2"
            value={formData.reason2}
            onChange={handleFormInputChange}
            errors={[errors.reason2]}
            autoFocus={true}
            required={true}
          />
        </div>
      </div>
      <div>
        <p>Submit your preferred picture here (Headshot or full image)</p>
      </div>
      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder=""
            label="Drop comments or questions you have regarding the mentorship program"
            name="comment"
            value={formData.comment}
            onChange={handleFormInputChange}
            errors={[errors.comment]}
            autoFocus={true}
            required={true}
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

export default RegisterForm;