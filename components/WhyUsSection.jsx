import React from "react";

import Button from "../components/buttons/Button";

const WhyUs = ({ title, highlights, handleClick, buttonText }) => {
  return (
    <main className="">
      <div className="container why">
        <div className>
          <h1
            className="why--heading"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <ul className=" container highlights--container">
          {highlights?.map((item, index) => (
            <li
              key={index}
              style={{ backgroundColor: item?.backgroundColor }}
              className="highlight--container-item"
            >
              <div className="grid-container">
                <div className="">
                  <img src={item.image} className="grid-container--image" />
                </div>
                <div className="highlights--container-item--text">
                  <h4>{item.title}</h4>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="why--heading">
          <h1 className="btn">
            <Button
              variant={"outline"}
              buttonText={buttonText}
              handleClick={handleClick}
            />
          </h1>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
