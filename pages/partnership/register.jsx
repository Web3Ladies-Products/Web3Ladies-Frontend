import { useRouter } from "next/router";
import React, { useState } from "react";

import Navbar from "../../components/layouts/Navbar";

import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";
import PartnershipForm from "../../components/partnership/PartnershipForm";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  area_of_partnership: [],
  company_name: [],
  message: [],
};

const requiredFields = [
  { field: "full_name", message: "Name cannot be empty" },
  { field: "email", message: "Email cannot be empty" },
  {
    field: "area_of_partnership",
    message: "Area of partnership cannot be empty",
  },
  { field: "company_name", message: "Company name cannot be empty" },
  { field: "message", message: "Message cannot be empty" },
];

// Dxc academic
const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    area_of_partnership: "",
    company_name: "",
    message: "",
  });
  const router = useRouter();

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
      !formData.area_of_partnership ||
      !formData.company_name ||
      !formData.message
    ) {
      for (const { field, message } of requiredFields) {
        if (!formData[field]) {
          handleErrors(field, [message]);
        } else {
          handleErrors(field, []);
        }
      }
      return;
    }

    setShowLoader(true);

    try {
      await strapiService.sendPartnershipRequest(formData);
      alertService.alertMethod(
        "success",
        "Waiting list request sent successfully"
      );
      setFormData({
        full_name: "",
        email: "",
        area_of_partnership: "",
        company_name: "",
        message: "",
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
        <h2>Join the big league</h2>
        <p>Kindly fill the form and our team will contact you</p>

        <PartnershipForm
          showLoader={showLoader}
          submitRegisterForm={submitRegisterForm}
          errors={errors}
          handleFormInputChange={handleFormInputChange}
          formData={formData}
        />
      </div>
    </>
  );
};

export default Register;
