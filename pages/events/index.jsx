import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/layouts/Navbar";
import eventData from "../../pages/api/events.json";
import EventsEvent from "../../components/Events";
import Button from "../../components/buttons/Button";
import communityData from "../../pages/api/community.json";
import CommunityEvents from "../../components/CommunityEvents";
import Footer from "../../components/layouts/Footer";
import { strapiService } from "../../services/strapi.service";
import Slack from "../../components/icons/Slack";
import Image from "next/image";

import FreehandCard from "../../components/FreehandCard";

const Events = ({ indexPage, freeHandData }) => {
  const eventHome = eventData;
  const communityHome = communityData.home;
  const router = useRouter();

  // React.useEffect(() => {
  //   router.push("/");

  // }, []);

  return (
    <>
      <Navbar />
      {/* HERO */}

      <section className="">
        <div className="container events-hero">
          <p className="event-sub">{eventHome.helpTitle}</p>
          <h2 className="event-text">{eventHome.eventTitle}</h2>

          {eventHome.help_logos?.map((item) => (
            <div className="logo-container" key={item.name}>
              <Image
                src={item.logo}
                width={"100%"}
                height={"100%"}
                alt={item.title}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* END OF HEREO */}

      {/*  UPCOMING EVENT SECTION */}
      <EventsEvent
        title={eventHome.events_title.title}
        events_items={eventHome.EVENTS_ITEMS}
      />
      {/* END OF UPCOMING EVENT SECTION */}

      {/* COMMUINTY EVENT SECTION */}
      <CommunityEvents
        title={communityHome.events.sub_title}
        events_items={communityHome.events_items}
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
                  __html: indexPage.join_our_community_title,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: indexPage.join_our_community_description,
                }}
              />
              <div className="who-we-are--content-cta">
                <Button
                  variant={"outline"}
                  width={"243px"}
                  handleClick={() =>
                    window.open(
                      indexPage.join_our_community_button_link,
                      "_blank"
                    )
                  }
                  hasIcon
                >
                  <span className="icon-left">{/* <Slack /> */}</span>
                  {indexPage.join_our_community_button_text}
                </Button>
              </div>
            </div>
            <div className="who-we-are--img">
              <Image
                src={indexPage.join_our_community_image_url}
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
  const indexPage = await strapiService.getHomePageData();
  const freeHandData = await strapiService.getFreeHand();
  return {
    props: {
      indexPage: indexPage.data.attributes,
      freeHandData: freeHandData.data.attributes,
    },
  };
}
