import React from "react";
import Image from "next/image";
import Button from "../../components/buttons/Button";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import { strapiService } from "../../services";
import Tracks from "../../components/cohorts/Tracks";
import Testimonials from "../../components/Testimonials";
import AboutSection from "../../components/AboutSection";
import DualColorBanner from "../../components/DualColorBanner";
import FAQs from "../../components/FAQs";
import Supporters from "../../components/Supporters";
import WorkAssistance from "../../components/mentorship/WorkAssistance";
import Mentors from "../../components/mentorship/Mentors";
import WhyLearn from "../../components/mentorship/WhyLearn";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import Bootcamps from "../../components/mentorship/Bootcamps";
import CohortSection from "../../components/mentorship/cohorts/Cohorts";
import FreehandCard from "../../components/FreehandCard";
import HowItWorks from "../../components/mentorship/how-it-works/HowItWorks";
import { useRouter } from "next/router";
const mentorship = ({
  mentorshipPage,
  bootcamps,
  workAssistanceData,
  whyLearnData,
  freeHandData,
  joinData,
  featuredMentees,
}) => {
  const router = useRouter();
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
                dangerouslySetInnerHTML={{ __html: mentorshipPage.hero_title }}
              ></h1>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText={mentorshipPage.hero_button_text_one}
                  handleClick={() => {
                    router.push(mentorshipPage.hero_button_link_one);
                  }}
                />
                <Button
                  variant={"outline"}
                  buttonText={mentorshipPage.hero_button_text_two}
                  handleClick={() => {
                    router.push(menuPage.hero_button_link_two);
                  }}
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
      {/*SUPPORTERS SECTION*/}
      {/*to be change to mentorshipPage not indexPage*/}
      <Supporters indexPage={mentorshipPage} />
      {/*ABOUT MENTORSHIP */}
      <AboutSection
        title={mentorshipPage.about_title}
        description={mentorshipPage.about_description}
        buttonText={mentorshipPage.about_button_text}
        handleClick={() => {
          router.push(mentorshipPage.about_button_link);
        }}
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
              <h1> {mentorshipPage.cta_title} </h1>
              {mentorshipPage.cta_data &&
                mentorshipPage.cta_data.map((item, index) => {
                  return (
                    <div className="content" key={item.id}>
                      <Image
                        className="check"
                        width={"28px"}
                        height={"24px"}
                        objectFit="contain"
                        src={item.image_url}
                        alt="check"
                      />
                      <p>{item.content}</p>
                    </div>
                  );
                })}

              <div>
                <Button
                  variant={"primary-inverse"}
                  buttonText={mentorshipPage.cta_button_text}
                  handleClick={() => {
                    router.push(
                      mentorshipPage.cta_button_link
                        ? mentorshipPage.cta_button_link
                        : "/mentorship/register"
                    );
                  }}
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
      <main>
        <HowItWorks data={mentorshipPage.how_it_works_items} />
      </main>
      <DualColorBanner
        title={mentorshipPage.hands_on_title}
        buttonText={mentorshipPage.hands_on_button_text}
        handleClick={() => router.push(mentorshipPage.hands_on_button_link)}
        buttonType="outline"
        image={mentorshipPage.hands_on_image}
      />

      <section className="mentorship-bootcamp-section">
        <div className="container mentorship-bootcamp-header">
          <h1 className="section-title"> Cohorts</h1>
        </div>
        <CohortSection isAccordion={true} />
      </section>

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
        <Bootcamps bootcamp={bootcamps} />
      </section>

      <WorkAssistance workAssistanceData={workAssistanceData} />
      <Tracks tracks={mentorshipPage.track_details} />

      <Mentors />
      <WhyLearn whyLearnData={whyLearnData} />
      <FeaturedMentees featuredMentees={featuredMentees} />
      <JoinAsMentor joinData={joinData} />
      <FAQs
        data={mentorshipPage.faq_details}
        title={mentorshipPage.faq_title}
      />
      {/* to be change to mentorshipPage not indexPage */}
      <Testimonials
        testimonial_title={mentorshipPage.testimonial_title}
        testimonial_description={mentorshipPage.testimonial_description}
        testimonial_items={mentorshipPage.testimonial_items}
      />
      <div className="tracks__spacing">
        <FreehandCard freeHandData={freeHandData} />
      </div>
      <Footer />
    </>
  );
};

export default mentorship;

//get home page data
export async function getStaticProps() {
  const mentorshipPage = await strapiService.getMentorshipPageData();
  const bootcamps = await strapiService.getBootCampPageData();
  const whyLearnData = await strapiService.getWhyLearn();
  const workAssistanceData = await strapiService.getWorkAssistance();
  const freeHandData = await strapiService.getFreeHand();
  const joinData = await strapiService.getJoinAsMentor();
  const featuredMentees = await strapiService.getFeaturedMentee();
  return {
    props: {
      mentorshipPage: mentorshipPage.data.attributes,
      bootcamps: bootcamps.data.attributes,
      workAssistanceData: workAssistanceData.data.attributes,
      whyLearnData: whyLearnData.data.attributes,
      freeHandData: freeHandData.data.attributes,
      joinData: joinData.data.attributes,
      featuredMentees: featuredMentees.data.attributes,
    },
  };
}
