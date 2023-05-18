import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/layouts/Navbar";

import FAQs from "../../components/FAQs";
import { strapiService } from "../../services/strapi.service";
import communityData from "../../pages/api/community.json";
import Image from "next/image";
import Footer from "../../components/layouts/Footer";
import Button from "../../components/buttons/Button";
import WhyUsSection from "../../components/WhyUsSection";
import Testimonials from "../../components/Testimonials";
import CommunityEvents from "../../components/CommunityEvents";
import CommunityClubs from "../../components/CommunityClubs";
import Analytics from "../../components/analytics/Community";
import Gallery from "../../components/Gallery";
import VisitYoutube from "../../components/VisitYoutube";
import HowToJoin from "../../components/HowToJoin";
import JoinCommunity from "../../components/JoinCommunity";
import FreehandCard from "../../components/FreehandCard";

const Community = ({ indexPage }) => {
  const communityHome = communityData.home;
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}

      <section>
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1 className="section-title">{communityHome.hero.title}</h1>
              <p className="section-text">{communityHome.hero.text}</p>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText={communityHome.hero.buttonText}
                  handleClick={() => router.push(communityHome.hero.buttonLink)}
                />
              </div>
            </div>

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"400px"}
                  height={"438px"}
                  src="/assets/images/community-polygon.png"
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"105px"}
                  height={"95px"}
                  src="/assets/images/web3-vector.png"
                  alt="bitcoin-logo"
                />
                <Image />
                <Image
                  className="hero-illustration"
                  width={"355px"}
                  height={"121px"}
                  src="/assets/images/web3ladies-union.png"
                  alt="ethereum-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF HERO SECTION */}

      {/* WHYUS SECTION */}
      <WhyUsSection
        title={communityHome.why.title}
        highlights={communityHome.highlights}
        buttonText={communityHome.why.buttonText}
        handleClick={communityHome.why.buttonLink}
      />
      {/* END OF WHYUS SECTION */}

      {/* ANALYTICS SECTION */}
      <Analytics our_numbers={indexPage.our_numbers} />
      {/* END OF ANALYTICS SECTION */}

      {/* COMMUINTY EVENT SECTION */}
      <CommunityEvents
        title={communityHome.events.title}
        events_items={communityHome.events_items}
      />
      {/* END OF COMMUINTY EVENT  SECTION */}

      {/* HOW TO JOIN SECTION */}
      <div className="top-space">
        <HowToJoin
          title={communityHome.join.title}
          how_to_join={communityHome.how_to_join}
          buttonText={communityHome.join.buttonText}
        />
      </div>

      {/* END OF JOIN  SECTION */}

      {/* COMMUINTY CLUB SECTION */}
      <div className="top-space">
        <CommunityClubs />
      </div>
      {/* END OF COMMUINTY CLUB  SECTION */}

      {/* YOUTUBE SECTION */}
      <div className="top-space">
        <VisitYoutube />
      </div>
      {/* END OF YOUTUBE SECTION */}

      {/* COMMUINTY SECTION */}
      <div className="top-space">
        <JoinCommunity
          title={communityHome.join.buttonText}
          description={communityHome.join.description}
          handleClick={() =>
            window.open(communityHome.join.buttonLink, "_blank")
          }
          buttonText={communityHome.join.buttonText}
        />
      </div>
      {/* END OF COMMUINTY  SECTION */}

      {/* GALLERY SECTION */}
      <div className="top-space">
        <Gallery data={communityHome.gallery} />
      </div>

      {/*END OF GALLERY SECTION */}

      {/*FAQ */}
      <div className="top-space">
        <FAQs />
      </div>
      {/*FAQ */}

      {/* TESTIMONIALS SECTION */}
      <div className="top-space">
        <Testimonials
          testimonial_title={indexPage.testimonials_title}
          testimonial_description={indexPage.testimonial_description}
          testimonial_items={indexPage.testimonial_items}
          hasMaxWidth={true}
        />
      </div>
      {/* END OF TESTIMONIALS SECTION */}

      {/* <CTACard /> */}
      <div className="top-space tracks__spacing">
        <FreehandCard />
      </div>

      <Footer />
    </>
  );
};
export default Community;

//get home page data
export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
