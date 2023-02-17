import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import NumberMarker from "./icons/NumberMarker";

const Gains = ({ data }) => {
  return (
    <section className="gains-section">
      <div className="container">
        <div className="content">
          <h1>{data?.gains_title}</h1>
          <ul className="gains-section--list">
            {data.gains_list_details?.map((gain, index) => {
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
              variant={data?.gains_button_type}
              buttonText={data?.gains_button_text}
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
              src={data?.gains_image}
              alt="gains-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gains;
