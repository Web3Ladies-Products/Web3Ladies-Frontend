import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
const Tracks = ({ tracks }) => {
  const router = useRouter();
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
        {tracks.map((item, index) => (
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
                handleClick={() => router.push(item.url)}
              ></Button>
            </div>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Tracks;
