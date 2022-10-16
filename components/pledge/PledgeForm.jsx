import React from "react";
import Button from "../buttons/Button";
import BaseInput from "../UI/BaseInput";
import { generateInputChangeHandler } from "../../helpers";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
};

const PledgeForm = ({ handleFormSubmit, ...props }) => {
  const [formData, setFormData] = React.useState({
    full_name: "",
    email: "",
  });
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);
  const [showLoader, setShowLoader] = React.useState(false);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  return (
    <form
      onSubmit={(e) => handleFormSubmit(e, formData)}
      {...props}
      className="d-flex flex-column align-items-center"
    >
      <div className="d-flex align-center mb-20">
        <span className="mr-11">I </span>
        <div className="input mb-0">
          <BaseInput
            placeholder="Jen Eche"
            name="full_name"
            value={formData.full_name}
            onChange={handleFormInputChange}
            errors={[errors.full_name]}
            required={true}
            autoFocus={true}
          />
        </div>
      </div>
      <div
        className="mb-20"
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
      <div className="d-flex align-center mt-20 w-full">
        <div className="input mb-0">
          <BaseInput
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleFormInputChange}
            errors={[errors.email]}
            required={true}
          />
        </div>

        <div className="ml-11 mt-8">
          <Button
            buttonText={showLoader ? "Loading..." : "Take the pledge"}
            variant={"primary"}
            disabled={showLoader}
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default PledgeForm;
