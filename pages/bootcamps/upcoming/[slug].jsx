import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../../components/layouts/Navbar";
import bootcampsData from "../../api/bootcamps.json";
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

const Bootcamp = () => {
  const { query } = useRouter();
  const { slug } = query;
  const bootcamps = bootcampsData.upcoming;
  const bootcamp = bootcamps.find((b) => b.slug === slug);

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

      <section className="analytics">
        <Registration registrationDetails={bootcamp.registrationDetails} />
        <Tracks tracksDetails={bootcamp.tracksDetails} />
      </section>

      <section className="how-it-works">
        <div className="container">
          <div className="how-it-works--content">
            <h1 className="section-title">{bootcamp.howItWorks.title}</h1>
            <div className="schedule-details">
              <div>
                <div>
                  <h5>
                    {bootcamp.howItWorks.scheduleDetails.startDetails.title}
                  </h5>
                  <span>
                    {bootcamp.howItWorks.scheduleDetails.startDetails.date}
                  </span>
                </div>
                <div>
                  <h5>
                    {bootcamp.howItWorks.scheduleDetails.endDetails.title}
                  </h5>
                  <span>
                    {bootcamp.howItWorks.scheduleDetails.endDetails.date}
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <h5>{bootcamp.howItWorks.scheduleDetails.schedule.title}</h5>
                  <span>
                    {bootcamp.howItWorks.scheduleDetails.schedule.date}
                  </span>
                </div>
                <div>
                  <h5>{bootcamp.howItWorks.scheduleDetails.workshop.title}</h5>
                  <span>
                    {bootcamp.howItWorks.scheduleDetails.workshop.date}
                  </span>
                </div>
              </div>
            </div>
            <p>{bootcamp.howItWorks.description}</p>
          </div>
          <div className="how-it-works--image">
            <Image
              src={bootcamp.howItWorks.image}
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
            {bootcamp.whyApply.title}
          </h2>
          <p className="center">{bootcamp.whyApply.description}</p>
        </div>
      </section>

      <Benefits data={bootcamp.benefits} />
      <Gains data={bootcamp.gains} />
      <Curriculum data={bootcamp.curriculum} />
      <Mentors data={bootcamp.mentors} />
      <FAQs data={bootcamp.faqs} />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Bootcamp;
