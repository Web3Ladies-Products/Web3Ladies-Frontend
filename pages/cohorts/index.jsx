import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import VisitYoutube from "../../components/VisitYoutube";
import CohortSection from "../../components/mentorship/cohorts/Cohorts";
import HeroSection from "../../components/cohorts/HeroSection";
import FAQs from "../../components/FAQs";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import FreehandCard from "../../components/FreehandCard";
import { strapiService } from "../../services";

const Cohorts = ({ indexPage, freeHandData, joinData, featuredMentees }) => {
  return (
    <>
      <Navbar />
      <HeroSection heroDetails={indexPage} />
      <section className="">
        <div className="container mentorship-bootcamp-header">
          <h1 className="section-title"> Cohorts</h1>
        </div>

        <CohortSection cohortData={indexPage} />
      </section>

      <VisitYoutube />
      <FeaturedMentees featuredMentees={featuredMentees} />
      <JoinAsMentor joinData={joinData} />
      <div className="faq">
        <FAQs />
      </div>
      <div className="p-20">
        <FreehandCard freeHandData={freeHandData} />
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const indexPage = await strapiService.getCohortPageData();
  const freeHandData = await strapiService.getFreeHand();
  const joinData = await strapiService.getJoinAsMentor();
  const featuredMentees = await strapiService.getFeaturedMentee();
  console.log(indexPage);
  return {
    props: {
      indexPage: indexPage.data.attributes,
      freeHandData: freeHandData.data.attributes,
      joinData: joinData.data.attributes,
      featuredMentees: featuredMentees.data.attributes,
    },
  };
}

export default Cohorts;
