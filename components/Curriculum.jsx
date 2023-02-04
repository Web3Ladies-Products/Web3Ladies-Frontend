import React from "react";
import Accordion from "./accordion/Accordion";

<<<<<<< HEAD
const Curriculum = ({ track }) => {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <h2 className="section-title">{track?.curriculum_title}</h2>
        <Accordion panels={track?.curriculum_items} />
=======
const Curriculum = ({ data }) => {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <h2 className="section-title">{data?.curriculum_title}</h2>
        <Accordion panels={data?.curriculum_items_details} />
>>>>>>> d36f0d772c8666aeb8d13da0c14a5feed49e062b
      </div>
    </section>
  );
};

export default Curriculum;
