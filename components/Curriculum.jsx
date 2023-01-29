import React from "react";
import Accordion from "./accordion/Accordion";

const Curriculum = ({ bootcamp }) => {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <h2 className="section-title">{bootcamp?.curriculum_title}</h2>
        <Accordion panels={bootcamp?.curriculum_items_details} />
      </div>
    </section>
  );
};

export default Curriculum;
