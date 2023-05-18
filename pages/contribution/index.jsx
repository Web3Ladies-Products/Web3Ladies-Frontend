import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Image from "next/image";
import Footer from "../../components/layouts/Footer";
import Button from "../../components/buttons/Button";
import FreehandCard from "../../components/FreehandCard";

const Contribution = () => {
  const router = useRouter();
  return (
    <>
      <Navbar />
      {/* HERO SECTION */}

      <section>
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1 className="section-title">
                Want to be a Web3Ladies Contributor?
              </h1>
              <p className="section-text">
                Be a part of a community of confident and audacious Web3 Ladies.
                We are always open to new members.
              </p>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText="See open roles"
                  handleClick={() => router.push("/mentorship/register")}
                />
              </div>
            </div>

            <div className="top-space hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"617px"}
                  height={"481px"}
                  objectFit="contain"
                  src="/assets/images/contribution-hero-image.png"
                  alt="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="tracks__spacing">
        <FreehandCard />
      </div>

      <Footer />
    </>
  );
};

export default Contribution;
