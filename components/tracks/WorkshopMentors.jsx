import React from "react";
import Image from "next/image";
import MentorCard from "./MentorCard";

const OngroundMentors = () => {
  return (
    <section className="mentors-section">
      <div className="container">
        <h2 className="heading">Workshop Mentors</h2>
        <p className="description">
          These mentors will be on the ground for all the mentorship activities,
          they are responsible for classes, responding to mentees’ concerns on
          slack, and grading mentees, they will also be compensated monthly.
        </p>
        <div className="mentors-container">
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
    </section>
  );
};

export default OngroundMentors;
