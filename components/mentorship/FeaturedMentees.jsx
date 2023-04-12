import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";

// TODO:edit image URL
const availableMentees = [
  {
    id: 1,
    name: " Nzewi OCultist dummy",
    jobRole: "Blockchain developer",
    company: "tramadol",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: 2,
    name: " Janet Jackson",
    jobRole: "Blockchain developer",
    company: "Binance",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: 3,
    name: " Mentee Jackson",
    jobRole: "Blockchain developer",
    company: "forgo",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: 4,
    name: " Mentee Jackson",
    jobRole: "Blockchain developer",
    company: "alegra",
    imageURL: "/assets/images/lone-woman.png",
  },
];

const FeaturedMentees = () => {
  return (
    <section className="featured-mentees-section">
      <div className="container">
        <div className="featured-mentees-header">
          <h1 className="section-title"> Featured Mentees</h1>
          <Button
            buttonText="View More"
            type="outline"
            handleClick={() => {}}
            border="border__btn"
          />
        </div>

        <div className="mentee-card-wrapper">
          {availableMentees.map(({ id, name, jobRole, company, imageURL }) => (
            <div key={id} className="featured-mentee-card">
              <Image
                className="arrow-img"
                width="100%"
                height="274px"
                objectFit="cover"
                src={imageURL}
                alt="A mentee"
              />
              <div className="featured-mentee-card-content">
                <h2>{name}</h2>
                <div>
                  <span>{jobRole}</span> &#124; <a href={company}>contact</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMentees;
