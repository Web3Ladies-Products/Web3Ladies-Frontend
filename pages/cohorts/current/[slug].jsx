import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import cohortsData from "../../api/cohorts.json";
import HeroSection from "../../../components/cohorts/HeroSection";
import VisitYoutube from "../../../components/VisitYoutube";
import About from "../../../components/cohorts/About";
import Tracks from "../../../components/cohorts/Tracks";

const CurrentCohort = () => {
  const { query } = useRouter();
  const { slug } = query;
  const cohorts = cohortsData.current;
  const cohort = cohorts.find((b) => b.slug === slug);

  if (!cohort) {
    return <p>Cohort not found</p>;
  }

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection heroDetails={cohort.hero} badgeText={"ongoing"} />

      {/* ABOUT MENTEES SECTION */}
      <About tracksDetails={cohort.tracksDetails} />

      {/* TRACKS SECTION */}
      <Tracks />

      {/* YOUTUBE SECTION */}
      <VisitYoutube />

      <Footer />
    </>
  );
};

export default CurrentCohort;
