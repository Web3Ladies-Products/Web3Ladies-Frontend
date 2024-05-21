import Image from "next/image";
import React, { useState } from "react";

import ContactForm from "./ContactForm";

import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";
import AppLoader from "../UI/AppLoader";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
  message: [],
};
const ContactSection = ({ contactDetails }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitContactForm = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    try {
      await strapiService.contactRequest({
        data: formData,
      });
      setFormData({
        full_name: "",
        email: "",
        message: "",
      });
      setShowLoader(false);
      alertService.alertMethod("success", "contact form sent successfully");
    } catch (error) {
      console.error(error);
      setShowLoader(false);
      alertService.alertMethod("error", "Waiting list request failed");
    }
  };

  return (
    <>
      {showLoader && <AppLoader />}

      <main>
        <div className="container cta mb-20">
          <div className="content">
            <div className="hero_content bootcamp">
              <h2>{contactDetails.description}</h2>
              <div className="mt-20">
                <ContactForm
                  showLoader={showLoader}
                  submitContactForm={submitContactForm}
                  errors={errors}
                  handleFormInputChange={handleFormInputChange}
                  formData={formData}
                />
              </div>
            </div>

            <div className="contact_image">
              <div>
                <Image
                  className="hero-image"
                  width={"436px"}
                  height={"550px"}
                  src="/assets/images/contact-picture.png"
                  alt="sponsorship-image"
                />
                <Image
                  className="hero-illustration"
                  width={"146px"}
                  height={"146px"}
                  src="/assets/images/web3ladies-union.png"
                  alt="bitcoin-logo"
                />
                <Image
                  className="hero-illustration"
                  width={"151px"}
                  height={"151px"}
                  src="/assets/images/mentorship-bootcamp-star.png"
                  alt="ethereum-logo"
                />

                <div className="cont">
                  <div className="p">
                    <h2>{contactDetails.email_heading}</h2>
                    <a
                      target="_blank"
                      href={`mailto:${contactDetails.email_text}`}
                      className="justify"
                    >
                      {contactDetails.email_text}
                    </a>
                  </div>
                  <div className="left">
                    <h2>{contactDetails.phone_number_text}</h2>
                    <div className="justify">
                      <span className="right">
                        {contactDetails.phone_number1}
                      </span>
                      <span>{contactDetails.phone_number2}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactSection;
