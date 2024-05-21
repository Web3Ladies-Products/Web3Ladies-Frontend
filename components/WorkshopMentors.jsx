import React from "react";
import MentorCard from "./tracks/MentorCard";

const WorkshopMentors = ({ track }) => {
  return (
    <section className="mentors-section">
      <div className="container">
        <h2 className="heading">{track?.workshop_mentors_title}</h2>
        <p className="description">{track?.workshop_mentors_description}</p>
        <div className="mentors-container">
          {track?.workshop_mentors_list?.map((mentor, index) => {
            return <MentorCard key={index} mentor={mentor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkshopMentors;
