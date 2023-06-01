import React from "react";
import Image from "next/image";

const CohortSummary = ({ cohortSummaryData, menteesDetails }) => {
  return (
    <div className="cohort-summary">
      <div className="">
        <div className="summary-title">
          <h1>{cohortSummaryData.title}</h1>
        </div>
        <div className="summary-content">
          <div className="summary-content-text">
            <p>{cohortSummaryData.description}</p>
          </div>
          <div className="metrics">
            <h1 className="metrics-heading">Metrics</h1>
            <ul className="metrics-container">
              {cohortSummaryData.metrics.map((metric, index) => (
                <li key={index}>
                  <h3>{metric.count}</h3>
                  <span className="metrics-text">{metric.section}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {menteesDetails && (
          <ul className="mentee-experience--list">
            {menteesDetails.map((mentee, index) => {
              return (
                <li className="mentee-experience--list-item" key={index}>
                  <div className="summary-mentee-image">
                    <Image
                      className="summary-mentee-image"
                      width={"272px"}
                      height={"408px"}
                      objectFit="contain"
                      src={mentee.url}
                      alt="mentee-image"
                    />
                  </div>
                  <div className="mentee-content">
                    <h2 className="sub-section-title bold">{mentee.name}</h2>
                    <p className="section-description">{mentee.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CohortSummary;
