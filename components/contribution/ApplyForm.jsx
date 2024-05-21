import React from "react";
import Button from "../buttons/Button";
import BaseInput from "../UI/BaseInput";
import BaseRadioInput from "../UI/BaseRadioInput";
import BaseTextarea from "../UI/BaseTextarea";

const ApplyForm = ({
  handleFormInputChange,
  formData,
  submitApplyForm,
  errors,
  showLoader,
  selectedFile,
  setSelectedFile,
}) => {
  return (
    <form className="" onSubmit={submitApplyForm}>
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
          {errors.isactive && (
            <p className="form__error_text">{errors.isactive[0]}</p>
          )}
        </div>
      </div>

      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="example@web3ladies.com"
            label="Slack Username on LadiesDoTech community"
            name="slack_username"
            value={formData.slack_username}
            onChange={handleFormInputChange}
            errors={[errors.slack_username]}
          />
        </div>
        <div className="input">
          <BaseInput
            placeholder="+234"
            label="Phone number"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleFormInputChange}
            errors={[errors.phone_number]}
          />
        </div>
      </div>

      <div className="d-flex  register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder="linkedin.com/in/web3ladies"
            label="LinkedIn Url"
            name="linkedin_url"
            value={formData.linkedin_url}
            onChange={handleFormInputChange}
            errors={[errors.linkedin_url]}
          />
        </div>
        <div className="input"></div>
      </div>

      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseTextarea
            placeholder=""
            rows={5}
            label="Why did you decide to apply to this opportunity?"
            name="reason1"
            value={formData.reason1}
            onChange={handleFormInputChange}
            errors={[errors.reason1]}
          />
        </div>
      </div>
      <div className="d-flex  register-joinedfield">
        <div className="input">
          <label className={`base-input `}>
            <span className="base-input__label">
              How many hours are you willing to dedicate to the role?
            </span>
            <div
              style={{ maxWidth: "150px" }}
              className={`base-input__text-space-wrapper`}
            >
              <input
                placeholder="8 hours"
                name="hours"
                value={formData.hours}
                onChange={handleFormInputChange}
                className={`${
                  errors.hours?.length && "input__form_error"
                } base-input__text-space`}
              />
            </div>
          </label>
        </div>
      </div>

      <div className="d-flex register-joinedfield">
        <div className="input">
          <BaseTextarea
            placeholder=""
            rows={5}
            label="Why do you think you are a good fit for this program?"
            name="reason2"
            value={formData.reason2}
            onChange={handleFormInputChange}
            errors={[errors.reason2]}
          />
        </div>
      </div>
      <div className="d-flex mb-20 register-joinedfield">
        <div>
          <p className="mb-14">Submit your Resume/CV</p>

          <label
            className={`${
              errors.portfolio_file.length && "input__form_error"
            } form__register-file`}
          >
            + Upload image
            <input
              className=""
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </label>
          {errors.portfolio_file && (
            <p className=" mt-14 form__error_text">
              {errors.portfolio_file[0]}
            </p>
          )}

          {selectedFile && <p className="mt-14">{selectedFile?.name}</p>}
        </div>
      </div>
      <div className="d-flex mt-20 register-joinedfield">
        <div className="input">
          <BaseInput
            placeholder=""
            label="Link to your portfolio site or document"
            name="portfolio_link"
            value={formData.portfolio_link}
            onChange={handleFormInputChange}
            errors={[errors.portfolio_link]}
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

export default ApplyForm;
