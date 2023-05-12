import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Footer from "../../../components/layouts/Footer";
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
import { strapiService } from "../../../services";

const Bootcamp = ({ bootcamp }) => {
  if (!bootcamp) {
    return <div>Bootcamp not found</div>;
  }

  return (
    <>
      <Navbar />

      <HeroSection data={bootcamp} />

      <About data={bootcamp} />

      <GoalsDetails data={bootcamp} />

      <Sponsors data={bootcamp} />

      <section className="analytics">
        <Registration data={bootcamp} />
        <Tracks data={bootcamp} />
      </section>

      <Highlights
        title={
          bootcamp.highlight_title
            ? bootcamp.highlight_title
            : "Highlights of the Cohort"
        }
        HIGHLIGHTS_ITEMS={bootcamp.highlight_items_details}
      />

      <Curriculum
        track={{
          curriculum_title: bootcamp.curriculum_title,
          curriculum_items: bootcamp.curriculum_items_details,
        }}
      />
      <Mentors data={bootcamp} />
      <FAQs data={bootcamp.faqs} />
      <Testimonials
        testimonial_title={bootcamp.testimonial_title}
        testimonial_description={bootcamp.testimonial_description}
        testimonial_items={bootcamp.testimonials_details}
      />
      <VisitYoutube />
      <div className="mb-large" />

      <div className="p-20">
        <FreehandCard />
      </div>
      <div className="mb-large" />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const response = await strapiService.getCurrentBootCamp();
  const paths = response.data.map((bootcamp) => {
    return {
      params: {
        slug: bootcamp.attributes.slug,
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
    const response = await strapiService.getCurrentBootCampBySlug(params.slug);
    const data = response.data[0]?.attributes;

    if (data) {
      return {
        props: {
          bootcamp: {
            ...data,
          },
        },
      };
    }
    return {
      props: {
        bootcamp: null,
        notFound: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        bootcamp: null,
        notFound: true,
      },
    };
  }
}

export default Bootcamp;
