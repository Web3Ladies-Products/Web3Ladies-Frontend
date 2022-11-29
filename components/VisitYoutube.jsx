import Image from "next/image";
import React from "react";
import Button from "./buttons/Button";

const VisitYoutube = () => {
  return (
    <section className="visit-youtube">
      <div className="container">
        <div className="hero_content">
          <h1 className="sub-section-title bold">
            Visit our Youtube page <br></br> to see our videos
          </h1>
          <Button
            variant={"primary"}
            buttonText={"Visit"}
            handleClick={() => null}
          />
        </div>
        <div className="youtube">
          <iframe
            width="350"
            height="200"
            src="https://www.youtube.com/embed/LapzOS7zyW0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="thick-line">
          </div>
          <div className="containner">
            <div className="contain">
            <div className="circle"></div>
            <div>
            <p className="text">Web3ladies</p>
            <div className="line"></div>
            </div>
            </div>
            <Button
            className="button"
            buttonText={"SUBSCRIBE"}
            handleClick={() => null}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitYoutube;
