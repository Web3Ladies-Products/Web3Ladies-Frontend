import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./buttons/Button";
import { strapiService } from "../services";

const VisitYoutube = () => {
  const [youtubeData, setYoutubeData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const indexPage = await strapiService.getYoutubeData();
        setYoutubeData(indexPage.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <section className="visit-youtube">
      <div className="container">
        <div className="hero_content">
          <h1
            className="sub-section-title bold"
            dangerouslySetInnerHTML={{
              __html:
                youtubeData?.title ||
                "Visit our Youtube page <br/> to see our videos",
            }}
          />

          <Button
            variant={"primary"}
            buttonText={youtubeData.buttonText || "Visit"}
            handleClick={() =>
              window.open(
                youtubeData.subscription_link ||
                  "https://www.youtube.com/channel/UCJXSj2yJz2JYV1yGE5lQFyg",
                "_blank"
              )
            }
          />
        </div>
        <div className="youtube">
          <iframe
            width="350"
            height="200"
            src={
              youtubeData.video_url ||
              "https://www.youtube.com/embed/LapzOS7zyW0"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="thick-line"></div>
          <div className="containner">
            <div className="contain">
              <div className="circle"></div>
              <div>
                <p className="text">Web3ladies</p>
                <div className="line"></div>
              </div>
            </div>
            <Button
              variant={"primary"}
              className="button"
              buttonText={youtubeData.subscription_text || "SUBSCRIBE"}
              handleClick={() =>
                window.open(
                  youtubeData.subscription_link ||
                    "https://www.youtube.com/channel/UCJXSj2yJz2JYV1yGE5lQFyg",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitYoutube;
