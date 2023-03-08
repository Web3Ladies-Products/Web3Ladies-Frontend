import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import RegisterForm from "../../components/mentorship/RegisterForm";
import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
};
// Dxc academic
const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    twitter_handle: "",
    isactive: "",
    phone_number: "",
    slack_username: "",
    linkedin_url: "",
    nationality: "",
    track: "",
    employment_status: "",
    dedication: "",
    reason1: "",
    reason2: "",
    comment: "",
  });
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    if (formData.isactive === "no") {
      formData.isactive = false;
    } else {
      formData.isactive = true;
    }
    // formData["profile_image"] = selectedFile;

    setShowLoader(true);

    try {
      const response = await strapiService.mentorshipRegisterRequest(
        formData,
        selectedFile
      );
      alertService.alertMethod(
        "success",
        "Waiting list request sent successfully"
      );
      setFormData({
        full_name: "",
        email: "",
        twitter_handle: "",
        isactive: "",
        phone_number: "",
        slack_username: "",
        linkedin_url: "",
        nationality: "",
        track: "",
        employment_status: "",
        dedication: "",
        reason1: "",
        reason2: "",
        comment: "",
      });
      router.push("success");
    } catch (error) {
      console.error(error, "here is the error");
      alertService.alertMethod("error", "Waiting list request failed");
    } finally {
      setShowLoader(false);
    }
  };

  return (
    <>
      {showLoader && <AppLoader />}
      <Navbar />
      <div className="award__register">
        <h2>Register</h2>

        <RegisterForm
          showLoader={showLoader}
          submitRegisterForm={submitRegisterForm}
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
