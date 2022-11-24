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

            <div className="contact_image">
              <div>
                <Image
                  className="hero-image"
                  width={"536px"}
                  height={"667px"}
                  src="/assets/images/contact-picture.png"
                  alt="sponsorship-image"
                />
                 <Image
                  className="hero-illustration"
                  width={"196px"}
                  height={"196px"}
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
                    <h2 >Email</h2>
                    <span className="justify">hello@web3ladies.com</span>
                  </div>
                  <div className="left">
                  <h2 >Telephone</h2>
                  <div className="justify">
                  <span >+971 58 570 4990</span>
                  <span >+971 58 570 4990</span>
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
