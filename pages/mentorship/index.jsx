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
import { useRouter } from "next/router";
const mentorship = ({
  indexPage,
  bootcamps,
  workAssistanceData,
  whyLearnData,
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
                dangerouslySetInnerHTML={{ __html: indexPage.mentorship_title }}
              ></h1>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText={indexPage.button_one_text}
                  handleClick={() => {
                    router.push(indexPage.button_one_link);
                  }}
                />
                <Button
                  variant={"outline"}
                  buttonText={indexPage.button_two_text}
                  handleClick={() => {
                    router.push("/sponsorship");
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

      <Supporters indexPage={indexPage} />

      {/*ABOUT MENTORSHIP */}
      <AboutSection
        title={indexPage.about_title}
        description={indexPage.about_desciption}
        buttonText={indexPage.about_button_text}
        handleClick={() => {
          router.push(
            indexPage.about_button_link
              ? indexPage.about_button_link
              : "/mentorship/register"
          );
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
              <h1> {indexPage.criteria_title} </h1>
              {indexPage.criteria_data.map((item, index) => {
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
                  type="primary-inverse"
                  buttonText={indexPage.criteria_button_text}
                  handleClick={() => {
                    router.push(
                      indexPage.criteria_button_link
                        ? indexPage.criteria_button_link
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

      {/* <HowItWorks /> */}

      <DualColorBanner
        title={indexPage.how_it_works_title}
        buttonText={indexPage.how_it_works_button_text}
        handleClick={() =>
          router.push(
            indexPage.how_it_works_button_link
              ? indexPage.how_it_works_button_link
              : "/mentorship/register"
          )
        }
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
        <Bootcamps bootcamp={bootcamps} />
      </section>

      <CohortSection isAccordion={true} />

      <WorkAssistance workAssistanceData={workAssistanceData} />
      <Tracks tracks={indexPage.tracks_data.tracks} />

      <Mentors />
      <WhyLearn whyLearnData={whyLearnData} />
      <FeaturedMentees />
      <JoinAsMentor />

      <FAQs data={indexPage.faq_data} title={indexPage.faq_title} />

      <Testimonials
        testimonial_title={indexPage.testimonial_title}
        testimonial_description={indexPage.testimonial_description}
        testimonial_items={indexPage.testimonial_items}
      />

      <div className="tracks__spacing">
        <FreehandCard />
      </div>

      <Footer />
    </>
  );
};

export default mentorship;

//get home page data
export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  const bootcamps = await strapiService.getBootCampPageData();
  const whyLearnData = await strapiService.getWhyLearn();
  const workAssistanceData = await strapiService.getWorkAssistance();
  return {
    props: {
      indexPage: indexPage.data.attributes,
      bootcamps: bootcamps.data.attributes,
      workAssistanceData: workAssistanceData.data.attributes,
      whyLearnData: whyLearnData.data.attributes,
    },
  };
}
