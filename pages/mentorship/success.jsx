import Image from "next/image";
import React from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import {
  INSTAGRAM_URL,
  TWITTER_URL,
  LINKEDIN_URL,
  SLACK_URL,
} from "../../lib/constants";
import { strapiService } from "../../services";
const Success = ({ indexPage }) => {
  const SOCIAL_LINKS = [
    {
      name: "instagram",
      link: INSTAGRAM_URL,
    },
    {
      name: "twitter",
      link: TWITTER_URL,
    },
    {
      name: "linkedin",
      link: LINKEDIN_URL,
    },
    {
      name: "slack",
      link: SLACK_URL,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="mentorship__success">
        <div className="contain">
          <div className="feedback">
            <div className="feedback__vector">
              <div className="vector__purple-pyramid">
                <Image
                  width={"85px"}
                  height={"93px"}
                  objectFit="fit"
                  src="/assets/images/purple-pyramid.png"
                  alt="pyramid-image"
                />
              </div>
              <div className="mid__vector">
                <Image
                  width={"80px"}
                  height={"80px"}
                  objectFit="contain"
                  src="/assets/images/celebration.png"
                  alt="celebration-image"
                />
              </div>
              <div className="vector__white-pyramid">
                <Image
                  width={"84px"}
                  height={"86px"}
                  objectFit="contain"
                  src="/assets/images/white-pyramid.png"
                  alt="pyramid-image"
                />
              </div>
            </div>
            <div className="feedback-content">
              <div className="center">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: indexPage.title,
                  }}
                />
              </div>
              <p>{indexPage.subtitle}</p>
              <div className="center">
                <small>{indexPage.small}</small>
                <div className="icons-container ">
                  {SOCIAL_LINKS.map((socialLink, index) => (
                    <a
                      key={index}
                      href={socialLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        className="icon"
                        width={"100%"}
                        height={"100%"}
                        objectFit="contain"
                        src={`/assets/images/${socialLink.name}.png`}
                        alt={socialLink.name}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="vector__purple-cylindrical">
          <Image
            className=""
            width={"100%"}
            objectFit="contain"
            height={"100%"}
            src="/assets/images/purple-cylindrical.png"
            alt="purple-cylindrical-image"
          />
        </div>

        <div className="vector__cylindrical">
          <Image
            className=""
            width={"100%"}
            height={"100%"}
            objectFit="contain"
            src="/assets/images/cylindrical.png"
            alt="cylindrical-image"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Success;

export async function getStaticProps() {
  const indexPage = await strapiService.getMentorshipSuccess();

  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
