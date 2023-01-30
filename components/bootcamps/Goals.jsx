import React from "react";

const GoalsDetails = ({ bootcamp }) => {
  return (
    <section className="goal">
      <div className="container">
        <div className="card card--has-border">
          <h2 className="sub-section-title bold">{bootcamp.goals_title}</h2>
          <p className="section-description"> {bootcamp.goals_description}</p>
        </div>
      </div>
    </section>
  );
};

export default GoalsDetails;
