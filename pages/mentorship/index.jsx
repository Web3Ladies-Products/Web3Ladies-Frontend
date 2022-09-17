import React from "react";
import Image from "next/image";
// import mentorshipPageData from "./api/mentorship.json";
import mentorshipPageData from '../api/mentorship.json'
// import Button from "../components/buttons/Button";
import Button from "../../components/buttons/Button";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { strapiService } from "../../services";
// import { strapiService } from "../services/strapi.service";

import {
  Bootcamp,
  Cohorts,
  HowItWorks,
  Training,
  WorkAssistance,
  Mentors,
  WhyLearn,
  FeaturedMentees,
  JoinAsMentor,
  MentorshipFAQ,
  Feedback,
  CTACard,
} from "../../components/mentorship";
import Tracks from "../../components/cohorts/Tracks";
import Testimonials from "../../components/Testimonials";
import AboutSection from "../../components/AboutSection";
import DualColorBanner from "../../components/DualColorBanner";
// import Bootcamps from "./bootcamps";

const mentorship = ({ indexPage }) => {
  console.log(indexPage, "index page here bitches");

  const mentorshipPage = mentorshipPageData;

  return (
    <>
      <Navbar />

      <main className="">
        {/*START OF HERO SECTION*/}
        <div className="container cta">
          <div className=" content">
            <div className=" hero_content">
             
              <h1 className="title section-title "  dangerouslySetInnerHTML={{ __html: indexPage.mentorship_title }}>
              </h1>
              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={"Register Now"}
                  handleClick={() => null}
                />
                <Button
                  type={"outline"}
                  buttonText={indexPage.button_two_text}
                  handleClick={() => null}
                />
              </div>
            </div>

            <div className="hero_images">
              <div>
                <Image
                  className="hero-img"
                  width={"492px"}
                  height={"492px"}
                  src="/assets/images/mentorship-hero-img.png"
                  alt="mentorship-img"
                />
                <Image
                  className="hero-img"
                  width={"178px"}
                  height={"58px"}
                  src="/assets/images/eth-img.png"
                  alt="ethereum-logo"
                />
                <Image
                  className="hero-img"
                  width={"166px"}
                  height={"73px"}
                  src="/assets/images/filecoin-img.png"
                  alt="filecoin-logo"
                />
                <Image
                  className="hero-img"
                  width={"187px"}
                  height={"49px"}
                  src="/assets/images/polygon-img.png"
                  alt="polygon-logo"
                />
                <Image
                  className="hero-img"
                  width="100"
                  height="150"
                  layout="fixed"
                  src='/assets/images/web3vector-img.png'
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
      
        {/*END OF HERO SECTION*/}

            {/* SUPPORT SECTION */}
      <section className="support" style={{ paddingTop: "0" }}>
        <div className="container" style={{ paddingTop: "0" }}>
          <h1
            className="support--heading"
            dangerouslySetInnerHTML={{ __html: indexPage.supporters_title }}
          />
          <div className="groups-container">
            {indexPage.supporters_images?.map((supporter) => (
              <div
                className="group-item pointer-cursor"
                key={supporter.name}
                onClick={() => window.open(supporter.website_url, "_blank")}
              >
                <Image
                  className="support-image"
                  width={"165px"}
                  height={"60px"}
                  src={supporter.logo}
                  alt={supporter.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END OF SUPPORT SECTION */}

        {/*START OF About Mentorship */}
        {/* <div className="about-section">
          <div className="container">
            <div className="about--heading">
              <h1>About Mentorship </h1>
              <Image
                className="hero-img"
                width="100"
                height="150"
                src="/assets/images/web3vector-img.png"
                alt="web3ladies-vector"
              />
            </div>
            <div className="about--content">
              <p className="about-text">
                This is a free intensive learning phase of the
                basics/foundations for all tracks, it serves as the introduction
                to the track for participants. This phase is for 4weeks, classes
                will be twice a week (Tuesdays & Thursdays 5 - 7 PM). Across all
                tracks participants will learn intensively as a beginner,
                mentors will be on the ground to teach, resources will be shared
                with the participants, assignments will be given as well, and
                there will be an eviction at the end of this phase upon final
                assessment to graduate into the learning phase.
              </p>
              <div className="introduction--container-cta">
                <Button
                  type={"primary"}
                  buttonText={"Register Now"}
                  handleClick={() => null}
                />
                <Image
                  className="arrow-img"
                  width="67px"
                  height="63px"
                  objectFit="contain"
                  src="/assets/images/arrow-img.png"
                  alt="arrow-vector"
                />
              </div>
            </div>
          </div>
        </div> */}


        {/*START OF ABOUT MENTORSHIP */}
        <AboutSection 
         title='About Mentorship '
         description={` This is a free intensive learning phase of the
         basics/foundations for all tracks, it serves as the introduction
         to the track for participants. This phase is for 4weeks, classes
         will be twice a week (Tuesdays & Thursdays 5 - 7 PM). Across all
         tracks participants will learn intensively as a beginner,
         mentors will be on the ground to teach, resources will be shared
         with the participants, assignments will be given as well, and
         there will be an eviction at the end of this phase upon final
         assessment to graduate into the learning phase.`}
         buttonText="Register Now"
        />
        <div className="criteria-section-wrapper">
          <div className="container">
            <div className="criteria-section">
              <div className="criteria-img-wrap">
                <Image
                  className=""
                  width={"490px"}
                  height={"520px"}
                  objectFit="contain"
                  src="/assets/images/mentorship-criteria-img.png"
                  alt="Criteria image"
                />
              </div>
              <div className="criteria-content">
                <h1> Who is it for? </h1>
                <div>
                  <div>
                    <span>
                      <Image
                        className=""
                        width="17px"
                        height="14px"
                        layout="fixed"
                        src="/assets/images/tick.png"
                        alt=""
                      />
                    </span>
                    <p>
                      A professional looking for deeper knowledge about the
                      impact and applications of blockchain technologies in a
                      business environment
                    </p>
                  </div>
                  <div>
                    <span>
                      <Image
                        className=""
                        width="17px"
                        height="14px"
                        layout="fixed"
                        src="/assets/images/tick.png"
                        alt=""
                      />
                    </span>
                    <p>
                      A professional looking for deeper knowledge about the
                      impact and applications of blockchain technologies in a
                      business environment
                    </p>
                  </div>
                  <div>
                    <span>
                      <Image
                        className=""
                        width="17px"
                        height="14px"
                        layout="fixed"
                        src="/assets/images/tick.png"
                        alt=""
                      />
                    </span>
                    <p>
                      A professional looking for deeper knowledge about the
                      impact and applications of blockchain technologies in a
                      business environment
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    type="outline"
                    buttonText={"Register Now"}
                    handleClick={() => null}
                    color="#7D0BFE"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <HowItWorks />
        <DualColorBanner 
          title='Get hands-on training from the best minds'
          buttonText="Register Now"
          buttonType='outline'
          image={"/assets/images/mentorship-training.png"}
        />
        {/* <Training /> */}
        {/* <Cohorts /> */}
        <Bootcamp />
        <WorkAssistance />
        <Tracks />
        <Mentors />
        <WhyLearn />
        <FeaturedMentees />
        <JoinAsMentor />
        <MentorshipFAQ />
        {/* <Feedback /> */}
        <Testimonials
          testimonial_title={indexPage.testimonial_title}
          testimonial_description={indexPage.testimonial_description}
          testimonial_items={indexPage.testimonial_items}
          hasMaxWidth={true}
        />
        <CTACard />
      </main>

      <Footer />
    </>
  );
};

export default mentorship;

//get home page data
export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
