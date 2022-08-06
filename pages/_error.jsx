import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Button from "../components/buttons/Button";

const CustomError = ({ pageTitle, message, statusCode, redirectText }) => {
  return (
    <>
      <Navbar />
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "calc(100vh - 530px)" }}
      >
        <div className="container">
          <div className="feedback-images">
            <div className="vector">
              <Image
                width={"100%"}
                height={"93px"}
                src="/assets/images/pyramid-outline.png"
                alt="pyramid-image"
              />
            </div>
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                src="/assets/images/sad-face.png"
                alt="sad-face-image"
              />
            </div>
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                src="/assets/images/white-pyramid-outline.png"
                alt="pyramid-image"
              />
            </div>
          </div>

          <div className="feedback">
            <div className="feedback-content">
              <h2>{pageTitle || "Application Error"}</h2>
              <p
                _dangerouslySetInnerHTML={{
                  __html:
                    message ||
                    "Please try again or contact our admins <br></br>on social for support.",
                }}
              />
              <Button
                type={"primary"}
                buttonText={redirectText || "Go back home"}
                handleClick={() => {
                  window.location.href = "/";
                }}
              />

              <div className="icons-container">
                <Image
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/instagram.png"
                  alt="instagram-icon"
                />
                <Image
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/twitter.png"
                  alt="twitter-icon"
                />
                <Image
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/linkedin.png"
                  alt="linkedin-icon"
                />
                <Image
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/slack.png"
                  alt="slack-icon"
                />
              </div>
            </div>
          </div>

          <div className="cylindrical-images">
            <div className="">
              <Image
                className=""
                width={"75px"}
                height={"93px"}
                src="/assets/images/white-cylindrical-outline.png"
                alt="celebration-image"
              />
              <Image
                className=""
                width={"75px"}
                height={"93px"}
                src="/assets/images/cylindrical-outline.png"
                alt="celebration-image"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CustomError;
