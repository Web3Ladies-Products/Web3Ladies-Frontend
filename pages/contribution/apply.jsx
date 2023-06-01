import { useRouter } from "next/router";
import React, { useState } from "react";

import Navbar from "../../components/layouts/Navbar";
import ApplyForm from "../../components/contribution/ApplyForm";
import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  isactive: [],
  phone_number: [],
  slack_username: [],
  linkedin_url: [],
  hours: [],
  reason1: [],
  reason2: [],
  portfolio: [],
};
// Dxc academic
const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    isactive: "",
    phone_number: "",
    slack_username: "",
    linkedin_url: "",
    hours: "",
    reason1: "",
    reason2: "",
    portfolio: "",
  });
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitApplyForm = async (e) => {
    e.preventDefault();
    if (formData.isactive === "no") {
      formData.isactive = false;
    } else {
      formData.isactive = true;
    }
    // formData["profile_image"] = selectedFile;

    setShowLoader(true);
    console.log(formData, "here is the form data");
    console.log(selectedFile, "here is the selected file");

    try {
      await strapiService.jobApplicationRequest(formData, selectedFile);
      alertService.alertMethod(
        "success",
        "Waiting list request sent successfully"
      );
      setFormData({
        full_name: "",
        email: "",
        isactive: "",
        phone_number: "",
        slack_username: "",
        linkedin_url: "",
        hours: "",
        reason1: "",
        reason2: "",
        portfolio: "",
      });
      setSelectedFile(null);
      //   router.push("success");
      setShowLoader(false);
    } catch (error) {
      console.error(error, "here is the error");
      alertService.alertMethod("error", "Waiting list request failed");
      setShowLoader(false);
    }
  };

  return (
    <>
      {showLoader && <AppLoader />}
      <Navbar />
      <div className="award__register">
        <h2>Apply to role</h2>

        <ApplyForm
          showLoader={showLoader}
          submitApplyForm={submitApplyForm}
          errors={errors}
          selectedFile={selectedFile}
          setSelectedFile={setSelectedFile}
          handleFormInputChange={handleFormInputChange}
          formData={formData}
        />
      </div>
    </>
  );
};

export default Register;
