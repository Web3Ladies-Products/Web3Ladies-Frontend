import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import communityData from "../pages/api/community.json";
import Button from "./buttons/Button";
import Slack from "../components/icons/Slack";

const HowToJoin = ({ title, how_to_join,handleClick, buttonText }) => {
  const communityHome = communityData.home;
  const router = useRouter();
  return (
    <section className="community">
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
          {how_to_join?.map((item, index) => (
            <li key={index} className="highlight--container-item">
              <div className="grid-container">
                <div className="">
                  <img src={item.image} className="grid-container--image" />
                </div>
                <div className="highlights--container-item--text">
                  <h4 className="item-text">{item.step}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="container why">
          <div className="sub-heading">
            <h1 className="">
              <Button
                variant={"outline"}
                width={"243px"}
                handleClick={handleClick}
                hasIcon
              >
                <span className="icon-left">
                  <Slack />
                </span>
                {buttonText}
              </Button>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToJoin;
