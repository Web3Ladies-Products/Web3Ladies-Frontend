import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";

const Hero = ({ data, handleViewCurriculum }) => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content">
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <p className="note">{data.note}</p>

            <div className="button-container">
              <Button
                type={data.buttonTypeOne}
                buttonText={data.buttonTextOne}
                handleClick={() => {
                  handleViewCurriculum();
                }}
              />
              <Button
                type={data.buttonTypeTwo}
                buttonText={data.buttonTextTwo}
                handleClick={() => {
                  window.location.href = data.buttonLinkTwo;
                }}
              />
            </div>
          </div>

          <div className="hero_image">
            <div>
              <Image
                className="hero-image"
                width={"493px"}
                height={"472px"}
                src={data.image}
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
