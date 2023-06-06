import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Button from "../components/buttons/Button";
import {
  INSTAGRAM_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  SLACK_URL,
} from "../lib/constants";

const CustomError = ({ pageTitle, message, statusCode, redirectText }) => {
  const SOCIAL_LINKS = [
    {
      name: "instagram",
      link: INSTAGRAM_URL,
    },
    {
      name: "twitter",
      link: TWITTER_URL,
    },
    {
      name: "linkedin",
      link: LINKEDIN_URL,
    },
    {
      name: "slack",
      link: SLACK_URL,
    },
  ];

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
                  src="/assets/images/pyramid-outline.png"
                  alt="pyramid-image"
                />
              </div>
              <div className="mid__vector">
                <Image
                  width={"80px"}
                  height={"80px"}
                  objectFit="contain"
                  src="/assets/images/sad-face.png"
                  alt="sad-image"
                />
              </div>
              <div className="vector__white-pyramid">
                <Image
                  width={"84px"}
                  height={"86px"}
                  objectFit="contain"
                  src="/assets/images/white-pyramid-outline.png"
                  alt="pyramid-image"
                />
              </div>
            </div>
            <div className="feedback-content">
              <div className="center error__sub-content ">
                <h2>{pageTitle || "Application Error"}</h2>

                <p
                  className="center"
                  _dangerouslySetInnerHTML={{
                    __html:
                      message ||
                      "Please try again or contact our admins <br></br>on social for support.",
                  }}
                />
                <Button
                  variant={"primary"}
                  buttonText={redirectText || "Go back home"}
                  handleClick={() => {
                    window.location.href = "/";
                  }}
                />
                <div className="icons-container ">
                  {SOCIAL_LINKS.map((socialLink, index) => (
                    <a
                      key={index}
                      href={socialLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="icon"
                        width={"100%"}
                        height={"100%"}
                        objectFit="contain"
                        src={`/assets/images/${socialLink.name}.png`}
                        alt={socialLink.name}
                      />
                    </a>
                  ))}
                </div>
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
            src="/assets/images/white-cylindrical-outline.png"
            alt="purple-cylindrical-image"
          />
        </div>

        <div className="vector__cylindrical">
          <Image
            className=""
            width={"100%"}
            height={"100%"}
            objectFit="contain"
            src="/assets/images/cylindrical-outline.png"
            alt="cylindrical-image"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CustomError;
