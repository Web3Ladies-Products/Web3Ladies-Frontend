import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import NumberMarker from "./icons/NumberMarker";

const Gains = ({ track }) => {
  return (
    <section className="gains-section">
      <div className="container">
        <div className="content">
          <h1>{track?.gains_title}</h1>
          <ul className="gains-section--list">
            {track?.gains_list?.map((gain, index) => {
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
              variant={track?.gains_button_type}
              buttonText={track?.gains_button_text}
              color={"primary"}
              handleClick={() => window.open("/mentorship/register", "_blank")}
            />
          </div>
        </div>

        <div className="gains_image">
          <Image
            className="gains-image"
            width={"493px"}
            objectFit="contain"
            height={"472px"}
            src={track?.gains_image}
            alt="gains-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Gains;
