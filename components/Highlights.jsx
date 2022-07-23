import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Button from "./buttons/Button";
import ArrowRight from "./icons/ArrowRight";

const Highlights = ({ title, HIGHLIGHTS_ITEMS }) => {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights--heading">
          <h1>{title}</h1>
          <Button
            type={"outline"}
            buttonText={"View More"}
            handleClick={() => null}
          />
        </div>
        <ul className="highlights--container">
          {HIGHLIGHTS_ITEMS.map((item) => (
            <li className="highlight--container-item" key={item.title}>
              <div className="highlights--container-item--image">
                <Image
                  src="/assets/images/highlights-image.png"
                  width={"125px"}
                  height={"220px"}
                  objectFit="contain"
                  alt="highlights-image"
                />
              </div>
              <div className="highlights--container-item--text">
                <Badge
                  badgeText={item.type}
                  badgeBackground={item.background}
                />
                <h4>{item.title}</h4>
                <Button
                  type={"clear"}
                  color={"primary"}
                  hasIcon
                  buttonText={item.buttonText}
                  handleClick={() => null}
                >
                  <span className="icon-right">
                    <ArrowRight width={10} height={10} color={"#7D0BFE"} />{" "}
                  </span>
                </Button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
