import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";
import NumberMarker from "../icons/NumberMarker";

const Gains = () => {
  const GAINS = [
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
  ];

  return (
    <section className="gains-section">
      <div className="container">
        <div className="content">
          <h1>What you will gain</h1>
          <ul className="gains-section--list">
            {GAINS.map((gain, index) => {
              return (
                <li key={index} className="gains-section--list-item">
                  <NumberMarker number={index + 1} />
                  <p>{gain.content}</p>
                </li>
              );
            })}
          </ul>

          <div className="button-container">
            <Button
              type={"outline"}
              buttonText={"Register now"}
              color={"primary"}
              handleClick={() => null}
            />
          </div>
        </div>

        <div className="gains_image">
          <div>
            <Image
              className="gains-image"
              width={"493px"}
              height={"472px"}
              src="/assets/images/what-you-will-gain-image.png"
              alt="gains-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gains;
