import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";
import FAQs from "../../components/FAQs";
import { FAQ_DATA } from "../../pages/api/feedback";

import FreehandCard from "../../components/FreehandCard";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Bootcamps from "../../components/mentorship/Bootcamps";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import bootcampsData from "../api/bootcamps.json";
import Testimonials from "../../components/Testimonials";
import { strapiService } from "../../services";
import { useRouter } from "next/router";
import VisitYoutube from "../../components/VisitYoutube";

const BootcampPage = ({indexPage}) => {
  const bootcampsHome = bootcampsData.home;
  const router = useRouter();


  return (
    <>
      <Navbar />
      <main>
        <div className="container cta">
          <div className="content">
            <div className="hero_content bootcamp">
              <h1
                dangerouslySetInnerHTML={{ __html: bootcampsHome.hero.title }}
              />
              <p>{bootcampsHome.hero.description}</p>

              <div className="button-container">
                <Button
                  variant={bootcampsHome.hero.buttonType}
                  buttonText={bootcampsHome.hero.buttonText}
                  handleClick={() => {
                    window.location.href = bootcampsHome.hero.buttonLink;
                  }}
                />
              </div>
            </div>

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"493px"}
                  height={"472px"}
                  src={bootcampsHome.hero.image}
                  alt="bootcamp-image"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="bootcamps">
        <div className="container">
          <h2 className="sub-section-title bold">
            {bootcampsHome.currentBootcamps.title}
          </h2>
          <ul className="card card--has-border">
            {bootcampsHome.currentBootcamps.bootcamps.map((bootcamp) => (
              <li className="card-content--has-image" key={bootcamp.id}>
                <div className="card-text">
                  <h3
                    className="sub-section-title"
                    dangerouslySetInnerHTML={{ __html: bootcamp.name }}
                  />
                  <p className="section-description">{bootcamp.description}</p>
                  <Button
                    variant={bootcamp.buttonType}
                    buttonText={bootcamp.buttonText}
                    handleClick={() => {
                      window.location.href = bootcamp.buttonLink;
                    }}
                  />
                </div>
                <div className="card-img">
                  <Image
                    src={bootcamp.image}
                    width={"439px"}
                    height={"283px"}
                    objectFit="contain"
                    alt="bootcamp-img"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Bootcamps />
      <VisitYoutube />
      <div className="mb-small"/>

      <FeaturedMentees />
      <JoinAsMentor />

      <div className="mb-small"/>

      <FAQs data={FAQ_DATA} />

      <div className="mb-small"/>

      <Testimonials
        testimonial_title={indexPage.testimonial_title}
        testimonial_description={indexPage.testimonial_description}
        testimonial_items={indexPage.testimonial_items}
      />
      <div className="mb-small"/>

      <FreehandCard />
      <div className="mb-large"/>
      <Footer />
    </>
  );
};

export default BootcampPage;

export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
