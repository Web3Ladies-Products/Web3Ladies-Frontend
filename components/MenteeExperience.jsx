import Image from "next/image";
import React from "react";

const MenteeExperience = ({ past_bootcamps_mentees_details }) => {
  return (
    <ul className="mentee-experience--list">
      {past_bootcamps_mentees_details?.map((mentee, index) => {
        return (
          <li className="mentee-experience--list-item" key={index}>
            <div className="mentee-image">
              <Image
                className="mentee-image"
                width={"272px"}
                objectFit="contain"
                height={"400px"}
                src={mentee.image}
                alt="mentee-image"
              />
            </div>
            <div className="mentee-content">
              <h2 className="sub-section-title bold">{mentee.name}</h2>
              <p className="section-description">{mentee.title}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MenteeExperience;
