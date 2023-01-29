import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const success = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="container">
          <div className="feedback-images">
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                objectFit="contain"
                src="/assets/images/purple-pyramid.png"
                alt="pyramid-image"
              />
            </div>
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                objectFit="contain"
                src="/assets/images/celebration.png"
                alt="celebration-image"
              />
            </div>
            <div className="vector">
              <Image
                width={"100%"}
                height={"100%"}
                objectFit="contain"
                src="/assets/images/white-pyramid.png"
                alt="pyramid-image"
              />
            </div>
          </div>

          <div className="feedback">
            <div className="feedback-content">
              <h2>
                Thank you for registering <br></br>for Web3Ladies Mentorship
              </h2>
              <p>Keep an eye on your email!</p>
              <small>Follow us on our socials</small>
              <div className="icons-container">
              <Image
                  className="icon"
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/instagram.png"
                  alt="instagram-icon"
                />
                <Image
                  className="icon"
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/twitter.png"
                  alt="twitter-icon"
                />
                <Image
                  className="icon"
                  width={"20px"}
                  height={"20px"}
                  src="/assets/images/linkedin.png"
                  alt="linkedin-icon"
                />
                <Image
                  className="icon"
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
                src="/assets/images/purple-cylindrical.png"
                alt="purple-cylindrical-image"
              />
              <Image
                className=""
                width={"75px"}
                height={"93px"}
                src="/assets/images/cylindrical.png"
                alt="cylindrical-image"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default success;
