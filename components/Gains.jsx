import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import NumberMarker from "./icons/NumberMarker";

const Gains = ({ bootcamp }) => {
  return (
    <section className="gains-section">
      <div className="container">
        <div className="content">
          <h1>{bootcamp?.gains_title}</h1>
          <ul className="gains-section--list">
            {bootcamp?.gains_list_details?.map((gain, index) => {
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
              variant={bootcamp?.gains_button_type}
              buttonText={bootcamp?.gains_button_text}
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
              src={bootcamp?.gains_image}
              alt="gains-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gains;
