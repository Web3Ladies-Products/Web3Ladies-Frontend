import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const HeroSection = ({ bootcamp }) => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content bootcamp">
            <h1 dangerouslySetInnerHTML={{ __html: bootcamp.hero_title }} />
            <p>{bootcamp.hero_description}</p>

            <div className="button-container">
              <Button
                variant={bootcamp.hero_button_type}
                buttonText={bootcamp.hero_button_text}
                handleClick={() => {
                  window.location.href = bootcamp.hero_button_link;
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
                src={bootcamp.hero_image}
                alt="bootcamp-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
