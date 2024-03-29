import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/layouts/Navbar";
import EventsEvent from "../../components/Events";
import Button from "../../components/buttons/Button";

import CommunityEvents from "../../components/CommunityEvents";
import Footer from "../../components/layouts/Footer";
import { strapiService } from "../../services/strapi.service";
import Slack from "../../components/icons/Slack";
import Image from "next/image";

import FreehandCard from "../../components/FreehandCard";

const Events = ({ indexPage, freeHandData }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      {/* HERO */}

      <section className="">
        <div className="container events-hero">
          <p className="event-sub">{indexPage.text}</p>
          <h2 className="event-text">{indexPage.title}</h2>
        </div>
      </section>

      {/* END OF HEREO */}

      {/*  UPCOMING EVENT SECTION */}
      <EventsEvent title={indexPage.subtitle} events_items={indexPage.items} />
      {/* END OF UPCOMING EVENT SECTION */}

      {/* COMMUINTY EVENT SECTION */}
      <CommunityEvents
        title={indexPage.community_title}
        events_items={indexPage.community_items}
      />
      {/* END OF COMMUINTY EVENT  SECTION */}

      {/* JOIN OUR COMMUNITY SECTION */}
      <section className="who-we-are" id="join-our-community">
        <div className="container wrapper">
          <div className="who-we-are--container">
            <div className="who-we-are--content">
              <h3
                className="section-title"
                dangerouslySetInnerHTML={{
                  __html: indexPage.join_title,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: indexPage.join_description,
                }}
              />
              <div className="who-we-are--content-cta">
                <Button
                  variant={"outline"}
                  width={"243px"}
                  handleClick={() =>
                    window.open(indexPage.join_btn_link, "_blank")
                  }
                  hasIcon
                >
                  <span className="icon-left">{/* <Slack /> */}</span>
                  {indexPage.join_btn_text}
                </Button>
              </div>
            </div>
            <div className="who-we-are--img">
              <Image
                src={indexPage.join_image}
                width={"532px"}
                height={"500px"}
                objectFit="contain"
                alt="community-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END OF JOIN OUR COMMUNITY SECTION */}

      {/* <CTACard /> */}
      <section className="container" style={{ marginTop: "200px" }}>
        <FreehandCard freeHandData={freeHandData} />
      </section>
      <Footer />
    </>
  );
};

export default Events;

//get home page data
export async function getStaticProps() {
  const indexPage = await strapiService.getEventPageData();
  const freeHandData = await strapiService.getFreeHand();
  return {
    props: {
      indexPage: indexPage.data.attributes,
      freeHandData: freeHandData.data.attributes,
    },
  };
}
