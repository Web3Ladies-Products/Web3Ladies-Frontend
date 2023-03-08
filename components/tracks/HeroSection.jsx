import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";

const Hero = ({ track, handleViewCurriculum }) => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content">
            <h1>{track?.hero_title}</h1>
            <p>{track?.hero_description}</p>
            <p className="note">{track?.hero_note}</p>

            <div className="button-container">
              <Button
                variant={track?.hero_button_type_one}
                buttonText={track?.hero_button_text_one}
                handleClick={() => {
                  handleViewCurriculum();
                }}
              />
              <Button
                variant={track?.hero_button_type_two}
                buttonText={track?.hero_button_text_two}
                handleClick={() => {
                  window.location.href = track?.hero_button_link_two;
                }}
              />
            </div>
          </div>

          <div className="hero_image">
            <div className="hero__image-banner">
              <div className="hero__trackvector1">
                <Image
                  src="/assets/images/trackvector1.png"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
              <div className="hero__trackvector2">
                <Image
                  src="/assets/images/trackvector2.png"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>

              <Image
                src={track?.hero_image}
                width="200px"
                height="200px"
                objectFit="contain"
              />

              <div className="hero__trackvector3">
                <Image
                  src="/assets/images/trackvector3.png"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>
              <div className="hero__trackvector4">
                <Image
                  src="/assets/images/trackvector4.png"
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>

              <div className="hero__banner-subscript">
                <div>
                  <p className="hero__banner-subscript_text1">Length:</p>
                  <p className="hero__banner-subscript_text2">3 month</p>
                </div>
                <div>
                  <p className="hero__banner-subscript_text1">Language:</p>
                  <p className="hero__banner-subscript_text2">English</p>
                </div>
                <div>
                  <p className="hero__banner-subscript_text1">Commitment:</p>
                  <p className="hero__banner-subscript_text2">
                    7-10 hours per week
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
