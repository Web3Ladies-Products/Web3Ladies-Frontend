import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { useRouter } from "next/router";
import { generateInputChangeHandler } from "../../helpers";
import DonationForm from "../../components/donation/DonationForm";
import PaymentMethod from "../../components/donation/PaymentMethod";
import { addDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { colRef } from "../firebase";

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
    email: "",
    area_of_sponsorship: "",
    payment_frequency: "one-off",
  });

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitDonation = async (e) => {
    // e.preventDefault();
    // setShowLoader(true);
    // setErrors(DEFAULT_ERRORS);
    // try {
    //   router.push("/");
    // } catch (error) {
    //   const errorMessage = error?.response?.data?.message;
    //   if (typeof errorMessage === "object") {
    //     setErrors(formatApiErrors(errorMessage));
    //   }
    // }
    // finally {
    //   setShowLoader(false);
    // }
    setActiveView("payment-method");
  };

  React.useEffect(() => {
    const getDonors = async () => {
      const response = await getDocs(colRef);
      console.log(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDonors();
  }, []);

  return (
    <>
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
                submitDonation={(e) => {
                  e.preventDefault();
                  setActiveView("payment-method");
                }}
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
