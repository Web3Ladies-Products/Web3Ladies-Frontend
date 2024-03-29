import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Badge from "./Badge";
import Button from "./buttons/Button";
import ArrowRight from "./icons/ArrowRight";

const Highlights = ({
  title,
  HIGHLIGHTS_ITEMS,
  handleClick,
  viewMore,
  viewMoreLink,
  children,
}) => {
  const router = useRouter();
  return (
    <section className="highlights">
      <div className="container">
        {title && (
          <div className="highlights--heading">
            <h1 className="section-title">{title}</h1>
            {viewMore && (
              <Button
                variant={"outline"}
                buttonText={"View More"}
                handleClick={() => router.push(viewMoreLink)}
              />
            )}
          </div>
        )}
        {children}
        <ul className="highlights--container">
          {HIGHLIGHTS_ITEMS?.map((item, index) => (
            <li
              key={index}
              className="highlight--container-item"
              onClick={() => router.push(item.button_link)}
            >
              <div className="highlights--container-item--image">
                <Image
                  src={item.image}
                  width={400}
                  height={220}
                  objectFit="cover"
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
                {item.button_text && (
                  <Button
                    variant={"clear"}
                    color={"primary"}
                    hasIcon
                    buttonText={item.button_text}
                    handleClick={() =>
                      item.button_link.includes("http")
                        ? window.open(item.button_link, "_blank")
                        : router.push(item.button_link)
                    }
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
