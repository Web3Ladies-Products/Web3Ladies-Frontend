import Image from "next/image";
import React from "react";
import { mentorship } from "../../public/assets/images";
import Tracks from "../analytics/Tracks";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
const About = ({ about_cohort, tracks_details }) => {
  const router = useRouter();
  return (
    <section className="about-cohort">
      <div className="container ">
        <div className="about-cohort--item">
          <div className="about-cohort--item--image">
            <Image
              src={about_cohort.about_image}
              width={"635px"}
              height={"405px"}
              alt="Ama session"
              className="about-cohort--image"
              objectFit="cover"
            />
          </div>
          <div className="about-cohort--item--text">
            <h3>{about_cohort?.about_title}</h3>
            <p>{about_cohort.about_desciption}</p>
            {about_cohort?.about_button_text && (
              <Button
                buttonText={about_cohort.about_button_text}
                border="3px solid black"
                handleClick={() => router.push(about_cohort.about_button_link)}
              />
            )}
          </div>
        </div>
        <Tracks tracks_details={tracks_details} />
      </div>
    </section>
  );
};

export default About;
