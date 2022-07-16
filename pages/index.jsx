import Image from "next/image";
import React from "react";
import Button from "../components/buttons/Button";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

export default function Home() {
  const W3L_SUPPORTERS_1 = [
    {
      name: "Polygon",
      logo: "/assets/images/polygon.svg",
    },
    {
      name: "W3D",
      logo: "/assets/images/w3d.svg",
    },
    {
      name: "FTX",
      logo: "/assets/images/ftx.svg",
    },
    {
      name: "StackShift",
      logo: "/assets/images/stackshift.svg",
    },
    {
      name: "Crevatal",
      logo: "/assets/images/crevatal.svg",
    },
  ];

  const W3L_SUPPORTERS_2 = [
    {
      name: "Harmony",
      logo: "/assets/images/harmony.svg",
    },
    {
      name: "Filecoin",
      logo: "/assets/images/filecoin.svg",
    },
    {
      name: "ChainWhiz",
      logo: "/assets/images/chainwhiz.svg",
    },
  ];

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
      <section className="support">
        <div className="container">
          <h1 className="support--heading"> Our Supporters</h1>
          <div className="support--groups-container">
            <div className="first-group">
              {W3L_SUPPORTERS_1.map((supporter) => (
                <Image
                  className="support-image"
                  width={"165px"}
                  height={"60px"}
                  src={supporter.logo}
                  alt={supporter.name}
                  key={supporter.name}
                />
              ))}
            </div>

            <div className="second-group">
              {W3L_SUPPORTERS_2.map((supporter) => (
                <Image
                  className="support-image"
                  width={"165px"}
                  height={"60px"}
                  src={supporter.logo}
                  alt={supporter.name}
                  key={supporter.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="introduction">
        <div className="container">
          <h1 className="introduction--header"> Who we are</h1>
          <div className="introduction--container">
            <p className="introduction--container-text">
              This is a free intensive learning phase of the basics/foundations
              for all tracks, it serves as the introduction to the track for
              participants. This phase is for 4weeks, classes will be twice a
              week (Tuesdays &amp; Thursdays 5 - 7 PM). Across all tracks
              participants will learn intensively as a beginner, mentors will be
              on the ground to teach, resources will be shared with the
              participants, assignments will be given as well, and there will be
              an eviction at the end of this phase upon final assessment to
              graduate into the learning phase.
            </p>

            <div className="introduction--container-cta">
              <Button
                type={"primary"}
                buttonText={"Learn More"}
                handleClick={() => null}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="who-we-are">
        <div className="container wrapper">
          <div className="who-we-are--container">
            <div className="who-we-are--content">
              <h3>Join Our Community</h3>
              <p>
                Be part of our Non-Profit community of forward-thinking ladies
                shaping the future of the web3 ecosystem.
              </p>
              <div className="who-we-are--content-cta">
                <Button
                  type={"outline"}
                  width={"243px"}
                  buttonText={"Join our community"}
                  handleClick={() => null}
                />
              </div>
            </div>
            <div className="who-we-are--img">
              <Image
                src="/assets/images/communityimg.png"
                width={"532px"}
                height={"500px"}
                objectFit="contain"
                alt="community-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="analytics">
        <div className="container">
          <h1 className="analytics--header"> Our Numbers</h1>
          <ul className="analytics--container">
            <li>
              <h3>1050</h3>
              <span className="analytics--text"> Community members</span>
            </li>
            <li>
              <h3>3</h3>
              <span className="analytics--text"> Cohorts</span>
            </li>
            <li>
              <h3>54</h3>
              <span className="analytics--text"> Graduated mentees</span>
            </li>
            <li>
              <h3>52</h3>
              <span className="analytics--text"> Worktools given</span>
            </li>

            <li>
              <h3>24</h3>
              <span className="analytics--text"> Projects</span>
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
