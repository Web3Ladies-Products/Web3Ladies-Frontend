import Image from "next/image";
import React from "react";
import Badge from "./Badge";
import Button from "./buttons/Button";
import ArrowRight from "./icons/ArrowRight";

const Highlights = ({ title, HIGHLIGHTS_ITEMS, handleClick }) => {
  return (
    <section className="highlights">
      <div className="container">
        {title && (
          <div className="highlights--heading">
            <h1 className="section-title">{title}</h1>
            <Button
              type={"outline"}
              buttonText={"View More"}
              handleClick={() => null}
            />
          </div>
        )}
        <ul className="highlights--container">
          {HIGHLIGHTS_ITEMS.map((item) => (
            <li
              className="highlight--container-item"
              key={item.id}
              onClick={() => handleClick(item.slug)}
            >
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
                  badgeText={item.type || item.category}
                  badgeBackground={item.background || "#E7D2FF"}
                />
                <h4>{item.title}</h4>
                {item.description && <p>{item.description}</p>}
                {item.buttonText && (
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
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
