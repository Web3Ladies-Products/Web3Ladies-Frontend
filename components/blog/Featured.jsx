import Image from "next/image";
import React from "react";
import Badge from "../Badge";
import Button from "../buttons/Button";
import ArrowRight from "../icons/ArrowRight";

const Featured = () => {
  return (
    <main>
      <div className="container cta" style={{ paddingTop: "0" }}>
        <h1 className="section-title bold">Featured</h1>
        <div className="content">
          <div className="hero_content bootcamp">
            <Badge badgeText={"press"} badgeBackground={"#E7D2FF"} />
            <h2 className="section-title">
              Binance patners with Web3Ladies to bring more ladies into Web3 in
              Africa
            </h2>

            <div className="button-container">
              <Button
                type={"clear"}
                color={"primary"}
                buttonText={"Read more"}
                hasIcon
                handleClick={() => {
                  null;
                }}
              >
                <span className="icon-right">
                  <ArrowRight width={10} height={10} color={"#7D0BFE"} />{" "}
                </span>
              </Button>
            </div>
          </div>

          <div className="hero_image">
            <div>
              <Image
                className="hero-image"
                width={"493px"}
                height={"472px"}
                src="/assets/images/featured.png"
                alt="cohort-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Featured;
