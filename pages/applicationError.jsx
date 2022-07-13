import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const applicationError = () => {
  return (
    <>
      <Navbar />
      <div className="feedback-container">
        <div className="feedback-images">
          <Image
            width={"85px"}
            height={"93px"}
            src="/assets/images/pyramid-outline.png"
            alt="pyramid-image"
          />
          <Image
            width={"80px"}
            height={"80px"}
            src="/assets/images/sad-face.png"
            alt="sad-face-image"
          />
          <Image
            width={"80px"}
            height={"80px"}
            src="/assets/images/white-pyramid-outline.png"
            alt="pyramid-image"
          />
        </div>

        <div className="feedback">
          <div className="feedback-content">
            <h2>Application Error</h2>
            <p>
              Please try again or contact our admins <br></br>on social for
              support.
            </p>

            <div className="icons">
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
      <Footer />
    </>
  );
};

export default applicationError;
