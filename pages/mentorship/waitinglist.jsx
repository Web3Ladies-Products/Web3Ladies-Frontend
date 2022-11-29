import Image from "next/image";
import React, { useState } from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import WaitingListForm from "../../components/mentorship/WaitingListForm";
import AppLoader from "../../components/UI/AppLoader";
import { generateInputChangeHandler } from "../../helpers";
import { alertService, strapiService } from "../../services";

const DEFAULT_ERRORS = {
  full_name: [],
  email: [],
};

const WaitingList = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
  });

  const [showLoader, setShowLoader] = React.useState(false);
  const [errors, setErrors] = React.useState(DEFAULT_ERRORS);

  const handleFormInputChange = generateInputChangeHandler(setFormData);

  const submitWaitingList = async (e) => {
    e.preventDefault();
    console.log({ data: formData });
    setShowLoader(true);
    try {
      const response = await strapiService.waitingList({
        data: formData,
      });
      console.log(
        "🚀 ~ file: index.jsx ~ line 37 ~ submitDonation ~ response",
        response
      );
      alertService.alertMethod(
        "success",
        "Waiting list request sent successfully"
      );
      setFormData({
        full_name: "",
        email: "",
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
      <Navbar />
      <section className="mentorship__success">
        <div className="contain">
          <div className="feedback">
            <div className="feedback__vector">
              <div className="vector__purple-pyramid">
                <Image
                  width={"85px"}
                  height={"93px"}
                  objectFit="fit"
                  src="/assets/images/purple-pyramid.png"
                  alt="pyramid-image"
                />
              </div>
              <div className="waitinglist__feedback">
                <h2 className="center">
                  Registration is <br></br>currently closed
                </h2>
                <p>Kindly join our waitlist</p>
                <div className="waitinglist__form">
                  <WaitingListForm
                    showLoader={showLoader}
                    submitWaitingList={submitWaitingList}
                    errors={errors}
                    handleFormInputChange={handleFormInputChange}
                    formData={formData}
                  />
                </div>
              </div>
              <div className="vector__white-pyramid">
                <Image
                  width={"84px"}
                  height={"86px"}
                  objectFit="contain"
                  src="/assets/images/white-pyramid.png"
                  alt="pyramid-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="vector__purple-cylindrical">
          <Image
            className=""
            width={"100%"}
            objectFit="contain"
            height={"100%"}
            src="/assets/images/purple-cylindrical.png"
            alt="purple-cylindrical-image"
          />
        </div>

        <div className="vector__cylindrical">
          <Image
            className=""
            width={"100%"}
            height={"100%"}
            objectFit="contain"
            src="/assets/images/cylindrical.png"
            alt="cylindrical-image"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WaitingList;
