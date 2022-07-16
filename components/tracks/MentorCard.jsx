import React from "react";
import Image from "next/image";

const MentorCard = () => {
  return (
    <div className="mentor-card">
      <div className="mentor-img">
        <Image
          src="/assets/images/mentor.png"
          width={"100%"}
          height={"100%"}
          objectFit="contain"
          alt="mentor-img"
        />
      </div>
      <div>
        <p className="name">Janet Simpson</p>
        <p className="role">Blockchain Developer at Binance</p>
      </div>
    </div>
  );
};

export default MentorCard;
