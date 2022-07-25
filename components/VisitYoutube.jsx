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
            type={"primary"}
            buttonText={"Visit"}
            handleClick={() => null}
          />
        </div>
        <div className="youtube">
          <iframe
            width="380"
            height="300"
            src="https://www.youtube.com/embed/LapzOS7zyW0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VisitYoutube;
