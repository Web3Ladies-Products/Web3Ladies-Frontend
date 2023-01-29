import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";
// import bootcampsData from "../../pages/api/bootcamps.json";

const Bootcamps = ({bootcamp}) => {
  // const bootcamp = bootcampsData.home;
  return (
    <section className="bootcamps">
      <div className="container">
        <h2 className="sub-section-title bold">
          {bootcamp.past_bootcamps_title}
        </h2>
        <ul>
          {bootcamp.past_bootcamps_details.map((bootcamp, index) => (
            <li
              className="card card--has-border card-content--has-image"
              key={index}
            >
              <div className="card-text">
                <h3
                  className="sub-section-title"
                  dangerouslySetInnerHTML={{ __html: bootcamp.name }}
                />
                <p className="section-description">{bootcamp.description}</p>
                <Button
                  variant={bootcamp.buttonType}
                  buttonText={bootcamp.buttonText}
                  handleClick={() => {
                    window.location.href = bootcamp.buttonLink;
                  }}
                />
              </div>
              <div className="card-img">
                <Image
                  src={bootcamp.image}
                  width={"439px"}
                  height={"283px"}
                  objectFit="contain"
                  alt="bootcamp-img"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Bootcamps;
