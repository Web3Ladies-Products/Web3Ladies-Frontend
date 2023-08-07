import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import Gallery from "../../../components/Gallery";
import Custom404Error from "../../404";
import HeroSection from "../../../components/cohorts/HeroSection";
import TestimonialsCarousel from "../../../components/TestimonialsCarousel";
import ProjectsDone from "../../../components/ProjectsDone";
import Highlights from "../../../components/Highlights";
import MenteeExperience from "../../../components/MenteeExperience";
import VisitYoutube from "../../../components/VisitYoutube";
import Summary from "../../../components/cohorts/Summary";
import { strapiService } from "../../../services";

import FAQs from "../../../components/FAQs";
import FeaturedMentees from "../../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../../components/mentorship/JoinAsMentor";
import FreehandCard from "../../../components/FreehandCard";
const PastCohort = ({ cohort, freeHandData, joinData, featuredMentees }) => {
  if (!cohort) {
    return <Custom404Error />;
  }
  const heroDetails = {
    hero_title: cohort?.hero_title,
    hero_description: cohort?.hero_description,
    hero_button_text: cohort?.hero_button_text,
    hero_button_link: cohort?.hero_button_link,
    hero_button_type: cohort?.hero_button_type,
    hero_image: cohort?.hero_image,
    cohort_number: cohort?.cohort_number,
  };

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection heroDetails={heroDetails} badgeText={"past"} />

      {/* SUMMARY SECTION */}
      <section className="mentee-experience">
        <div className="container">
          <Summary cohortSummary={cohort.summary} />
        </div>
      </section>
      {/* MENTEES SECTION */}
      <section className="mentee-experience">
        <div className="container">
          <MenteeExperience past_bootcamps_mentees_details={cohort.past_bootcamps_mentees_details} />
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <TestimonialsCarousel testimonials_details={cohort.testimonial_items} />

      {/* PROJECTS SECTION */}
      <ProjectsDone data={cohort.projects_done_details} />

      {/* HIGHLIGHTS SECTION */}
      <Highlights
        title={"Highlights of the Cohort"}
        HIGHLIGHTS_ITEMS={cohort.highlight_items_details}
      />

      {/* END OF HIGHLIGHTS SECTION */}
      <Gallery data={cohort.gallery_details} />

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

export async function getStaticPaths() {
  const response = await strapiService.getPastCohorts();
  const paths = response.data.map((cohort) => {
    return {
      params: {
        slug: cohort.attributes.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await strapiService.getPastCohortBySlug(params.slug);
    const data = response.data[0]?.attributes;
    const freeHandData = await strapiService.getFreeHand();
    const joinData = await strapiService.getJoinAsMentor();
    const featuredMentees = await strapiService.getFeaturedMentee();
    if (data) {
      return {
        props: {
          freeHandData: freeHandData.data.attributes,
          joinData: joinData.data.attributes,
          featuredMentees: featuredMentees.data.attributes,
          cohort: {
            ...data,
          },
        },
      };
    }
    return {
      props: {
        cohort: null,
        notFound: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        cohort: null,
        notFound: true,
      },
    };
  }
}

export default PastCohort;
