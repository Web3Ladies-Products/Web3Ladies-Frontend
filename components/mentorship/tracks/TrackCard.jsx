import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";

const TrackCard = ({ title, description }) => {
  return (
    <div className="track-card">
      <div>
        <div className="icons-wrap">
          <Image
            className="arrow-img"
            width="40px"
            height="40px"
            objectFit="contain"
            src="/assets/images/worktool-1.png"
            alt="arrow-vector"
          />
          <Image
            className="arrow-img"
            width="40px"
            height="40px"
            objectFit="contain"
            src="/assets/images/worktool-1.png"
            alt="arrow-vector"
          />
          <Image
            className="arrow-img"
            width="40px"
            height="40px"
            objectFit="contain"
            src="/assets/images/worktool-1.png"
            alt="arrow-vector"
          />
        </div>
        <h2> {title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <Button buttonText="View Track" type="outline" />
      </div>
    </div>
  );
};

export default TrackCard;
