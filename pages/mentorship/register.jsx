import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Navbar from "../../components/layouts/Navbar";
import RegisterForm from "../../components/mentorship/RegisterForm";
import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  twitter_handle: [],
  isactive: [],
  phone_number: [],
  slack_username: [],
  linkedin_url: [],
  nationality: [],
  track: [],
  employment_status: [],
  dedication: [],
  reason1: [],
  reason2: [],
  comment: [],
  profile_picture: [],
};

const requiredFields = [
  { field: "full_name", message: "Name cannot be empty" },
  { field: "email", message: "Email cannot be empty" },
  { field: "twitter_handle", message: "Twitter handle cannot be empty" },
  { field: "isactive", message: "Select an option" },
  { field: "phone_number", message: "Phone number cannot be empty" },
  { field: "slack_username", message: "Slack username cannot be empty" },
  { field: "linkedin_url", message: "Linkedin url cannot be empty" },
  {
    field: "nationality",
    message: "Nationaly cannot be empty",
  },
  { field: "track", message: "Track cannot be empty" },
  { field: "employment_status", message: "Select an option" },
  { field: "dedication", message: "Select an option" },
  { field: "reason1", message: "Field cannot be empty" },
  { field: "reason2", message: "Field cannot be empty" },
  { field: "comment", message: "Comment cannot be empty" },
];

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

  const handleErrors = (field, errMsg) => {
    setErrors((prev) => {
      return {
        ...prev,
        [field]: errMsg,
      };
    });
  };

  const submitRegisterForm = async (e) => {
    e.preventDefault();
    if (
      !formData.full_name ||
      !formData.email ||
      !formData.twitter_handle ||
      !formData.phone_number ||
      !formData.slack_username ||
      !formData.linkedin_url ||
      !formData.nationality ||
      !formData.track ||
      !formData.employment_status ||
      !formData.dedication ||
      !formData.reason1 ||
      !formData.reason2 ||
      !formData.comment ||
      !selectedFile
    ) {
      for (const { field, message } of requiredFields) {
        if (!formData[field]) {
          handleErrors(field, [message]);
        } else {
          handleErrors(field, []);
        }
      }
      if (!selectedFile) {
        handleErrors("profile_picture", ["Please select an image"]);
      } else {
        handleErrors("profile_picture", []);
      }
      return;
    }

    if (formData.isactive === "no") {
      formData.isactive = false;
    } else {
      formData.isactive = true;
    }
    // formData["profile_image"] = selectedFile;

    setShowLoader(true);

    try {
      await strapiService.mentorshipRegisterRequest(formData, selectedFile);
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
