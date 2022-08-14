import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";

const WhyLearn = () => {
  return (
    <div className="why-learn-section">
      <div className="why-learn-content">
        <h1>Why learn with us</h1>
        <p>
          These mentors will be on the ground for all the mentorship activities,
          they are responsible for classes, responding to mentees’ concerns on
          slack, and grading mentees, they will also be compensated monthly.
        </p>
        <div className="badges-wrap">
          <div className="why-badge">
            <img src="/assets/images/ball-icon.png" /> Team Work
          </div>
          <div className="why-badge">Hands-on experience</div>
          <div className="why-badge">
            <img src="/assets/images/ball-icon.png" /> Fun/Games
          </div>
          <div className="why-badge">
            <img src="/assets/images/ball-icon.png" /> Mentorship
          </div>
        </div>
        <Button buttonText="Register Now" type="primary-inverse" />
      </div>
      <div className="why-learn-image-wrap">
        <Image
          className="arrow-img"
          width="862px"
          height="700px"
          layout="fixed"
          objectFit="contain"
          src="/assets/images/smiling-woman-pink-circles.png"
          alt="arrow-vector"
        />
      </div>
    </div>
  );
};

export default WhyLearn;
