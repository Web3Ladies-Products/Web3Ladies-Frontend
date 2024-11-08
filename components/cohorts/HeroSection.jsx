import Image from "next/image";
import React from "react";
import Badge from "../Badge";
import Button from "../buttons/Button";

const HeroSection = ({ heroDetails, badgeText }) => {
  return (
    <main style={{ backgroundColor: "#F8F2FF" }} className="bg">
      <div className="container cta">
        <div className="content">
          <div className="hero_content bootcamp">
            {badgeText && (
              <Badge
                badgeText={badgeText}
                badgeBackground={"#FFFFFF"}
                badgeBorderColor={"#000000"}
              />
            )}
            <h1
              className="section-title"
              dangerouslySetInnerHTML={{ __html: heroDetails.hero_title }}
            />
            <p>{heroDetails.hero_description}</p>

            <div className="button-container">
              <Button
                variant={heroDetails.hero_button_type}
                buttonText={heroDetails.hero_button_text}
                handleClick={() => {
                  window.location.href = heroDetails.hero_button_link;
                }}
              />
            </div>
          </div>

          <div className="hero_image">
            <div className="hero_display_image">
              <Image
                className="hero-image"
                width={"493px"}
                objectFit="contain"
                height={"472px"}
                src="/assets/images/cohort-display-image.png"
                alt="cohort-image"
              />
              <div className="vector">
                <Image
                  width="100%"
                  height="100%"
                  objectFit="contain"
                  src="/assets/images/cohort-display-vector.png"
                  alt="cohort-image"
                />
              </div>
              <div className="display-vector">
                <Image
                  width="150px"
                  height="150px"
                  objectFit="contain"
                  src="/assets/images/cohort-display-number.png"
                  alt="cohort-image"
                />
                {heroDetails.cohort_number && (
                  <p className="number">{heroDetails.cohort_number}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
