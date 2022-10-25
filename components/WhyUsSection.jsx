import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import communityData from "../pages/api/community.json";
import Badge from "./Badge";
import Button from "../components/buttons/Button";

const WhyUs = () => {
  const communityHome = communityData.home;
  const router = useRouter();
  return (
    <main className="">
      <div className="container why">
        <div className>
          <h1 className="why--heading">{communityHome.why.title}</h1>
        </div>
      </div>

      <div style={{ marginTop: "30px" }}>
        <ul className=" container highlights--container">
          {communityHome.highlights?.map((item, index) => (
            <li key={index} className="highlight--container-item">
              <div className="grid-container">
                <div className="">
                  <img src={item.image} className="grid-container--image" />
                </div>
                <div className="highlights--container-item--text">
                  <h4>{item.title}</h4>
                  {item.description && <p>{item.description}</p>}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="why--heading">
          <h1 className="btn">
            <Button
              variant={"outline"}
              buttonText={communityHome.why.buttonText}
              handleClick={() => router.push(communityHome.why.buttonLink)}
            />
          </h1>
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
