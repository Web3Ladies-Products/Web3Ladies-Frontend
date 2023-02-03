import React from "react";
import MentorCard from "./tracks/MentorCard";

const Mentors = ({ data }) => {
  return (
    <section className="mentors-section">
      <div className="container">
        <h2 className="heading">{data?.mentors_title}</h2>
        <p className="description">{data?.mentors_description}</p>
        <div className="mentors-container">
          {data?.mentors_list_details.map((mentor, index) => {
            return <MentorCard key={index} mentor={mentor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
