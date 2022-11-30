import Image from "next/image";
import React from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const Closed = () => {
  return (
    <>
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
              <div className="mid__vector">
                <Image
                  width={"80px"}
                  height={"80px"}
                  objectFit="contain"
                  src="/assets/images/celebration.png"
                  alt="celebration-image"
                />
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
            <div className="feedback-content">
              <div className="center">
                <h2>
                  You're now on
                  <br></br>the waitlist!
                </h2>
              </div>
              <p className="center">
                Join us on the Slack channel if you have not already, to get{" "}
                <br></br> first hand update on our cohort programs{" "}
              </p>

              <div className="closed__icons-container ">
                <Image
                  // className="icon"
                  width={"100%"}
                  height={"100%"}
                  objectFit="contain"
                  src="/assets/images/slack.png"
                  alt="slack-icon"
                />
                <p>Join our Slack community</p>
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

export default Closed;
