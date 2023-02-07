import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Button from "../../../components/buttons/Button";
import Navbar from "../../../components/layouts/Navbar";
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
import { strapiService } from "../../../services/strapi.service";
import FreehandCard from "../../../components/FreehandCard";
import CustomError from "../../_error";

const Bootcamp = ({ bootcamp }) => {
  if (!bootcamp) {
    return <CustomError />;
  }

  return (
    <>
      <Navbar />

      <HeroSection bootcamp={bootcamp} />

      <About bootcamp={bootcamp} />

      <GoalsDetails bootcamp={bootcamp} />

      <Sponsors bootcamp={bootcamp} />

      <Registration bootcamp={bootcamp} />

      <section className="summary">
        <div className="container">
          <h2 className="sub-section-title center bold">
            {bootcamp.summary_title}
          </h2>
          <p className="center">{bootcamp.summary_description}</p>
        </div>
      </section>

      <Tracks bootcamp={bootcamp} />

      <section className="mentee-experience">
        <div className="container">
          <MenteeExperience bootcamp={bootcamp} />
        </div>
      </section>

      <TestimonialsCarousel bootcamp={bootcamp} />

      <ProjectsDone bootcamp={bootcamp} />

      <Highlights title={"Highlights of the Cohort"} bootcamp={bootcamp} />

      <Gallery bootcamp={bootcamp} />

      <VisitYoutube />
      <div className="mb-large" />
      <div className="p-20">
        <FreehandCard />
      </div>

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const response = await strapiService.getPastBootCamps();
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
    const response = await strapiService.getPastBootCampBySlug(params.slug);
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
