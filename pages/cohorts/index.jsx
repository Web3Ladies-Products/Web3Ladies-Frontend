import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import VisitYoutube from "../../components/VisitYoutube";
import CohortSection from "../../components/mentorship/cohorts/Cohorts";
import HeroSection from "../../components/cohorts/HeroSection";
import cohortsData from "../api/cohorts.json";
import { FAQ_DATA } from "../../pages/api/feedback.json";
import FAQs from "../../components/FAQs";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import FreehandCard from "../../components/FreehandCard";
import { strapiService } from "../../services";


const Cohorts = ({indexPage}) => {
  const heroDetails = indexPage;
  return (
    <>
      <Navbar />
      <HeroSection heroDetails={heroDetails} />
      <CohortSection />
      <VisitYoutube />
      <FeaturedMentees/>
      <JoinAsMentor />
      <div className="faq">
      <FAQs data={FAQ_DATA} />
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
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}


export default Cohorts;
