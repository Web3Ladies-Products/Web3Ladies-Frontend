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
import Badge from "../../../components/Badge";
import ArrowCircle from "../../../components/icons/ArrowCircle";

const Bootcamp = () => {
  const { query } = useRouter();
  const { slug } = query;
  const bootcamps = bootcampsData.past;
  const bootcamp = bootcamps.find((b) => b.slug === slug);

  const CATEGORY_COLOR = {
    "blockchain-development": "#7D0BFE",
    "web-development": "#FE471F",
    "product-design": "#2652EF",
    "product-management": "#00B876",
  };

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

      <section className="testimonials">
        <div className="container">
          <h2 className="sub-section-title bold">Testimonials</h2>
          <div className="carousel">
            {bootcamp.testimonials.map((testimonial) => (
              <div
                className="carousel-item card card--has-border"
                key={testimonial.name}
              >
                <div className="testimonial--header">
                  <div className="testimonial--header-image">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-text">{testimonial.role}</h5>
                    <span className="testimonial-name">{testimonial.name}</span>
                  </div>
                </div>
                <div className="testimonial--body">
                  <p className="testimonial-text">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-done">
        <div className="container">
          <div className="projects-done--heading">
            <h1 className="sub-section-title bold">Projects Done</h1>
            <Button
              type={"outline"}
              buttonText={"View all projects"}
              handleClick={() => null}
            />
          </div>
          <ul className="projects-done--container">
            {bootcamp.projectsDone.map((project) => (
              <li
                key={project.title}
                className="projects-done--item card card__black d-flex flex-column justify-content-between"
              >
                <div className="project-header d-flex align-items-center">
                  <div className="project-header--image">
                    <Image
                      src={project.imageThumbnail}
                      alt={project.title}
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="title">
                    <h3>{project.projectName}</h3>
                  </div>
                </div>
                <div className="about-project">
                  <h5>{project.aboutTitle}</h5>
                  <p>{project.aboutDescription}</p>
                </div>
                <div className="project-footer">
                  <div className="project-footer--cta">
                    <Button
                      type={"clear"}
                      buttonText={"View project"}
                      handleClick={() => null}
                      hasIcon
                    >
                      <span className="icon-right d-flex align-items-center">
                        <ArrowCircle fillColor={"#FF9EDB"} />
                      </span>
                    </Button>
                  </div>
                  <div className="project-category">
                    <Badge
                      badgeText={project.category}
                      badgeBackground={CATEGORY_COLOR[project.id]}
                      handleClick={() => null}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Highlights
        title={"Highlights of the Cohort"}
        HIGHLIGHTS_ITEMS={bootcamp.HIGHLIGHTS_ITEMS}
      />

      <Gallery galleryItems={bootcamp.gallery} />

      <Footer />
    </>
  );
};

export default Bootcamp;
