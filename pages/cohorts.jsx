import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Button from "../components/buttons/Button";
import Accordion from "../components/accordion/Accordion";

const cohorts = () => {
  const curriculumItems = [
    {
      label: "Cohort <span class='bold'>One</span>",
      date: "May - August 2020",
      content: "content",
    },
    {
      label: "Cohort <span class='bold'>Two</span>",
      date: "May - August 2020",
      content: "content",
    },
    {
      label: "Cohort <span class='bold'>Three</span>",
      date: "May - August 2020",
      content: "content",
    },
  ];
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

      <section className="summary-section" id="curriculum">
        <div className="container">
          <Accordion
            panels={curriculumItems}
            hasActiveBackground
            hasFullBorder
          />
        </div>
      </section>

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
            </div>
          </div>
        </div>
      </section>

      <div className="div"></div>
    </>
  );
};

const Label = ({ number }) => {
  return (
    <>
      Cohort<div className="bold">{number}</div>
    </>
  );
};

const Content = ({}) => {
  return (
    <>
      {/* SUMMARY SECTION */}
      <div className=" summary">
        <div className="summary-title">
          <h1>Summary</h1>
        </div>
        <div className="summary-content">
          <div className="summary-text">
            <p>
              This is an intensive learning phase of the basics/foundations for
              all tracks, it serves as the introduction to the track for
              participants. This phase is for 4weeks, classes will be twice a
              week (Tuesdays & Thursdays 5 - 7 PM). Across all tracks
              participants will learn intensively as a beginner, mentors will be
              on the ground to teach, resources will be shared with the
              participants, assignments will be given as well, and there will be
              an eviction at the end of this phase upon final assessment to
              graduate into the learning phase.
            </p>
          </div>
          <div className="metrics">
            <h1 className="metrics-heading">Metrics</h1>
            <ul className="metrics-container">
              <li>
                <h3>54</h3>
                <span className="metrics-text"> Mentees</span>
              </li>
              <li>
                <h3>3</h3>
                <span className="metrics-text"> Alumni</span>
              </li>
              <li>
                <h3>24</h3>
                <span className="metrics-text"> Mentors</span>
              </li>
            </ul>
            {/* <div className="numbers">
                <div>
                  <h2>54</h2>
                  <p>Mentees</p>
                </div>
                <div>
                  <h2>85</h2>
                  <p>Alumni</p>
                </div>
                <div>
                  <h2>24</h2>
                  <p>Mentors</p>
                </div>
              </div> */}
          </div>
        </div>
      </div>

      {/* MENTEES SECTION */}
      <section className="mentees-wrapper">
        <div className="">
          <h1>Mentee Experience</h1>
          <div className="mentees">
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default cohorts;
