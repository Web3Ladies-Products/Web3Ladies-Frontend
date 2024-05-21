import React from "react";
import Accordion from "./accordion/Accordion";

const Curriculum = ({ track }) => {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <div className="curriculum-section-heading">
          <h2 className="section-title">{track?.curriculum_title}</h2>
        </div>
        <Accordion panels={track?.curriculum_items} />
      </div>
    </section>
  );
};

export default Curriculum;
