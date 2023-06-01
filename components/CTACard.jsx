import React from "react";
import Button from "./buttons/Button";
import Image from "next/image";

const CTACard = () => {
  return (
    <section className="cta-card-section">
      <div className="container">
        <div>
          <h1>
            Get free{" "}
            <span style={{ font: "inherit" }} className="primary-color">
              {" "}
              hands-on-training
            </span>{" "}
            from the best minds
          </h1>
          <p> Join our Mentorship Cohort</p>
          <div>
         
            <Button buttonText="Join now" type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
