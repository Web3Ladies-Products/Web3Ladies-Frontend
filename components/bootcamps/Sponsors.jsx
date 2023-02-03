import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const Sponsors = ({ data }) => {
  return (
    <section className="sponsors">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="sponsors-content">
          <h2 className="sub-section-title bold">
            {data.sponsors_title}
          </h2>
          <p className="section-description">
            {data.sponsors_description}
          </p>
          <Button
            variant={data.sponsors_button_type}
            buttonText={data.sponsors_button_text}
            handleClick={() => {
              window.location.href = data.sponsors_button_link;
            }}
          />
        </div>
        <div className="sponsors-image pt-20">
          <Image
            src={data.sponsors_image}
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
