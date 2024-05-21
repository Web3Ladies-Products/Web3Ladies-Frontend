import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";

import { generateInputChangeHandler } from "../../helpers";
import DonationForm from "../../components/donation/DonationForm";
import PaymentMethod from "../../components/donation/PaymentMethod";
import AppLoader from "../../components/UI/AppLoader";
import { strapiService } from "../../services/strapi.service";
import { alertService } from "../../services";

const DEFAULT_ERRORS = {
  full_name: [],
  company_name: [],
  email: [],
  area_of_sponsorship: [],
  payment_frequency: [],
};

const Donate = () => {
  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);
  const [activeView, setActiveView] = React.useState("donation-form");
  const [formData, setFormData] = React.useState({
    full_name: "",
    company_name: "",
    company_email: "",
    area_of_sponsorship: "",
    payment_frequency: "one-off",
  });

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitDonation = async (e) => {
    e.preventDefault();
    setShowLoader(true);
    try {
      const response = await strapiService.sendDonationRequest({
        data: formData,
      });

      alertService.alertMethod("success", "Donation request sent successfully");
    } catch (error) {
      console.error(error);
      alertService.alertMethod("error", "Donation request failed");
    } finally {
      setShowLoader(false);
      setActiveView("payment-method");
    }
  };

  return (
    <>
      {showLoader && <AppLoader />}
      <Navbar />
      <div className="app-container">
        <section>
          <div className="container">
            <h1 className="section-title center">
              Donate to sponsor Web3Ladies
            </h1>
          </div>
        </section>
        <section>
          <div className="container">
            {activeView === "donation-form" && (
              <DonationForm
                formData={formData}
                errors={errors}
                handleFormInputChange={handleFormInputChange}
                submitDonation={submitDonation}
                showLoader={showLoader}
              />
            )}
            {activeView === "payment-method" && <PaymentMethod />}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
