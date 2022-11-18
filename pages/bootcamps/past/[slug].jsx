import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../components/buttons/Button";
import Navbar from "../../../components/layouts/Navbar";
import bootcampsData from "../../api/bootcamps.json";
import Registration from "../../../components/analytics/Registration";
import Tracks from "../../../components/analytics/Tracks";
import GoalsDetails from "../../../components/bootcamps/Goals";
import HeroSection from "../../../components/bootcamps/HeroSection";
import About from "../../../components/bootcamps/About";
import Sponsors from "../../../components/bootcamps/Sponsors";
import Footer from "../../../components/layouts/Footer";
import MenteeExperience from "../../../components/MenteeExperience";
import Highlights from "../../../components/Highlights";
import Gallery from "../../../components/Gallery";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel";
import ProjectsDone from "../../../components/ProjectsDone";
import VisitYoutube from "../../../components/VisitYoutube";
import FreehandCard from "../../../components/FreehandCard";

const Bootcamp = () => {
  const { query } = useRouter();
  const { slug } = query;
  const bootcamps = bootcampsData.past;
  const bootcamp = bootcamps.find((b) => b.slug === slug);

  if (!bootcamp) {
    return <div>Bootcamp not found</div>;
  }

  return (
    <>
      <Navbar />

      <HeroSection heroDetails={bootcamp.hero} />

      <About aboutDetails={bootcamp.about} />

      <GoalsDetails goalsDetails={bootcamp.goals} />

      <Sponsors sponsorsDetails={bootcamp.sponsors} />

      <Registration registrationDetails={bootcamp.registrationDetails} />

      <section className="summary">
        <div className="container">
          <h2 className="sub-section-title center bold">
            {bootcamp.summary.title}
          </h2>
          <p className="center">{bootcamp.summary.description}</p>
        </div>
      </section>

      <Tracks tracksDetails={bootcamp.tracksDetails} />

      <section className="mentee-experience">
        <div className="container">
          <MenteeExperience menteeDetails={bootcamp.mentees} />
        </div>
      </section>

      <TestimonialsCarousel testimonials={bootcamp.testimonials} />

      <ProjectsDone projectsDone={bootcamp.projectsDone} />

      <Highlights
        title={"Highlights of the Cohort"}
        HIGHLIGHTS_ITEMS={bootcamp.HIGHLIGHTS_ITEMS}
      />

      <Gallery galleryItems={bootcamp.gallery} />

      <VisitYoutube />
      <div className="mb-large"/>
      <div className="p-20">
        <FreehandCard />
      </div>

      <Footer />
    </>
  );
};

export default Bootcamp;
