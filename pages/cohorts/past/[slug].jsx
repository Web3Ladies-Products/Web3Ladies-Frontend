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
import { strapiService } from "../../../services";
import { FAQ_DATA } from "../../../pages/api/feedback.json";
import FAQs from "../../../components/FAQs";
import FeaturedMentees from "../../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../../components/mentorship/JoinAsMentor";
import FreehandCard from "../../../components/FreehandCard";
const PastCohort = ({cohort}) => {
  // const { query } = useRouter();
  // const { slug } = query;
  // const cohorts = cohortsData.past;
  // const cohort = cohorts.find((b) => b.slug === slug);
  console.log(cohort)

  if (!cohort) {
    return <p>Cohort not found</p>;
  }
  const heroDetails = {
    hero_title: cohort?.hero_title,
    hero_description: cohort?.hero_description,
    hero_button_text: cohort?.hero_button_text,
    hero_button_link: cohort?.hero_button_link,
    hero_button_type: cohort?.hero_button_type,
    hero_image: cohort?.hero_image,
  }

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <HeroSection heroDetails={heroDetails} badgeText={"past"} />

      {/* SUMMARY SECTION */}
      <Summary />

      {/* MENTEES SECTION */}
      <section className="mentee-experience">
        <div className="container">
          <MenteeExperience mentees_details={cohort.mentees_details} />
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <TestimonialsCarousel  testimonial_items={cohort. testimonial_items} />

      {/* PROJECTS SECTION */}
      <ProjectsDone projects_done_details={cohort.projects_done_details} />

      {/* HIGHLIGHTS SECTION */}
      <Highlights
        title={"Highlights of the Cohort"}
        highlight_items_details={cohort.highlight_items_details}
      />

      {/* END OF HIGHLIGHTS SECTION */}
      <Gallery gallery_details={cohort.gallery_details} />

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

export async function getStaticPaths() {
  const response = await strapiService.getPastCohorts();
  const paths = response.data.map((cohort) => {
  //  console.log(data)
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
  //  console.log(data)

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



export default PastCohort;
