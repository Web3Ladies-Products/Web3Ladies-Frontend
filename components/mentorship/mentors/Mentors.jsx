import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";

const Mentors = () => {
  return (
    <div>
      <div className="container">
        <div>
          <h1> help us mentor more ladies</h1>
          <div>
            <Button buttonText="Become a Sponsor" type="primary" />
            <Button buttonText="Become a Mentor" type="outline" />
          </div>
        </div>

        <div>
          <Image
            className="arrow-img"
            width="670px"
            height="520px"
            objectFit="contain"
            src="/assets/images/help-mentor.png"
            alt="arrow-vector"
          />
        </div>
      </div>
    </div>
  );
};

export default Mentors;
