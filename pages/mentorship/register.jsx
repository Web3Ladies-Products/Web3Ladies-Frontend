import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import RegisterForm from "../../components/mentorship/RegisterForm";
import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService } from "../../services";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
};

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
  const [selectedFile, setSelectedFile] = useState(null);

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    console.log({ data: formData });
    console.log(selectedFile);
    setShowLoader(true);
    try {
      //   const response = await strapiService.sendDonationRequest({
      //     data: formData,
      //   });
      // console.log(
      //   "🚀 ~ file: index.jsx ~ line 37 ~ submitDonation ~ response",
      //   response
      // );
      alertService.alertMethod(
        "success",
        "Waiting list request sent successfully"
      );
      //   setFormData({
      //     full_name: "",
      //     email: "",
      //   })
    } catch (error) {
      console.error(error);
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
