import React from "react";
import Button from "../../buttons/Button";
import Image from "next/image";

const Training = () => {
  return (
    <div className="training-section">
      <span className="training-section-icon-right">
        <Image
          className="hero-img"
          width="193px"
          height="116px"
          layout="intrinsic"
          objectFit="contain"
          src="/assets/images/dick-stick.png"
          alt="arrow-vector"
        />
      </span>
      <div className="training-content">
        <div>
          <h1>
            Get <span className=""> hands-on training</span> from the best minds
          </h1>
          <Button buttonText="Register Now" type="outline" />
        </div>
      </div>
      <div className="training-images">
        <Image
          className="hero-img"
          width="673px"
          height="490px"
          objectFit="contain"
          src="/assets/images/mentorship-training.png"
          alt="arrow-vector"
        />
      </div>
    </div>
  );
};

export default Training;
