import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import HeroSection from "../../../components/cohorts/HeroSection";
import Tracks from "../../../components/cohorts/Tracks";
import VisitYoutube from "../../../components/VisitYoutube";
import About from "../../../components/cohorts/About";
import { strapiService } from "../../../services";
import FAQs from "../../../components/FAQs";
import FeaturedMentees from "../../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../../components/mentorship/JoinAsMentor";
import FreehandCard from "../../../components/FreehandCard";
import Registration from "../../../components/analytics/Registration";
import Custom404Error from "../../404";
const UpcomingCohort = ({ cohort }) => {
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
  };

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection heroDetails={heroDetails} badgeText={"ongoing"} />

      {/* ABOUT MENTEES SECTION */}
      <About tracks_details={cohort.tracks_details} />

      {/* registeration details */}
      <Registration registrationDetails={cohort.registrationDetails} />
      {/* TRACKS SECTION */}
      <Tracks tracks={cohort.tracks} />

      {/* YOUTUBE SECTION */}
      <VisitYoutube />
      <FeaturedMentees />
      <JoinAsMentor />
      <div className="faq">
        <FAQs  />
      </div>
      <div className="p-20">
        <FreehandCard />
      </div>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const response = await strapiService.getUpcomingCohorts();
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
    const response = await strapiService.getUpcomingCohortBySlug(params.slug);
    const data = response.data[0]?.attributes;

    if (data) {
      return {
        props: {
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

export default UpcomingCohort;
