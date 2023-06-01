import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

import { useRouter } from "next/router";
const WorkAssistance = ({ workAssistanceData }) => {
  const router = useRouter();
  return (
    <section id="worktools" className="work-assistance-section">
      <div className="container">
        <h1 className="section-title"> {workAssistanceData.title}</h1>
        <p>{workAssistanceData.description}</p>
        <div className="work-assistance-images-wrap">
          <div>
            <Image
              className="arrow-img"
              width="350px"
              height="292px"
              objectFit="contain"
              src="/assets/images/worktool-1.png"
              alt="arrow-vector"
            />
          </div>
          <div>
            <Image
              className="arrow-img"
              width="350px"
              height="292px"
              objectFit="contain"
              src="/assets/images/worktool-2.png"
              alt="arrow-vector"
            />
          </div>
          <div>
            <Image
              className="arrow-img"
              width="350px"
              height="292px"
              objectFit="contain"
              src="/assets/images/worktool-3.png"
              alt="arrow-vector"
            />
          </div>
        </div>
        <Button
          type="outline"
          buttonText={workAssistanceData.btn_text}
          handleClick={() => {
            router.push(workAssistanceData.btn_link);
          }}
        />
      </div>
    </section>
  );
};

export default WorkAssistance;
