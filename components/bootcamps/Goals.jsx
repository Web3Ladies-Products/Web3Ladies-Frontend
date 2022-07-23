import React from "react";

const GoalsDetails = ({ goalsDetails }) => {
  return (
    <section className="goal">
      <div className="container">
        <div className="card card--has-border">
          <h2 className="sub-section-title bold">{goalsDetails.goalTitle}</h2>
          <p className="section-description"> {goalsDetails.goalDescription}</p>
        </div>
      </div>
    </section>
  );
};

export default GoalsDetails;
