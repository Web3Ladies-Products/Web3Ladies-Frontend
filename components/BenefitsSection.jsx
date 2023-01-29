import React from "react";
import Button from "./buttons/Button";
import Mark from "./icons/Mark";

const Benefits = ({ bootcamp }) => {
  return (
    <section className="benefits">
      <div className="container">
        <h2>{bootcamp?.benefits_title}</h2>
        <h3>{bootcamp?.benefits_list_header_title}:</h3>
        <ul className="benefits-list">
          {bootcamp?.benefits_list_details?.map((benefit, index) => {
            return (
              <li key={index} className="benefit">
                <Mark />
                <p>{benefit.content}</p>
              </li>
            );
          })}
        </ul>
        <Button
          variant={bootcamp?.benefits_button_type}
          buttonText={bootcamp?.benefits_button_text}
          handleClick={() => null}
        />
      </div>
    </section>
  );
};

export default Benefits;
