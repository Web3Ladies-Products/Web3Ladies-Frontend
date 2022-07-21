import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Button from "../components/buttons/Button";

const cohorts = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1>Our Cohorts</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                molestie volutpat pharetra cursus et vel dictum. Amet integer
                facilisis egestas porta suspendisse.
              </p>

              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={"See Cohorts"}
                  handleClick={() => null}
                />
              </div>
            </div>
            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"493px"}
                  height={"472px"}
                  objectFit="contain"
                  src="/assets/images/female-polygon.png"
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"150px"}
                  height={"125px"}
                  src="/assets/images/web3ladies-cohorts.png"
                  alt="web3ladies-vector"
                />
                <Image
                  className="hero-illustration"
                  width={"100px"}
                  height={"155px"}
                  src="/assets/images/curved-web3ladies-vector.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="visit container">
        <div className="container">
          <div className="hero_content">
            <h1>
              Visit our Youtube page <br></br> to see our videos
            </h1>
            <Button
              type={"primary"}
              buttonText={"Visit"}
              handleClick={() => null}
            />
            <div className="youtube">
              <Image
                className="youtube-img"
                width={"293px"}
                height={"272px"}
                objectFit="contain"
                src="/assets/images/youtube.png"
                alt="hero-image"
              />

              {/* <iframe width="253" height="280" src="https://www.youtube.com/embed/24D8MqQTP_w" title="Project #LadiesDoTech" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>
          </div>
        </div>
      </section>

      <div className="div"></div>
    </>
  );
  9;
};

export default cohorts;
