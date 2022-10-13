import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const About = ({ aboutDetails }) => {
  return (
    <section className="about-bootcamp">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="about-image">
          <Image
            src={aboutDetails.aboutImg}
            className="bootcamp-image"
            width={"518px"}
            height={"518px"}
            alt="bootcamp-image"
            objectFit="contain"
          />
        </div>
        <div className="about-content">
          <h2 className="sub-section-title bold">{aboutDetails.aboutTitle}</h2>
          <p className="section-description">{aboutDetails.aboutDescription}</p>
          <Button
            variant={aboutDetails.aboutButtonType}
            buttonText={aboutDetails.aboutButtonText}
            handleClick={() => {
              window.location.href = aboutDetails.aboutButtonLink;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
