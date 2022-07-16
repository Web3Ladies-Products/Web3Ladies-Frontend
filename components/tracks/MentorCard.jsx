import React from "react";
import Image from "next/image";

const MentorCard = ({ mentor }) => {
  return (
    <div className="mentor-card">
      <div className="mentor-img">
        <Image
          src={mentor.image}
          width={"100%"}
          height={"100%"}
          objectFit="contain"
          alt="mentor-img"
        />
      </div>
      <div>
        <p className="name">{mentor.name}</p>
        <p className="role">{mentor.role}e</p>
      </div>
    </div>
  );
};

export default MentorCard;
