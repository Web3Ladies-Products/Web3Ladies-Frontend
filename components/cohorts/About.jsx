import Image from "next/image";
import React from "react";
import { mentorship } from "../../public/assets/images";
import Tracks from "../analytics/Tracks";
import Button from "../buttons/Button";
import { useRouter } from "next/router";
const About = ({ tracks_details}) => {
  const router = useRouter();
  return (
    <section className="about-cohort">
      <div className="container ">
        <div className="about-cohort--item">
          <div className="about-cohort--item--image">
            <Image
              src="/assets/images/ama-session.png"
              width={"635px"}
              height={"405px"}
              alt="Ama session"
              className="about-cohort--image"
              objectFit="cover"
            />
          </div>
          <div className="about-cohort--item--text">
            <h3>About Cohort</h3>
            <p>
              This is an intensive learning phase of the basics/foundations for
              all tracks, it serves as the introduction to the track for
              participants. This phase is for 4weeks, classes will be twice a
              week (Tuesdays &amp; Thursdays 5 - 7 PM). Across all tracks
              participants will learn intensively as a beginner, mentors will be
              on the ground to teach, resources will be shared with the
              participants, assignments will be given as well, and there will be
              an eviction at the end of this phase upon final assessment to
              graduate into the learning phase.
            </p>
            <Button  
                buttonText="Register"
                border="3px solid black"
                handleClick={() => router.push("/mentorship/register")}
                 />
          </div>
         
             
           
        </div>
        <Tracks tracks_details={tracks_details} />
      </div>
    </section>
  );
};

export default About;
