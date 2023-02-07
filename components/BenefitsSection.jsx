import React from "react";
import Button from "./buttons/Button";
import Mark from "./icons/Mark";

const Benefits = ({ track }) => {
  return (
    <section className="benefits">
      <div className="container">
        <h2>{track?.benefits_title}</h2>
        <h3>{track?.benefits_list_header_title}:</h3>
        <ul className="benefits-list">
          {track?.benefits_list?.map((benefit, index) => {
            return (
              <li key={index} className="benefit">
                <Mark />
                <p>{benefit.content}</p>
              </li>
            );
          })}
        </ul>
        <Button
          variant={track?.benefits_button_type}
          buttonText={track?.benefits_button_text}
          handleClick={() => null}
        />
      </div>
    </section>
  );
};

export default Benefits;
