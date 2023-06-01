import React from "react";
import Button from "./buttons/Button";
import Image from "next/image";
import Slack from "../components/icons/Slack";

export default function JoinCommunity({ description, buttonText }) {
  return (
    <section className="introduction--dark" id="who-we-are">
      <div className="">
        <div className="introduction--heading" id="header">
          <h1
            className="why--heading"
            id="why--heading"
            dangerouslySetInnerHTML={{ __html: buttonText }}
          />
          <div className="why-image">
            <Image
              className="hero-img"
              width="100"
              height="150"
              objectFit="contain"
              src="/assets/images/web3ladies-about-bounce.png"
              alt="web3-vector"
            />
          </div>
        </div>

        <div className="introduction--container">
          <p
            className="introduction--container-text"
            id="header"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />

          {buttonText && (
            <div className="introduction--container-cta">
              <Button
                variant={"outline"}
                width={"243px"}
                handleClick={() =>
                  window.open(communityHome.join.buttonLink, "_blank")
                }
                hasIcon
              >
                <span className="icon-left">{/* <Slack /> */}</span>
                <h1 dangerouslySetInnerHTML={{ __html: buttonText }} />
              </Button>

              <Image
                className="arrow-img"
                width="67px"
                height="63px"
                objectFit="contain"
                src="/assets/images/arrow-img.png"
                alt="arrow-vector"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
