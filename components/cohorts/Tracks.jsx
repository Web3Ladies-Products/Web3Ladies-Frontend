import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

const Tracks = () => {
  const TRACKS = [
    {
      icons: [
        "/assets/images/solidity.png",
        "/assets/images/python.png",
        "/assets/images/js.png",
      ],
      title: "Web3 - Blockchain Development",
      description:
        "The Blockchain developer’s responsibility is to develop innovative solutions to challenging problems, including solutions for command and control, and high integrity.",
      buttonText: "View Track",
    },
    {
      icons: [
        "/assets/images/html.png",
        "/assets/images/css.png",
        "/assets/images/js.png",
      ],
      title: "Web2 - Blockchain Development",
      description:
        "This track is for beginners in web development, this track will focus on teaching the basics of web development, such as HTML, CSS, and JavaScript.",
      buttonText: "View Track",
    },
    {
      icons: ["/assets/images/figma.png"],
      title: "Product Design",
      description:
        "This track is designed to evaluate a baseline of visual skills, and analytical thinking, this is for applicants who want to start a career in UI/UX track",
      buttonText: "View Track",
    },
    {
      icons: ["/assets/images/jira.png"],
      title: "Product Management",
      description:
        "Product management is the business process of planning, developing, launching, and managing a product or service. It includes the entire lifecycle of a product, from ideation to development to go to market.",
      buttonText: "View Track",
    },
  ];
  return (
    <section className="tracks">
      <div className="round-vector">
        <Image
          src="/assets/images/round-vector.png"
          width={"100%"}
          height={"100%"}
          alt="round-vector"
        />
      </div>
      <div className="crescent-vector">
        <Image
          src="/assets/images/crescent-vector.png"
          width={"100%"}
          height={"100%"}
          alt="crescent-vector"
        />
      </div>
      <div className="cylindrical">
        <Image
          src="/assets/images/cylindrical.png"
          width={"100%"}
          height={"100%"}
          alt="cylindrical"
        />
      </div>
      <h1>Tracks</h1>
      <div className="track-items">
        {TRACKS.map((item, index) => (
          <li className="track-item" key={item.title}>
            <div className="icons">
              {item.icons.map((icon) => {
                return (
                  <Image
                    key={index}
                    src={icon}
                    width={"40px"}
                    height={"40px"}
                    objectFit="contain"
                    alt={item.title}
                  />
                );
              })}
            </div>
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div>
              <p>{item.description}</p>
            </div>
            <div>
              <Button
                variant={"outline"}
                buttonText={item.buttonText}
                handleClick={() => null}
              ></Button>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
