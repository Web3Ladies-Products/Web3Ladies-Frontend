import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";
import FAQs from "../../components/FAQs";
import FreehandCard from "../../components/FreehandCard";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Bootcamps from "../../components/mentorship/Bootcamps";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import Testimonials from "../../components/Testimonials";
import { strapiService } from "../../services";
import VisitYoutube from "../../components/VisitYoutube";

const BootcampPage = ({
  bootCamp,
  freeHandData,
  joinData,
  featuredMentees,
}) => {
  return (
    <>
      <Navbar />
      <main>
        <div className="container cta">
          <div className="content">
            <div className="hero_content bootcamp">
              <h1 dangerouslySetInnerHTML={{ __html: bootCamp.hero_title }} />
              <p>{bootCamp.hero_description}</p>

              <div className="button-container">
                <Button
                  variant={bootCamp.hero_button_type}
                  buttonText={bootCamp.hero_button_text}
                  handleClick={() => {
                    window.location.href = bootCamp.hero_button_link;
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
                  src={bootCamp.hero_image}
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
            {bootCamp.current_bootcamps_title}
          </h2>
          <ul className="card card--has-border">
            {bootCamp.current_bootcamps_details.map((bootcamp) => (
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
      <Bootcamps bootcamp={bootCamp} />

      <section className="bootcamps">
        <div className="container">
          <h2 className="sub-section-title bold">
            {bootCamp.upcoming_bootcamps_title}
          </h2>
          <ul className="card card--has-border">
            {bootCamp.upcoming_bootcamps_details.map((bootcamp) => (
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

      <VisitYoutube />
      <div className="mb-small" />

      <FeaturedMentees featuredMentees={featuredMentees} />
      <JoinAsMentor joinData={joinData} />

      <div className="mb-small" />

      <FAQs />

      <div className="mb-small" />
      {bootCamp?.bootcamp_testimonial_title &&
        bootCamp?.bootcamp_testimonial_description &&
        bootCamp?.bootcamp_testimonial_items && (
          <Testimonials
            testimonial_title={bootCamp?.testimonial_title}
            testimonial_description={bootCamp?.testimonial_description}
            testimonial_items={bootCamp?.testimonial_items}
            hasMaxWidth={true}
          />
        )}
      <div className="mb-small" />
      <div className="p-20">
        <FreehandCard freeHandData={freeHandData} />
      </div>
      <div className="mb-large" />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const bootCamp = await strapiService.getBootCampPageData();
  const freeHandData = await strapiService.getFreeHand();
  const joinData = await strapiService.getJoinAsMentor();
  const featuredMentees = await strapiService.getFeaturedMentee();
  return {
    props: {
      bootCamp: bootCamp.data.attributes,
      freeHandData: freeHandData.data.attributes,
      joinData: joinData.data.attributes,
      featuredMentees: featuredMentees.data.attributes,
    },
  };
}

export default BootcampPage;
