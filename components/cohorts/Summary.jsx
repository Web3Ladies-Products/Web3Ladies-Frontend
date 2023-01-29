import React from "react";

const Summary = () => {
  return (
    <section className="cohort-summary">
      <div className="">
        <div className="summary-title">
          <h1>Summary</h1>
        </div>
        <div className="summary-content">
          <div className="summary-content-text">
            <p>
              This is an intensive learning phase of the basics/foundations for
              all tracks, it serves as the introduction to the track for
              participants. This phase is for 4weeks, classes will be twice a
              week (Tuesdays &amp; Thursdays 5 - 7 PM). Across all tracks
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
