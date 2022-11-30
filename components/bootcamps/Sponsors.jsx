import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const Sponsors = ({ sponsorsDetails }) => {
  return (
    <section className="sponsors">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="sponsors-content">
          <h2 className="sub-section-title bold">
            {sponsorsDetails.sponsorsTitle}
          </h2>
          <p className="section-description">
            {sponsorsDetails.sponsorsDescription}
          </p>
          <Button
            variant={sponsorsDetails.sponsorsButtonType}
            buttonText={sponsorsDetails.sponsorsButtonText}
            handleClick={() => {
              window.location.href = sponsorsDetails.sponsorsButtonLink;
            }}
          />
        </div>
        <div className="sponsors-image pt-20">
          <Image
            src={sponsorsDetails.sponsorsImage}
            className="bootcamp-image"
            width={"501px"}
            height={"501px"}
            alt="bootcamp-image"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
