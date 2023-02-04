import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
import cohortsData from "../../api/cohorts.json";
import HeroSection from "../../../components/cohorts/HeroSection";
import VisitYoutube from "../../../components/VisitYoutube";
import About from "../../../components/cohorts/About";
import Tracks from "../../../components/cohorts/Tracks";
import { strapiService } from "../../../services/strapi.service";
import { FAQ_DATA } from "../../../pages/api/feedback.json";
import FAQs from "../../../components/FAQs";
import FeaturedMentees from "../../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../../components/mentorship/JoinAsMentor";
import FreehandCard from "../../../components/FreehandCard";
import Registration from "../../../components/analytics/Registration";
import Custom404Error from "../../404";
const CurrentCohort = ({cohort}) => {

  if (!cohort) {
    return <Custom404Error/>;
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

      {/* TRACKS SECTION */}
      <Tracks tracks={cohort.tracks} />

      {/* YOUTUBE SECTION */}
      <VisitYoutube />
      <FeaturedMentees />
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

export async function getStaticPaths() {
  const response = await strapiService.getCurrentCohorts();
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
    const response = await strapiService.getCurrentCohortBySlug(params.slug);
    const data = response.data[0]?.attributes;
    console.log(data);

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

export default CurrentCohort;
