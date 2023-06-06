import React from "react";

const Summary = ({ cohortSummary }) => {
  return (
    <section className="cohort-summary">
      <div className="">
        <div className="summary-title">
          <h1>{cohortSummary.title}</h1>
        </div>
        <div className="summary-content">
          <div className="summary-content-text">
            <p>{cohortSummary.description}</p>
          </div>
          <div className="metrics">
            <h1 className="metrics-heading">Metrics</h1>
            <ul className="metrics-container">
              {cohortSummary.metrics.map((metric, index) => (
                <li key={index}>
                  <h3>{metric.count}</h3>
                  <span className="metrics-text">{metric.section}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
