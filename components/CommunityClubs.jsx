import { useRouter } from "next/router";
import React from "react";

import Button from "./buttons/Button";

const CommunityClubs = ({ communityPage }) => {
  const router = useRouter();
  return (
    <section className="">
      <div className="container">
        <div className="cta">
          <div className="content">
            <div className="hero_content">
              <h2 className="section-title"> {communityPage.club_title}</h2>
              <p className="section-text" id="com-desc">
                {communityPage.club_description}
              </p>
              <h1 className="section-title" id="com-chapters">
                {" "}
                {communityPage.club_subtitle_one}
              </h1>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <ul className=" highlights--community">
            {communityPage.club_chapters?.map((item, index) => (
              <li key={index} className="highlight--container-item">
                <div className="chapter-container">
                  <div className="">
                    <img
                      src={item.image}
                      className="grid-container--image"
                      id="img-card"
                    />
                  </div>
                  <div className="highlights--container-item--text">
                    <h4 className="item-text" id="text-loc">
                      {item.location}
                    </h4>
                    <p id="text-desc">{item.description}</p>
                    <Button
                      variant={"outline"}
                      style={{ marginLeft: "13px" }}
                      buttonText={item.buttonText}
                      handleClick={() => router.push(item.buttonLink)}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="cta">
            <div className="content">
              <div className="hero_content">
                <h1 className="section-title" id="com-chapters">
                  {" "}
                  {communityPage.club_subtitle_two}
                </h1>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <ul className=" highlights--community">
              {communityPage.club_lists?.map((item, index) => (
                <li key={index} className="highlight--container-item">
                  <div className="chapter-container">
                    <div className="">
                      <img
                        src={item.image}
                        className="grid-container--image"
                        id="img-card"
                      />
                    </div>
                    <div className="highlights--container-item--text">
                      <h4 className="item-text" id="text-loc">
                        {item.location}
                      </h4>
                      <p id="text-desc">{item.description}</p>

                      <Button
                        variant={"outline"}
                        style={{ marginLeft: "13px" }}
                        buttonText={item.buttonText}
                        handleClick={() => router.push(item.buttonLink)}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityClubs;
