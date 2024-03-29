import React from "react";
import Button from "./buttons/Button";
import Image from "next/image";

export default function AboutSection({
  title,
  description,
  buttonText,
  handleClick,
  showArc,
}) {
  return (
    <section className="introduction" id="who-we-are">
      <div className="container" style={{ paddingTop: "0" }}>
        <div className="introduction--heading">
          <h1
            className="section-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {showArc && (
            <div className="about__image-section">
              <Image
                className="hero-img "
                width="100"
                objectFit="contain"
                height="150"
                src="/assets/images/web3ladies-about-bounce.png"
                alt="web3ladies-vector"
              />
            </div>
          )}
        </div>

        <div className="introduction--container">
          <p
            className="introduction--container-text"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />

          {buttonText && (
            <div className="introduction--container-cta">
              <Button
                variant={"primary"}
                buttonText={buttonText}
                handleClick={handleClick}
              />

              <Image
                className="arrow-img"
                width="67px"
                height="63px"
                objectFit="contain"
                src="/assets/images/arrow-img.png"
                alt="arrow-vector"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
