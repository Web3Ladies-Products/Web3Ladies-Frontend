import React from "react";
import Button from "../../buttons/Button";

const CTACard = () => {
  return (
    <div className="cta-card-section">
      <div className="container">
        <div>
          <h1>
            Get free <span> hands-on-training</span> from the best minds
          </h1>
          <p> Join our Mentorship Cohort</p>
          <div>
            <Button buttonText="Join now" type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACard;
