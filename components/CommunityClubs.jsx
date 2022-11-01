import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import communityData from "../pages/api/community.json";
import Button from "./buttons/Button";

const CommunityClubs = () => {
  const communityHome = communityData.home;
  const router = useRouter();
  return (
    <section className="">
      <div className="container">
        <div className="cta">
          <div className="content">
            <div className="hero_content">
              <h2 className="section-title">
                {" "}
                {communityHome.community_clubs.title}
              </h2>
              <p className="section-text" id="com-desc">
                {communityHome.community_clubs.description}
              </p>
              <h1 className="section-title" id="com-chapters">
                {" "}
                {communityHome.community_clubs.chapter}
              </h1>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <ul className=" highlights--community">
            {communityHome.community_chapters?.map((item, index) => (
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
                        style={{ marginLeft: '13px'}}
                        buttonText={communityHome.community_clubs.buttonText}
                        handleClick={() =>
                          router.push(communityHome.community_clubs.buttonLink)
                        }
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
                  {communityHome.community_clubs.club}
                </h1>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
          <ul className=" highlights--community">
            {communityHome.community_chapters?.map((item, index) => (
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
                        style={{ marginLeft: '13px'}}
                        buttonText={communityHome.community_clubs.buttonText}
                        handleClick={() =>
                          router.push(communityHome.community_clubs.buttonLink)
                        }
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
