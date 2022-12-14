import React from "react";
import cohortsData from "../../../pages/api/cohorts.json";
import Button from "../../buttons/Button";
import Accordion from "../../accordion/Accordion";
import Summary from "../../cohorts/Summary";
import MenteeExperience from "../../MenteeExperience";

const CohortSection = ({ isAccordion }) => {
  const cohortsDetails = [
    {
      label: <Label number="One" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-1"}
          isAccordion={isAccordion}
        />
      ),
    },
    {
      label: <Label number="Two" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-2"}
          isAccordion={isAccordion}
        />
      ),
    },
    {
      label: <Label number="Three" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-3"}
          isAccordion={isAccordion}
        />
      ),
    },
    {
      label: <Label number="Four" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-4"}
          isAccordion={isAccordion}
        />
      ),
    },
  ];
  return (
    <>
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
        <Accordion
          panels={cohortsDetails}
          hasActiveBackground
          hasFullBorder
          fullWidth
        />
      </section>
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

const Content = ({ cohortLink, isAccordion }) => {
  const cohortDetails = cohortsData.home;

  return (
    <div className="cohort-content container">
      <Summary isAccordion={isAccordion} />
      <MenteeExperience menteeDetails={cohortDetails.mentees} />
      <div className="button-container ">
        <Button
          variant={"outline"}
          buttonText={"Learn More"}
          handleClick={() => (window.location.href = cohortLink)}
        />
      </div>
    </div>
  );
};

export default CohortSection;
