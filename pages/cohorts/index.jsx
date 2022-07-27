import React from "react";
import cohortsData from "../api/cohorts.json";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import Button from "../../components/buttons/Button";
import Accordion from "../../components/accordion/Accordion";
import VisitYoutube from "../../components/VisitYoutube";
import Summary from "../../components/cohorts/Summary";
import MenteeExperience from "../../components/MenteeExperience";

const Cohorts = () => {
  const cohortsDetails = [
    {
      label: <Label number="One" date="May - August 2020" />,
      content: <Content cohortLink={"/cohorts/past/cohort-1"} />,
    },
    {
      label: <Label number="Two" date="May - August 2020" />,
      content: <Content cohortLink={"/cohorts/past/cohort-2"} />,
    },
    {
      label: <Label number="Three" date="May - August 2020" />,
      content: <Content cohortLink={"/cohorts/past/cohort-3"} />,
    },
    {
      label: <Label number="Four" date="May - August 2020" />,
      content: <Content cohortLink={"/cohorts/past/cohort-4"} />,
    },
  ];
  return (
    <>
      <Navbar />
      {/* <div className="hero_image">
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
            </div> */}

      <section className="summary-section" id="cohorts">
        <div className="container">
          <Accordion
            panels={cohortsDetails}
            hasActiveBackground
            hasFullBorder
            fullWidth
          />
        </div>
      </section>

      <VisitYoutube />
      <Footer />
    </>
  );
};

const Label = ({ number, date }) => {
  return (
    <div className="d-flex justify-content-between">
      <div>
        Cohort{" "}
        <span className="bold" style={{ fontSize: "inherit" }}>
          {number}
        </span>
      </div>
      <span className="bold">{date}</span>
    </div>
  );
};

const Content = ({ cohortLink }) => {
  const cohortDetails = cohortsData.home;

  return (
    <div className="cohort-content container">
      <Summary />
      <MenteeExperience menteeDetails={cohortDetails.mentees} />
      <div className="button-container">
        <Button
          type={"outline"}
          buttonText={"Learn More"}
          handleClick={() => (window.location.href = cohortLink)}
        />
      </div>
    </div>
  );
};

export default Cohorts;
