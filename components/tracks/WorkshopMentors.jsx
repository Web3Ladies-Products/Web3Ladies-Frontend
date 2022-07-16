import React from "react";
import Image from "next/image";
import MentorCard from "./MentorCard";

const OngroundMentors = ({ data }) => {
  return (
    <section className="mentors-section">
      <div className="container">
        <h2 className="heading">{DataTransfer.title}</h2>
        <p className="description">{data.description}</p>
        <div className="mentors-container">
          {data.mentorsList.map((mentor, index) => {
            return <MentorCard key={index} mentor={mentor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default OngroundMentors;
