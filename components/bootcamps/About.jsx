import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const About = ({ bootcamp }) => {
  return (
    <section className="about-bootcamp">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="about-image">
          <Image
            src={bootcamp.about_image}
            className="bootcamp-image"
            width={"518px"}
            height={"518px"}
            alt="bootcamp-image"
            objectFit="contain"
          />
        </div>
        <div className="about-content">
          <h2 className="sub-section-title bold">{bootcamp.about_title}</h2>
          <p className="section-description">{bootcamp.about_description}</p>
          <Button
            variant={bootcamp.about_button_type}
            buttonText={bootcamp.about_button_text}
            handleClick={() => {
              window.location.href = bootcamp.about_button_link;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
