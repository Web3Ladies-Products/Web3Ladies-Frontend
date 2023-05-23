import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Image from "next/image";
import Footer from "../../components/layouts/Footer";
import Button from "../../components/buttons/Button";
import FreehandCard from "../../components/FreehandCard";
import opportunities from "../../pages/api/contribution.json";
import { strapiService } from "../../services";

const Contribution = ({ contributionData, freeHandData }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}

      <section>
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1 className="section-title">{contributionData.title}</h1>
              <p className="section-text">{contributionData.description}</p>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText="See open roles"
                  handleClick={() => router.push("/mentorship/register")}
                />
              </div>
            </div>

            <div className="top-space hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"617px"}
                  height={"481px"}
                  objectFit="contain"
                  src="/assets/images/contribution-hero-image.png"
                  alt="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contribution__current">
        <div className="header-text">
          <h2>Current opportunities</h2>
        </div>
        {contributionData.jobs.map((opportunity, index) => (
          <div key={index} className="contribution__current-content">
            <div className="text">
              <h4>{opportunity.title}</h4>
              <p>{opportunity.department}</p>
            </div>
            <div className="content-button">
              <Button
                variant="outline"
                buttonText="View role"
                handleClick={() => router.push(opportunity.url)}
              />
            </div>
          </div>
        ))}
        <div className="contribution__current-button">
          <Button
            variant="primary"
            buttonText="View all"
            handleClick={() => router.push("#")}
          />
        </div>
      </section>

      <div className="tracks__spacing">
        <FreehandCard freeHandData={freeHandData} />
      </div>

      <Footer />
    </>
  );
};

export default Contribution;

export async function getStaticProps() {
  const freeHandData = await strapiService.getFreeHand();

  return {
    props: {
      contributionData: opportunities,
      freeHandData: freeHandData.data.attributes,
    },
  };
}
