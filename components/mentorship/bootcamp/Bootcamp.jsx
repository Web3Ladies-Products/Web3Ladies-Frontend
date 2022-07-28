import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";
import bootcampsData from "../../../pages/api/bootcamps.json";

const Bootcamp = () => {
  const bootcampsHome = bootcampsData.home;
  return (
    <div className="mentorship-bootcamp-section">
      <div className="container mentorship-bootcamp-header">
        <h1> Bootcamps</h1>
        <span>
          <Image
            className="hero-img"
            width="147px"
            height="147px"
            layout="intrinsic"
            objectFit="contain"
            src="/assets/images/mentorship-bootcamp-star.png"
            alt="arrow-vector"
          />
        </span>
      </div>
      <section className="bootcamps">
        <div className="container">
          <h2 className="sub-section-title bold">
            {bootcampsHome.currentBootcamps.title}
          </h2>
          <ul className="card card--has-border">
            {bootcampsHome.currentBootcamps.bootcamps.map((bootcamp) => (
              <li className="card-content--has-image" key={bootcamp.id}>
                <div className="card-text">
                  <h3
                    className="sub-section-title"
                    dangerouslySetInnerHTML={{ __html: bootcamp.name }}
                  />
                  <p className="section-description">{bootcamp.description}</p>
                  <Button
                    type={bootcamp.buttonType}
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

      <section className="bootcamps">
        <div className="container">
          <h2 className="sub-section-title bold">
            {bootcampsHome.pastBootcamps.title}
          </h2>
          <ul>
            {bootcampsHome.pastBootcamps.bootcamps.map((bootcamp) => (
              <li
                className="card card--has-border card-content--has-image"
                key={bootcamp.id}
              >
                <div className="card-text">
                  <h3
                    className="sub-section-title"
                    dangerouslySetInnerHTML={{ __html: bootcamp.name }}
                  />
                  <p className="section-description">{bootcamp.description}</p>
                  <Button
                    type={bootcamp.buttonType}
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
    </div>
  );
};

export default Bootcamp;
