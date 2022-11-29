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
                variant={data.buttonTypeOne}
                buttonText={data.buttonTextOne}
                handleClick={() => {
                  handleViewCurriculum();
                }}
              />
              <Button
                variant={data.buttonTypeTwo}
                buttonText={data.buttonTextTwo}
                handleClick={() => {
                  window.location.href = data.buttonLinkTwo;
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
                src={data.image}
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
