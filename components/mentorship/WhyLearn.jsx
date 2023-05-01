import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
const WhyLearn = ({ whyLearnData }) => {
  const router = useRouter();
  return (
    <section className="why-learn-section">
      <div className="container">
        <div className="why-learn-content">
          <h1 className="section-title">{whyLearnData.title}</h1>
          <p>{whyLearnData.description}</p>
          <div className="badges-wrap">
            <div className="why-badge">
              <Image
                src="/assets/images/ball-icon.png"
                alt="ball-icon"
                width={50}
                height={50}
              />{" "}
              {whyLearnData.text_1}
            </div>
            <div className="why-badge">{whyLearnData.text_2}</div>
            <div className="why-badge">
              <Image
                width={50}
                height={50}
                src="/assets/images/ball-icon.png"
                alt="ball-icon"
              />{" "}
              {whyLearnData.text_3}
            </div>
            <div className="why-badge">
              <Image
                width={50}
                height={50}
                alt="ball-icon"
                src="/assets/images/ball-icon.png"
              />{" "}
              {whyLearnData.text_4}
            </div>
          </div>
          <Button
            buttonText={whyLearnData.btn_text}
            type="primary-inverse"
            handleClick={() => {
              router.push(whyLearnData.btn_link);
            }}
          />
        </div>
        <div className="why-learn-image">
          <Image
            className="arrow-img"
            width="862px"
            height="700px"
            layout="fixed"
            objectFit="contain"
            src="/assets/images/smiling-woman-pink-circles.png"
            alt="arrow-vector"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyLearn;
