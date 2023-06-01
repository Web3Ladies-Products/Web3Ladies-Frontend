import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import Registration from "../../../components/analytics/Registration";
import Tracks from "../../../components/analytics/Tracks";
import GoalsDetails from "../../../components/bootcamps/Goals";
import HeroSection from "../../../components/bootcamps/HeroSection";
import About from "../../../components/bootcamps/About";
import Sponsors from "../../../components/bootcamps/Sponsors";
import Footer from "../../../components/layouts/Footer";
import Benefits from "../../../components/BenefitsSection";
import Gains from "../../../components/Gains";
import Curriculum from "../../../components/Curriculum";
import Mentors from "../../../components/Mentors";
import FAQs from "../../../components/FAQs";
import Testimonials from "../../../components/Testimonials";
import Image from "next/image";
import FreehandCard from "../../../components/FreehandCard";
import { strapiService } from "../../../services";

const Bootcamp = ({ bootcamp, freeHandData }) => {
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

      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works--content">
            <h1 className="section-title">{bootcamp.how_it_works_title}</h1>
            <div className="schedule-details">
              <div>
                {bootcamp.how_it_works_schedule_details.map((item) => (
                  <div key={item.title}>
                    <h5>{item.title}</h5>
                    <span>{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
            <p>{bootcamp.how_it_works_description}</p>
          </div>
          <div className="how-it-works--image">
            <Image
              src={bootcamp.how_it_works_image}
              className="bootcamp-image"
              width={"501px"}
              height={"501px"}
              alt="bootcamp-image"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      <section className="summary">
        <div className="container">
          <h2 className="sub-section-title center bold">
            {bootcamp.why_apply_title}
          </h2>
          <p className="center">{bootcamp.why_apply_description}</p>
        </div>
      </section>

      <Benefits track={bootcamp} />
      <Gains track={bootcamp} />
      <Curriculum data={bootcamp} />
      <Mentors data={bootcamp} />
      <FAQs bootcamp={bootcamp} />
      <Testimonials
        testimonial_title={bootcamp.testimonial_title}
        testimonial_description={bootcamp.testimonial_description}
        testimonial_items={bootcamp.testimonials_details}
      />
      <div className="mb-large" />
      <div className="p-20">
        <FreehandCard freeHandData={freeHandData} />
      </div>
      <div className="mb-large" />
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const response = await strapiService.getUpcomingBootCamps();
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
    const response = await strapiService.getUpcomingBootCampsBySlug(
      params.slug
    );
    const data = response.data[0]?.attributes;
    const freeHandData = await strapiService.getFreeHand();

    if (data) {
      return {
        props: {
          freeHandData: freeHandData.data.attributes,
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
