import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";

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
  }
];

const Mentors = () => {
  return (
    <>
      <div className="help-mentor-section">
        <div>
          <div className="content-wrap">
            <h1> help us mentor more ladies</h1>
            <div>
              <Button buttonText="Become a Sponsor" type="primary" />
              <Button buttonText="Become a Mentor" type="outline" />
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

      <div className="top-mentors-section">
        <h1>Meet Our Top Mentors</h1>
        <p>
          {" "}
          These mentors will be on the ground for all the mentorship activities,
          they are responsible for classes, responding to mentees’ concerns on
          slack, and grading mentees, they will also be compensated monthly.
        </p>

        <div className="mentor-card-wrapper">
          {availableMentors.map(({ id, name, jobRole, company, imageURL }) => (
            <div key={id} className="top-mentors-card">
              {/* <div> */}
              <Image
                className="arrow-img"
                width="256px"
                height="266px"
                layout="fixed"
                objectFit="cover"
                src="/assets/images/available-mentor.png"
                alt="arrow-vector"
              />
              {/* </div> */}
              <div className="top-mentors-card-content">
                <h2>{name}</h2>
                <div>
                  <span>{jobRole}</span> &#124; <span>{company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Mentors;
