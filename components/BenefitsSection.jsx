import React from "react";
import Button from "./buttons/Button";
import Mark from "./icons/Mark";

const Benefits = ({ data }) => {
  return (
    <section className="benefits">
      <div className="container">
        <h2>{data.title}</h2>
        <h3>{data.benefitsListHeader}:</h3>
        <ul className="benefits-list">
          {data.benefitsList?.map((benefit, index) => {
            return (
              <li key={index} className="benefit">
                <Mark />
                <p>{benefit.content}</p>
              </li>
            );
          })}
        </ul>
        <Button
          variant={data.buttonType}
          buttonText={data.buttonText}
          handleClick={() => null}
        />
      </div>
    </section>
  );
};

export default Benefits;
