import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";

const TrackCard = () => {
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
        <h2> Web2 - Web Development</h2>
        <p>
          {" "}
          Product management is the business process of planning, developing,
          launching, and managing a product or service. It includes the entire
          lifecycle of a product, from ideation to development to go to market.
        </p>
      </div>
      <div>
        <Button buttonText="View Track" type="outline" />
      </div>
    </div>
  );
};

export default TrackCard;
