import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
const WhyLearn = ({ whyLearnData }) => {
  const router = useRouter();
  return (
    <section className="why-learn-section">
      <div className="why-learn-content">
        <h1 className="section-title">{whyLearnData.title}</h1>
        <p>{whyLearnData.description}</p>
        <div className="badges-wrap">
          <div className="why-badge">
            <Image
              src="/assets/images/teamwork-icon.png"
              alt="ball-icon"
              width={18}
              height={18}
            />{" "}
            {whyLearnData.text_1}
          </div>
          <div className="why-badge">
            <Image
              src="/assets/images/experience-icon.png"
              alt="experience-icon"
              width={18}
              height={18}
            />{" "}
            {whyLearnData.text_2}
          </div>
          <div className="why-badge">
            <Image
              width={18}
              height={18}
              src="/assets/images/fungames-icon.png"
              alt="fungames-icon"
            />{" "}
            {whyLearnData.text_3}
          </div>
          <div className="why-badge">
            <Image
              width={18}
              height={18}
              alt="mentorship-icon"
              src="/assets/images/mentorship-icon.png"
            />{" "}
            {whyLearnData.text_4}
          </div>
        </div>
        <Button
          buttonText={whyLearnData.btn_text}
          type="primary-inverse"
          className="bg-white"
          handleClick={() => {
            router.push(whyLearnData.btn_link);
          }}
        />
      </div>
      <div className="why-learn-image">
        <img
          className="arrow-img"
          src="/assets/images/smiling-woman-pink-circles.png"
          alt="arrow-vector"
        />
      </div>
    </section>
  );
};

export default WhyLearn;
