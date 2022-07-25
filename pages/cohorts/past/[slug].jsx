import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import Gallery from "../../../components/Gallery";
import cohortsData from "../../api/cohorts.json";
import HeroSection from "../../../components/cohorts/HeroSection";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel";
import ProjectsDone from "../../../components/ProjectsDone";
import Highlights from "../../../components/Highlights";
import MenteeExperience from "../../../components/MenteeExperience";
import VisitYoutube from "../../../components/VisitYoutube";
import Summary from "../../../components/cohorts/Summary";

const PastCohort = () => {
  const { query } = useRouter();
  const { slug } = query;
  const cohorts = cohortsData.past;
  const cohort = cohorts.find((b) => b.slug === slug);

  if (!cohort) {
    return <p>Cohort not found</p>;
  }

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection heroDetails={cohort.hero} badgeText={"past"} />

      {/* SUMMARY SECTION */}
      <Summary />

      {/* MENTEES SECTION */}
      <section className="mentee-experience">
        <div className="container">
          <MenteeExperience menteeDetails={cohort.mentees} />
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <TestimonialsCarousel testimonials={cohort.testimonials} />

      {/* PROJECTS SECTION */}
      <ProjectsDone projectsDone={cohort.projectsDone} />

      {/* HIGHLIGHTS SECTION */}
      <Highlights
        title={"Highlights of the Cohort"}
        HIGHLIGHTS_ITEMS={cohort.HIGHLIGHTS_ITEMS}
      />

      {/* END OF HIGHLIGHTS SECTION */}
      <Gallery galleryItems={cohort.gallery} />

      <VisitYoutube />

      <Footer />
    </>
  );
};

export default PastCohort;
