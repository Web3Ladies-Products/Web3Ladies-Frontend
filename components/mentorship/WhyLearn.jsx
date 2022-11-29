import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";

const WhyLearn = () => {
  return (
    <section className="why-learn-section">
      <div className="container">
        <div className="why-learn-content">
          <h1 className="section-title">Why learn with us</h1>
          <p>
            These mentors will be on the ground for all the mentorship
            activities, they are responsible for classes, responding to mentees’
            concerns on slack, and grading mentees, they will also be
            compensated monthly.
          </p>
          <div className="badges-wrap">
            <div className="why-badge">
              <Image
                src="/assets/images/ball-icon.png"
                alt="ball-icon"
                width={50}
                height={50}
              />{" "}
              Team Work
            </div>
            <div className="why-badge">Hands-on experience</div>
            <div className="why-badge">
              <Image
                width={50}
                height={50}
                src="/assets/images/ball-icon.png"
                alt="ball-icon"
              />{" "}
              Fun/Games
            </div>
            <div className="why-badge">
              <Image
                width={50}
                height={50}
                alt="ball-icon"
                src="/assets/images/ball-icon.png"
              />{" "}
              Mentorship
            </div>
          </div>
          <Button buttonText="Register Now" type="primary-inverse" />
        </div>
        <div className="why-learn-image">
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
    </section>
  );
};

export default WhyLearn;
