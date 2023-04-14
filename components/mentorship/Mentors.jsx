import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
// TODO: edit the imageURL
const availableMentors = [
  {
    id: 1,
    name: " Nzewi OCultist ",
    jobRole: "Blockchain developer",
    company: "tramadol",
    imageURL: "talk to me daddy",
  },
  {
    id: 2,
    name: " Janet Jackson",
    jobRole: "Blockchain developer",
    company: "Binance",
    imageURL: "talk to me daddy",
  },
  {
    id: 3,
    name: " Mentor ",
    jobRole: "Blockchain developer",
    company: "forgo",
    imageURL: "talk to me daddy",
  },
  {
    id: 4,
    name: " Mentor ",
    jobRole: "Blockchain developer",
    company: "alegra",
    imageURL: "talk to me daddy",
  },
];

const Mentors = () => {
  const router = useRouter();
  return (
    <>
      <div className="help-mentor-section">
        <div>
          <div className="content-wrap">
            <h1 className="section-title text-uppercase">
              help us mentor <br /> more ladies
            </h1>
            <div>
              <Button
                handleClick={() => {
                  router.push("/sponsorship");
                }}
                buttonText="Become a Sponsor"
                type="primary"
              />
              <Button
                handleClick={() => {
                  router.push("/mentorship");
                }}
                buttonText="Become a Mentor"
                type="outline"
              />
            </div>
          </div>

          <div className="image-wrap">
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

      <section className="top-mentors-section">
        <div className="container">
          <h1 className="section-title">Meet Our Top Mentors</h1>
          <p className="section-description">
            These mentors will be on the ground for all the mentorship
            activities, they are responsible for classes, responding to mentees’
            concerns on slack, and grading mentees, they will also be
            compensated monthly.
          </p>

          <div style={{ flexWrap: "wrap" }} className="mentor-card-wrapper">
            {availableMentors.map(
              ({ id, name, jobRole, company, imageURL }) => (
                <div key={id} className="top-mentors-card">
                  <Image
                    className="arrow-img"
                    width="100%"
                    height="266px"
                    // layout="fixed"
                    objectFit="cover"
                    src="/assets/images/available-mentor.png"
                    alt="arrow-vector"
                  />
                  <div className="top-mentors-card-content">
                    <h2>{name}</h2>
                    <div>
                      <span>{jobRole}</span> &#124; <span>{company}</span>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentors;
