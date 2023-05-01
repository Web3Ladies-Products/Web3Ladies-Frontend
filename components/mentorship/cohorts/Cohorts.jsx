import React from "react";

import Button from "../../buttons/Button";
import Accordion from "../../accordion/Accordion";
import Summary from "../../cohorts/Summary";
import CohortSummary from "../../cohorts/CohortSummary";

import MenteeExperience from "../../MenteeExperience";

const CohortSection = ({ cohortData, isAccordion }) => {
  const cohortsDetails = [
    {
      label: <Label number="One" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-1"}
          isAccordion={isAccordion}
          cohortData={cohortData}
        />
      ),
    },
    {
      label: <Label number="Two" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-2"}
          isAccordion={isAccordion}
          cohortData={cohortData}
        />
      ),
    },
    {
      label: <Label number="Three" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-3"}
          isAccordion={isAccordion}
          cohortData={cohortData}
        />
      ),
    },
    {
      label: <Label number="Four" date="May - August 2020" />,
      content: (
        <Content
          cohortLink={"/cohorts/past/cohort-4"}
          isAccordion={isAccordion}
          cohortData={cohortData}
        />
      ),
    },
  ];
  return (
    <>
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

const Content = ({ cohortLink, isAccordion, cohortData }) => {
  return (
    <div className="cohort-content container">
      <CohortSummary />
      {/* <MenteeExperience mentee_details={cohortDetails.mentees} /> */}
      <div className="button-container" style={{ marginBottom: "10px" }}>
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
