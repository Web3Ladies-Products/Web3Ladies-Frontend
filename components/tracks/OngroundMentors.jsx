import React from "react";
import Image from "next/image";
import MentorCard from "./tracks/MentorCard";

const OngroundMentors = () => {
  return (
    <div className="mentors-section">
      <h2>On-Ground Mentors</h2>
      <p>
        These mentors will be on the ground for all the mentorship activities,
        they are responsible for classes, responding to mentees’ concerns on
        slack, and grading mentees, they will also be compensated monthly.
      </p>
      <div className="mentors">
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
        <MentorCard />
      </div>
    </div>
  );
};

export default OngroundMentors;
