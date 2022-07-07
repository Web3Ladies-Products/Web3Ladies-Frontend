import Image from "next/image";
import React from "react";
import Button from "../components/buttons/Button";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="header-bg">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1>Equipping Ladies with relevant Blockchain skills</h1>
              <p>
                The goal for us is to empower more self-confident and audacious
                ladies with the required skillset to compete favorably in the
                blockchain ecosystem, thereby bridging the gender diversity gap
                in the industry, by attacking what we think is the root problem
                in this time and age.
              </p>

              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={"Learn More"}
                  handleClick={() => null}
                />
                <Button
                  type={"outline"}
                  buttonText={"Sponsor Us"}
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
                  src="/assets/images/hero-image.png"
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"113px"}
                  height={"121px"}
                  src="/assets/images/bitcoin.png"
                  alt="bitcoin-logo"
                />
                <Image
                  className="hero-illustration"
                  width={"66px"}
                  height={"95px"}
                  src="/assets/images/ethereum.png"
                  alt="ethereum-logo"
                />
                <Image
                  className="hero-illustration"
                  width={"195px"}
                  height={"75px"}
                  src="/assets/images/web3ladies-vector.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
