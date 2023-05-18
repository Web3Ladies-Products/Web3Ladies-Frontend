import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const HeroSection = ({ heroDetails }) => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content bootcamp">
            <h1 dangerouslySetInnerHTML={{ __html: heroDetails.title }} />
            <p>{heroDetails.description}</p>

            <div className="button-container">
              <Button
                variant={heroDetails.buttonType}
                buttonText={heroDetails.buttonText}
                handleClick={() => {
                  window.location.href = heroDetails.buttonLink;
                }}
              />
            </div>
          </div>

          <div className="hero_image">
            <div>
              <Image
                className="hero-image"
                width={"617px"}
                height={"445px"}
                src={heroDetails.image}
                alt="sponsorship-image"
              />
              <Image
                className="hero-illustration"
                width={"170px"}
                height={"68px"}
                objectFit="contain"
                src="/assets/images/web3ladies-vector.png"
                alt="web3ladies-vector"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
