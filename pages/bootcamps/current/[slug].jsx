import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import bootcampsData from "../../api/bootcamps.json";
import Registration from "../../../components/analytics/Registration";
import Tracks from "../../../components/analytics/Tracks";
import GoalsDetails from "../../../components/bootcamps/Goals";
import HeroSection from "../../../components/bootcamps/HeroSection";
import About from "../../../components/bootcamps/About";
import Sponsors from "../../../components/bootcamps/Sponsors";
import Curriculum from "../../../components/Curriculum";
import Mentors from "../../../components/Mentors";
import Highlights from "../../../components/Highlights";
import FAQs from "../../../components/FAQs";
import Testimonials from "../../../components/Testimonials";
import VisitYoutube from "../../../components/VisitYoutube";
import FreehandCard from "../../../components/FreehandCard";

const Bootcamp = () => {
  const { query } = useRouter();
  const { slug } = query;
  const bootcamps = bootcampsData.current;
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

      <section className="analytics">
        <Registration registrationDetails={bootcamp.registrationDetails} />
        <Tracks tracksDetails={bootcamp.tracksDetails} />
      </section>

      <Highlights
        title={"Highlights of the Cohort"}
        HIGHLIGHTS_ITEMS={bootcamp.HIGHLIGHTS_ITEMS}
      />

      <Curriculum data={bootcamp.curriculum} />
      <Mentors data={bootcamp.mentors} />

      <FAQs data={bootcamp.faqs} />

      <Testimonials
        // testimonial_title={bootcamp.testimonial_title}
        // testimonial_description={bootcamp.testimonial_description}
        // testimonial_items={bootcamp.testimonial_items}
      />
      <VisitYoutube />
      <div className="mb-large"/>

      <div className="p-20">
        <FreehandCard />
      </div>
      <div className="mb-large"/>


      <Footer />
    </>
  );
};

export default Bootcamp;
