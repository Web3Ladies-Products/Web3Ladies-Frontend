import React from "react";
import Image from "next/image";
import Button from "../../buttons/Button";

// TODO:edit image URL
const availableMentees = [
  {
    id: 1,
    name: " Nzewi OCultist dummy",
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
    name: " Mentee Jackson",
    jobRole: "Blockchain developer",
    company: "forgo",
    imageURL: "talk to me daddy",
  },
  {
    id: 4,
    name: " Mentee Jackson",
    jobRole: "Blockchain developer",
    company: "alegra",
    imageURL: "talk to me daddy",
  }
];

const FeaturedMentees = () => {
  return (
    <div className="featured-mentees-section">
      <div className="container">
        <div className="featured-mentees-header">
          <h1> Featured Mentees</h1>
          <Button buttonText="View More" type="outline" />
        </div>

        {/* start mentee */}
        <div className="mentee-card-wrapper">
          {availableMentees.map(({ id, name, jobRole, company, imageURL }) => (
            <div key={id} className="featured-mentee-card">
              <Image
                className="arrow-img"
                width="252px"
                height="274px"
                layout="fixed"
                objectFit="cover"
                src="/assets/images/lone-woman.png"
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

        {/* end mentees */}
      </div>
    </div>
  );
};

export default FeaturedMentees;
