import React from "react";

import Button from "../../buttons/Button";
import Accordion from "../../accordion/Accordion";

import CohortSummary from "../../cohorts/CohortSummary";

const CohortSection = ({ cohortData, isAccordion }) => {
  const cohortsDetails = cohortData.map((cohort) => {
    return {
      label: <Label number={cohort.cohort_number} date={cohort.cohort_date} />,
      content: (
        <Content
          cohortLink={cohort.cohort_link}
          cohortBtnText={cohort.cohort_btn_text}
          isAccordion={isAccordion}
          cohortSummaryData={cohort.cohort_summary_data}
          menteesDetails={cohort?.menteesDetails}
        />
      ),
    };
  });

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

const Content = ({
  cohortLink,
  cohortBtnText,

  cohortSummaryData,
  menteesDetails,
}) => {
  return (
    <div className="cohort-content container ">
      <CohortSummary
        cohortSummaryData={cohortSummaryData}
        menteesDetails={menteesDetails}
      />

      <div className="cohorts__accordion_button">
        <Button
          variant={"outline"}
          buttonText={cohortBtnText}
          handleClick={() => (window.location.href = cohortLink)}
        />
      </div>
    </div>
  );
};

export default CohortSection;
