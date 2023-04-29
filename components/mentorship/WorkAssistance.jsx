import Image from "next/image";
import React from "react";
import Button from "../buttons/Button";

import { useRouter } from "next/router";
const WorkAssistance = () => {
  const router = useRouter();
  return (
    <section className="work-assistance-section">
      <div className="container">
        <h1 className="section-title"> Worktools Assistance</h1>
        <p>
          These mentors will be on the ground for all the mentorship activities,
          they are responsible for classes, responding to mentees’ concerns on
          slack, and grading mentees, they will also be compensated monthly.
        </p>
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
          buttonText="Learn More"
          handleClick={() => {
            router.push("/sponsorship");
          }}
        />
      </div>
    </section>
  );
};

export default WorkAssistance;
