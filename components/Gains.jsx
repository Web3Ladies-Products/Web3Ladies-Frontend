import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";
import NumberMarker from "./icons/NumberMarker";

const Gains = ({ data }) => {
  return (
    <section className="gains-section">
      <div className="container">
        <div className="content">
          <h1>{data?.title}</h1>
          <ul className="gains-section--list">
            {data?.gainsList?.map((gain, index) => {
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
              type={data?.buttonType}
              buttonText={data?.buttonText}
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
              src={data?.image}
              alt="gains-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gains;