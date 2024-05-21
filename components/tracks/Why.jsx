import React from "react";
const Why = ({ track }) => {
  return (
    <section className="why-study-blockchain">
      <div className="container ">
        <h2>{track?.why_study_title}</h2>
        <div className="text">
          <p>{track?.why_study_description}</p>
          {track?.why_study_description_two && (
            <p>{track?.why_study_description_two}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Why;
