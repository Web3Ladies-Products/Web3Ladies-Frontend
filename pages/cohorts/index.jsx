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

const Cohorts = ({ indexPage }) => {
  return (
    <>
      <Navbar />
      <HeroSection heroDetails={indexPage} />
      <CohortSection cohortData={indexPage} />
      <VisitYoutube />
      <FeaturedMentees />
      <JoinAsMentor />
      <div className="faq">
        <FAQs />
      </div>
      <div className="p-20">
        <FreehandCard />
      </div>
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const indexPage = await strapiService.getCohortPageData();
  console.log(indexPage);
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}

export default Cohorts;
