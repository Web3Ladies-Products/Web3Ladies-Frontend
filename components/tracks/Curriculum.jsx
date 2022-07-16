import React from "react";
import Accordion from "../accordion/Accordion";
import CurriculumItem from "./CurriculumItem";

const Curriculum = () => {
  const CURRICULUM_ITEMS = [
    {
      label: "Module O: Prep phase",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      label: "Module 1: Intro to Blockchain",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      label: "Module 2: Blockchain and the World",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      label: "Module 3: Blockchain and the World",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      label: "Module 4: Blockchain and the World",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
  ];

  return (
    <section className="curriculum-section">
      <div className="container">
        <h2>Curriculum Highlights</h2>
        <Accordion panels={CURRICULUM_ITEMS} />
      </div>
    </section>
  );
};

export default Curriculum;
