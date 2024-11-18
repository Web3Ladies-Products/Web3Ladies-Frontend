import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const HeroSection = ({ data }) => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content data">
            <h1
              className="section-title"
              dangerouslySetInnerHTML={{ __html: data?.hero_title }}
            />
            <p>{data.hero_description}</p>

            <div className="button-container">
              <Button
                variant={data.hero_button_type}
                buttonText={data.hero_button_text}
                handleClick={() => {
                  window.location.href = data.hero_button_link;
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
                objectFit="contain"
                src={data.hero_image}
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
