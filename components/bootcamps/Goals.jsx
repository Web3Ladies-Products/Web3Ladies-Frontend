import React from "react";

const GoalsDetails = ({ data }) => {
  return (
    <section className="goal">
      <div className="container">
        <div className="card card--has-border">
          <h2 className="sub-section-title bold">{data.goals_title}</h2>
          <p className="section-description"> {data.goals_description}</p>
        </div>
      </div>
    </section>
  );
};

export default GoalsDetails;
