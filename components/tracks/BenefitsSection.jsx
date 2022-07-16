import React from "react";
import Button from "../buttons/Button";
import Mark from "../icons/Mark";

const Benefits = () => {
  const BENEFITS = [
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment",
    },
  ];

  return (
    <section className="benefits">
      <div className="container">
        <h2>Is this track right for you?</h2>
        <h3>You will benefit from this programme if you are:</h3>
        <ul className="benefits-list">
          {BENEFITS.map((benefit, index) => {
            return (
              <li key={index} className="benefit">
                <Mark />
                <p>{benefit.content}</p>
              </li>
            );
          })}
        </ul>
        <Button
          type={"primary"}
          buttonText={"Register now"}
          handleClick={() => null}
        />
      </div>
    </section>
  );
};

export default Benefits;
