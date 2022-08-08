import Image from "next/image";
import React from "react";
import Button from "../components/buttons/Button";
import Highlights from "../components/Highlights";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Testimonials from "../components/Testimonials";
import Slack from "../components/icons/Slack";
import { strapiService } from "../services/strapi.service";
import { useRouter } from "next/router";

export default function Home({ indexPage }) {
  const router = useRouter();
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <main className="header-bg">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1
                className="section-title"
                dangerouslySetInnerHTML={{ __html: indexPage.hero_title }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: indexPage.hero_description,
                }}
              />

              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={indexPage.button_one_text}
                  handleClick={() => router.push(indexPage.button_one_link)}
                />
                <Button
                  type={"outline"}
                  buttonText={indexPage.button_two_text}
                  handleClick={() => router.push(indexPage.button_two_link)}
                />
              </div>
            </div>

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"493px"}
                  height={"472px"}
                  src={indexPage.hero_image_url}
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"113px"}
                  height={"121px"}
                  src="/assets/images/bitcoin.png"
                  alt="bitcoin-logo"
                />
                <Image
                  className="hero-illustration"
                  width={"66px"}
                  height={"95px"}
                  src="/assets/images/ethereum.png"
                  alt="ethereum-logo"
                />
                <Image
                  className="hero-illustration"
                  width={"195px"}
                  height={"75px"}
                  src="/assets/images/web3ladies-vector.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* END OF HERO SECTION */}

      {/* SUPPORT SECTION */}
      <section className="support">
        <div className="container">
          <h1
            className="support--heading"
            dangerouslySetInnerHTML={{ __html: indexPage.supporters_title }}
          />
          <div className="groups-container">
            {indexPage.supporters_images?.map((supporter) => (
              <div className="group-item" key={supporter.name}>
                <Image
                  className="support-image"
                  width={"165px"}
                  height={"60px"}
                  src={supporter.logo}
                  alt={supporter.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* END OF SUPPORT SECTION */}

      {/* WHO WE ARE SECTION */}
      <section className="introduction" id="who-we-are">
        <div className="container">
          <h1
            className="introduction--heading section-title"
            dangerouslySetInnerHTML={{ __html: indexPage.who_we_are_title }}
          />
          <div className="introduction--container">
            <p
              className="introduction--container-text"
              dangerouslySetInnerHTML={{
                __html: indexPage.who_we_are_description,
              }}
            />

            <div className="introduction--container-cta">
              <Button
                type={"primary"}
                buttonText={indexPage.who_we_are_button_text}
                handleClick={() =>
                  router.push(indexPage.who_we_are_button_link)
                }
              />
            </div>
          </div>
        </div>
      </section>
      {/* END OF WHO WE ARE SECTION */}

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
                  type={"outline"}
                  width={"243px"}
                  handleClick={() =>
                    window.open(
                      indexPage.join_our_community_button_link,
                      "_blank"
                    )
                  }
                  hasIcon
                >
                  <span className="icon-left">
                    <Slack />
                  </span>
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

      {/* ANALYTICS SECTION */}
      <section className="analytics">
        <div className="container">
          <h1
            className="analytics--heading section-title"
            dangerouslySetInnerHTML={{ __html: indexPage.our_numbers_title }}
          />
          <ul className="analytics--container groups-container">
            {indexPage.our_numbers?.map((number) => (
              <li key={number.title} className="group-item">
                <h3 className="section-title">{number.number}</h3>
                <h6 className="analytics--text"> {number.title} </h6>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* END OF ANALYTICS SECTION */}

      {/* IMPACT SECTION */}
      <section className="impact-section">
        <div className="container">
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: indexPage.our_impact_title }}
          />
        </div>
        <ul className="impact-list">
          {indexPage.our_impact?.map((item, index) => (
            <li className="impact-item" key={item.title}>
              <div className="impact-item--image">
                <Image
                  src={item.image}
                  width={"635px"}
                  height={"405px"}
                  alt={item.title}
                  className="impact-image"
                  objectFit="cover"
                />
              </div>
              <div className="text">
                <div>
                  <h1 className="section-title">
                    {(index < 9 ? "0" : "") + (index + 1)}
                  </h1>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    type={"outline"}
                    buttonText={item.button_text}
                    handleClick={() => router.push(item.button_link)}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* END OF IMPACT SECTION */}

      {/* HIGHLIGHTS SECTION */}
      <Highlights
        title={indexPage.highlights_title}
        HIGHLIGHTS_ITEMS={indexPage.highlights_items}
      />
      {/* END OF HIGHLIGHTS SECTION */}

      {/* CALL FOR SPONSORS SECTION */}
      <section className="call-for-sponsors" id="sponsor-us">
        <div className="call-for-sponsors--text">
          <div>
            <h1
              dangerouslySetInnerHTML={{
                __html: indexPage.become_a_sponsor_title,
              }}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: indexPage.become_a_sponsor_description,
              }}
            />
            <Button
              type={"outline"}
              buttonText={indexPage.become_a_sponsor_button_text}
              handleClick={() =>
                window.open(indexPage.become_a_sponsor_button_link, "_blank")
              }
            />
          </div>
        </div>
        <div className="call-for-sponsors--image">
          <Image
            src={indexPage.become_a_sponsor_image_url}
            width={"532px"}
            height={"500px"}
            objectFit="contain"
            alt="call-for-sponsors-image"
          />
        </div>
      </section>
      {/* END OF CALL FOR SPONSORS SECTION */}

      {/* MENTORSHIP SECTION */}
      <section className="mentorship" id="mentorship">
        <div className="container">
          <h1
            className="section-title"
            dangerouslySetInnerHTML={{ __html: indexPage.mentorship_title }}
          />
          <Button
            type={"primary"}
            buttonText={indexPage.mentorship_button_text}
            handleClick={() =>
              window.open(indexPage.mentorship_button_link, "_blank")
            }
          />
          {indexPage.mentorship_logos?.map((item) => (
            <div className="logo-container" key={item.title}>
              <Image
                src={item.logo}
                width={"170px"}
                height={"45px"}
                alt={item.title}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </section>
      {/* END OF MENTORSHIP SECTION */}

      {/* PLEDGE SECTION */}
      <section className="pledge">
        <div className="container card card__black">
          <div className="pledge--text">
            <h1
              className="section-title"
              dangerouslySetInnerHTML={{
                __html: indexPage.our_pledge_title,
              }}
            />
            <Button
              type={"outline"}
              buttonText={indexPage.our_pledge_button_text}
              handleClick={() => router.push(our_pledge_button_link)}
              disabled={!indexPage.our_pledge_button_link}
            />
          </div>
          <div className="pledge--image">
            <Image
              src={indexPage.our_pledge_image_url}
              width={"532px"}
              height={"500px"}
              objectFit="contain"
              alt="pledge-image"
            />
          </div>
        </div>
      </section>
      {/* END OF PLEDGE SECTION */}

      {/* EVENTS SECTION */}
      <section className="events" id="events">
        <div className="container">
          <h1
            className="section-title"
            dangerouslySetInnerHTML={{ __html: indexPage.events_title }}
          />
          <ul className="events-list">
            {indexPage.events_items?.map((item) => (
              <li className="events-item" key={item.title}>
                <div className="events-item--image">
                  <Image
                    src={item.image}
                    width={"635px"}
                    height={"405px"}
                    alt={item.title}
                    className="events-image"
                    objectFit="cover"
                  />
                </div>
                <div className="events-item--text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    type={"outline"}
                    buttonText={item.button_text}
                    handleClick={() => window.open(item.button_link, "_blank")}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* END OF EVENTS SECTION */}

      {/* YOUTUBE SECTION */}
      <section className="youtube">
        <div className="container">
          <h1 className="section-title">
            {indexPage.youtube_title}{" "}
            <span>
              <Image
                src="/assets/images/youtube-wordmark.svg"
                width={"187px"}
                height={"43px"}
                alt="youtube-wordmark"
                objectFit="contain"
              />
            </span>
          </h1>
          <div className="youtube-container">
            <div className="youtube-container--video">
              <iframe
                src={indexPage.youtube_link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="btn-container">
            <Button
              type={"outline"}
              buttonText={indexPage.youtube_button_text}
              handleClick={() =>
                window.open(indexPage.youtube_button_link, "_blank")
              }
            />
          </div>
        </div>
      </section>
      {/* END OF YOUTUBE SECTION */}

      {/* TESTIMONIALS SECTION */}
      <Testimonials
        testimonial_title={indexPage.testimonial_title}
        testimonial_description={indexPage.testimonial_description}
        testimonial_items={indexPage.testimonial_items}
      />
      {/* END OF TESTIMONIALS SECTION */}

      <Footer />
    </>
  );
}

//get home page data
export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
