import Image from "next/image";
import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import ContactForm from "../../components/contact/ContactForm";
import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService } from "../../services";

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
    console.log({ data: formData });
    setShowLoader(true);
    try {
      //   const response = await strapiService.sendDonationRequest({
      //     data: formData,
      //   });
      // console.log(
      //   "🚀 ~ file: index.jsx ~ line 37 ~ submitDonation ~ response",
      //   response
      // );
      alertService.alertMethod("success", "contact form sent successfully");
      setFormData({
        full_name: "",
        email: "",
        message: "",
      });
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

      <main>
        <div className="container cta">
          <div className="content">
            <div className="hero_content bootcamp">
              <h2>We are eager to hear from you</h2>
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

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"617px"}
                  height={"445px"}
                  src={contactDetails.image}
                  alt="sponsorship-image"
                />
                <Image
                  className="hero-illustration"
                  width={"170px"}
                  height={"68px"}
                  src="/assets/images/web3ladies-vector.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactSection;
