import React from "react";
import Image from "next/image";
import mentorshipPageData from "./api/home.json";
import Button from "../components/buttons/Button";
import Navbar from "/components/layouts/Navbar";
import Footer from "/components/layouts/Footer";
import {
  Bootcamp,
  Cohorts,
  HowItWorks,
  Training,
} from "../components/mentorship";
import Bootcamps from "./bootcamps";

const mentorship = () => {
  const mentorshipPage = mentorshipPageData;

  return (
    <>
      <Navbar />

      <main>
        {/*START OF HERO SECTION*/}
        <div className="mentorship-section">
          <div className="mentorship-hero">
            <div className="hero-texts">
              <h1 className="title">
                Get mentored by the best in the{" "}
                <span className="colored-text">web3 ecosystem</span>
              </h1>
              <div className="btn-container">
                <Button
                  type={"primary"}
                  buttonText={"Register Now"}
                  handleClick={() => null}
                />
                <Button
                  type={"outline"}
                  buttonText={"Sponsor Us"}
                  handleClick={() => null}
                />
              </div>
            </div>

            <div className="hero-images">
              <div>
                <Image
                  className="hero-img"
                  width={"492px"}
                  height={"492px"}
                  src="/assets/images/mentorship-hero-img.png"
                  alt="mentorship-img"
                />
                <Image
                  className="hero-img"
                  width={"178px"}
                  height={"58px"}
                  src="/assets/images/eth-img.png"
                  alt="ethereum-logo"
                />
                <Image
                  className="hero-img"
                  width={"166px"}
                  height={"73px"}
                  src="/assets/images/filecoin-img.png"
                  alt="filecoin-logo"
                />
                <Image
                  className="hero-img"
                  width={"187px"}
                  height={"49px"}
                  src="/assets/images/polygon-img.png"
                  alt="polygon-logo"
                />
                <Image
                  className="hero-img"
                  width="100"
                  height="150"
                  layout="fixed"
                  src="/assets/images/web3vector-img.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
        {/*END OF HERO SECTION*/}

        {/*START OF SUPPORT SECTION*/}
        <div className="support-section">
          <div className="container">
            <h1 className="support--heading"> Our Supporters</h1>
            <div className="support--groups-container">
              <div className="first-group">
                {mentorshipPage.W3L_SUPPORTERS_1.map((supporter) => (
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
                {mentorshipPage.W3L_SUPPORTERS_2.map((supporter) => (
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
        </div>
        {/*END OF SUPPORT SECTION*/}

        {/*START OF About Mentorship */}
        <div className="about-section">
          <div className="container">
            <div className="about--heading">
              <h1>About Mentorship </h1>
              <Image
                className="hero-img"
                width="100"
                height="150"
                src="/assets/images/web3vector-img.png"
                alt="web3ladies-vector"
              />
            </div>
            <div className="about--content">
              <p className="about-text">
                This is a free intensive learning phase of the
                basics/foundations for all tracks, it serves as the introduction
                to the track for participants. This phase is for 4weeks, classes
                will be twice a week (Tuesdays & Thursdays 5 - 7 PM). Across all
                tracks participants will learn intensively as a beginner,
                mentors will be on the ground to teach, resources will be shared
                with the participants, assignments will be given as well, and
                there will be an eviction at the end of this phase upon final
                assessment to graduate into the learning phase.
              </p>
              <div>
                <Button
                  type={"primary"}
                  buttonText={"Register Now"}
                  handleClick={() => null}
                />
                <Image
                  className="hero-img"
                  width={"67px"}
                  height={"63px"}
                  objectFit="contain"
                  src="/assets/images/arrow-img.png"
                  alt="arrow-vector"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <MentorshipCriteria /> */}

        {/*START OF About Mentorship */}
        {/* /assets/images/web3vector-img.png */}
        <div className="criteria-section-wrapper">
          <div className="container">
            <div className="criteria-section">
              <div className="criteria-img-wrap">
                <Image
                  className=""
                  width={"490px"}
                  height={"520px"}
                  objectFit="contain"
                  src="/assets/images/mentorship-criteria-img.png"
                  alt="Criteria image"
                />
              </div>
              <div className="criteria-content">
                <h1> Who is it for? </h1>
                <div>
                  <div>
                    <span>
                      <Image
                        className=""
                        width="17px"
                        height="14px"
                        layout="fixed"
                        src="/assets/images/tick.png"
                        alt=""
                      />
                    </span>
                    <p>
                      A professional looking for deeper knowledge about the
                      impact and applications of blockchain technologies in a
                      business environment
                    </p>
                  </div>
                  <div>
                    <span>
                      <Image
                        className=""
                        width="17px"
                        height="14px"
                        layout="fixed"
                        src="/assets/images/tick.png"
                        alt=""
                      />
                    </span>
                    <p>
                      A professional looking for deeper knowledge about the
                      impact and applications of blockchain technologies in a
                      business environment
                    </p>
                  </div>
                  <div>
                    <span>
                      <Image
                        className=""
                        width="17px"
                        height="14px"
                        layout="fixed"
                        src="/assets/images/tick.png"
                        alt=""
                      />
                    </span>
                    <p>
                      A professional looking for deeper knowledge about the
                      impact and applications of blockchain technologies in a
                      business environment
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    type="outline"
                    buttonText={"Register Now"}
                    handleClick={() => null}
                    color="#7D0BFE"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <HowItWorks />
        <Training />
        <Cohorts />
        {/* <Bootcamps /> */}
        <Bootcamp />
      </main>

      <Footer />
    </>
  );
};

export default mentorship;
