import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import VisitYoutube from "../../components/VisitYoutube";
import CohortSection from "../../components/mentorship/cohorts/Cohorts";
import HeroSection from "../../components/cohorts/HeroSection";
import cohortsData from "../api/cohorts.json";

const Cohorts = () => {
  const heroDetails = cohortsData.home.hero;
  return (
    <>
      <Navbar />
      <HeroSection heroDetails={heroDetails} />
      <CohortSection />
      <VisitYoutube />
      
      <Footer />
    </>
  );
};

export default Cohorts;
