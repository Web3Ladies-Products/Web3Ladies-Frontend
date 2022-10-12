import React from "react";
import Image from "next/image";
import Button from "../../components/buttons/Button";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { strapiService } from "../../services";
import { FAQ_DATA } from "../../pages/api/feedback";
import Tracks from "../../components/cohorts/Tracks";
import Testimonials from "../../components/Testimonials";
import AboutSection from "../../components/AboutSection";
import DualColorBanner from "../../components/DualColorBanner";
import FAQs from "../../components/FAQs";
import Supporters from "../../components/Supporters";
import HowItWorks from "../../components/mentorship/how-it-works/HowItWorks";
import WorkAssistance from "../../components/mentorship/WorkAssistance";
import Mentors from "../../components/mentorship/Mentors";
import WhyLearn from "../../components/mentorship/WhyLearn";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import CTACard from "../../components/CTACard";
import Bootcamps from "../../components/mentorship/Bootcamps";
import CohortSection from "../../components/mentorship/cohorts/Cohorts";
import { useRouter } from "next/router";

const mentorship = ({ indexPage }) => {
  const router = useRouter();

  React.useEffect(() => {
    router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />

      <main className="">
        {/*START OF HERO SECTION*/}
        <div className="container cta">
          <div className=" content">
            <div className=" hero_content">
              <h1
                className="title section-title "
                dangerouslySetInnerHTML={{ __html: indexPage.mentorship_title }}
              ></h1>
              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={indexPage.button_one_text}
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
                  src="/assets/images/web3vector-img.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
        {/*END OF HERO SECTION*/}
      </main>

      <Supporters indexPage={indexPage} />

      {/*ABOUT MENTORSHIP */}
      <AboutSection
        title="About Mentorship "
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
        handleClick={() => null}
      />

      {/* Criteria for Mentorship  */}
      <section className="criteria-section-wrapper">
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

              <div className="content">
                <Image
                  className="check"
                  width={"28px"}
                  height={"24px"}
                  objectFit="contain"
                  src="/assets/images/Checkmark.png"
                  alt="check"
                />
                <p>
                  A professional looking for deeper knowledge about the impact
                  and applications of blockchain technologies in a business
                  environment
                </p>
              </div>

              <div className="content">
                <Image
                  className="check"
                  width={"28px"}
                  height={"24px"}
                  objectFit="contain"
                  src="/assets/images/Checkmark.png"
                  alt="check"
                />
                <p>
                  A professional looking for deeper knowledge about the impact
                  and applications of blockchain technologies in a business
                  environment
                </p>
              </div>

              <div className="content">
                <Image
                  className="check"
                  width={"28px"}
                  height={"24px"}
                  objectFit="contain"
                  src="/assets/images/Checkmark.png"
                  alt="check"
                />
                <p>
                  A professional looking for deeper knowledge about the impact
                  and applications of blockchain technologies in a business
                  environment
                </p>
              </div>

              <div>
                <Button
                  type="primary-inverse"
                  buttonText={"Register Now"}
                  handleClick={() => {}}
                />
              </div>

              <Image
                className=""
                width={"160px"}
                height={"125px"}
                objectFit="contain"
                src="/assets/images/box-register-img.png"
                alt="box-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <HowItWorks /> */}

      <DualColorBanner
        title="Get hands-on training from the best minds"
        buttonText="Register Now"
        buttonType="outline"
        image={"/assets/images/mentorship-training.png"}
      />

      <section className="mentorship-bootcamp-section">
        <div className="container mentorship-bootcamp-header">
          <h1 className="section-title"> Bootcamps</h1>
          <div>
            <Image
              className="hero-img"
              width="147px"
              height="147px"
              layout="intrinsic"
              objectFit="contain"
              src="/assets/images/mentorship-bootcamp-star.png"
              alt="arrow-vector"
            />
          </div>
        </div>
        <Bootcamps />
      </section>

      <CohortSection isAccordion={true} />

      <WorkAssistance />
      <Tracks />
      <Mentors />
      <WhyLearn />
      <FeaturedMentees />
      <JoinAsMentor />
      <FAQs data={FAQ_DATA} />

      <Testimonials
        testimonial_title={indexPage.testimonial_title}
        testimonial_description={indexPage.testimonial_description}
        testimonial_items={indexPage.testimonial_items}
      />

      <CTACard />

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
