import React from "react";
import Accordion from "./accordion/Accordion";

const FAQs = ({ data }) => {
  const faqData = [
    {
      id: 1,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      id: 2,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      id: 3,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      id: 4,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      id: 5,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      id: 6,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
    {
      id: 7,
      label: "is Mentorship free",
      content:
        "These mentors will be on the ground for all the mentorship activities, they are responsible for classes, responding to mentees’ concerns on slack, and grading mentees, they will also be compensated monthly.",
    },
  ];
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title center mb-20">
          Frequently Asked Questions{" "}
        </h2>
        <Accordion panels={data ? data : faqData} hasFullBorder />
      </div>
    </section>
  );
};

export default FAQs;
