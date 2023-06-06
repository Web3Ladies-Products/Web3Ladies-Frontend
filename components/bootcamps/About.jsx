import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const About = ({ data }) => {
  return (
    <section className="about-bootcamp">
      <div className="container bootCamp_container">
        <div className="about-image">
          <Image
            src={data.about_image}
            className="bootcamp-image"
            width={"518px"}
            height={"518px"}
            alt="bootcamp-image"
            objectFit="contain"
          />
        </div>
        <div className="about-content">
          <h2 className="sub-section-title bold">{data.about_title}</h2>
          <p className="section-description">{data.about_description}</p>
          <Button
            variant={data.about_button_type}
            buttonText={data.about_button_text}
            handleClick={() => {
              window.location.href = data.about_button_link;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
