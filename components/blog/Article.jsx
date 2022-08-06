import Image from "next/image";
import React from "react";
import Badge from "../Badge";
import Button from "../buttons/Button";
import ArrowRight from "../icons/ArrowRight";

const Article = ({ HIGHLIGHTS_ITEMS, handleClick }) => {
  return (
    <section className="highlights">
      <div className="container">
        <ul className="highlights--container">
          {HIGHLIGHTS_ITEMS.map((item) => (
            <li
              className="highlight--container-item"
              key={item.id}
              onClick={() => handleClick(item["attributes"].slug)}
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
                  badgeText={item["attributes"].category}
                  badgeBackground={"#E7D2FF"}
                />
                <h4>{item["attributes"].title}</h4>
                <p>{item["attributes"].description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Article;
