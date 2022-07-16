import React from "react";
import Accordion from "../accordion/Accordion";

const Curriculum = ({ data }) => {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <h2>Curriculum Highlights</h2>
        <Accordion panels={data.curriculumItems} />
      </div>
    </section>
  );
};

export default Curriculum;
