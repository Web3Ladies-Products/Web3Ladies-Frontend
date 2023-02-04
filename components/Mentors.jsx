import React from "react";
import MentorCard from "./tracks/MentorCard";

<<<<<<< HEAD
const Mentors = ({ track }) => {
  return (
    <section className="mentors-section">
      <div className="container">
        <h2 className="heading">{track?.onground_mentors_title
}</h2>
        <p className="description">{track?.onground_mentors_description}</p>
        <div className="mentors-container">
          {track.onground_mentors_list.map((mentor, index) => {
=======
const Mentors = ({ data }) => {
  return (
    <section className="mentors-section">
      <div className="container">
        <h2 className="heading">{data?.mentors_title}</h2>
        <p className="description">{data?.mentors_description}</p>
        <div className="mentors-container">
          {data?.mentors_list_details.map((mentor, index) => {
>>>>>>> d36f0d772c8666aeb8d13da0c14a5feed49e062b
            return <MentorCard key={index} mentor={mentor} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
