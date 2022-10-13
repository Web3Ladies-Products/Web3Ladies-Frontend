import React from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import { generateInputChangeHandler } from "../../helpers";
import PledgeForm from "./../../components/pledge/PledgeForm";

const DEFAULT_ERRORS = {
  name: [],
  email: [],
};

const Pledge = () => {
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);
  const [showLoader, setShowLoader] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
  });

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  return (
    <>
      <Navbar />
      <div className="app-container">
        <section>
          <div className="container">
            <h1 className="section-title center">Take our pledge</h1>
          </div>
        </section>
        <section>
          <div className="container">
            <PledgeForm
              formData={formData}
              errors={errors}
              handleFormInputChange={handleFormInputChange}
              submitDonation={(e) => {
                e.preventDefault();
              }}
              showLoader={showLoader}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pledge;
