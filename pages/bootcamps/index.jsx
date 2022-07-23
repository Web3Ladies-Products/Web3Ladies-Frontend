import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import bootcampsData from "../api/bootcamps.json";

const Bootcamps = () => {
  const bootcampsHome = bootcampsData.home;

  return (
    <>
      <Navbar />
      <main>
        <div className="container cta">
          <div className="content">
            <div className="hero_content bootcamp">
              <h1
                dangerouslySetInnerHTML={{ __html: bootcampsHome.hero.title }}
              />
              <p>{bootcampsHome.hero.description}</p>

              <div className="button-container">
                <Button
                  type={bootcampsHome.hero.buttonType}
                  buttonText={bootcampsHome.hero.buttonText}
                  handleClick={() => {
                    window.location.href = bootcampsHome.hero.buttonLink;
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
                  src={bootcampsHome.hero.image}
                  alt="bootcamp-image"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
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
      <Footer />
    </>
  );
};

export default Bootcamps;
