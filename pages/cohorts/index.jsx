import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import VisitYoutube from "../../components/VisitYoutube";
import CohortSection from "../../components/mentorship/cohorts/Cohorts";

const Cohorts = () => {
  return (
    <>
      <Navbar />
      <CohortSection />
      <VisitYoutube />
      <Footer />
    </>
  );
};

export default Cohorts;
