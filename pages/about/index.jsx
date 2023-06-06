import React from "react";
import Supporters from "../../components/Supporters";
import Navbar from "../../components/layouts/Navbar";
import { useRouter } from "next/router";
import Button from "../../components/buttons/Button";
import Image from "next/image";
import { strapiService } from "../../services";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/layouts/Footer";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import MentorCard from "../../components/tracks/MentorCard";

const About = ({ indexPage, joinData, aboutPage }) => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="about__hero">
        {/*START OF HERO SECTION*/}
        <div className="container cta">
          <div className=" content">
            <div className=" hero_content">
              <h1 className="title section-title ">{aboutPage.hero_title}</h1>
              <p>{aboutPage.hero_description}</p>
            </div>

            <div className="about__hero-images">
              <div className="about-hero-vector">
                <img
                  src="/assets/images/about-hero-vector.png"
                  alt="mentorship-img"
                />
              </div>
              <div className="hero__img-ovarlay">
                <Image
                  width={"319px"}
                  height={"246px"}
                  objectFit="contain"
                  src={aboutPage.hero_image}
                  alt="mentorship-img"
                />
              </div>
              <div className="hero-img">
                <Image
                  width={"492px"}
                  height={"492px"}
                  objectFit="contain"
                  src={aboutPage.hero_image}
                  alt="mentorship-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/*END OF HERO SECTION*/}
      </main>
      <Supporters title="Current Partners" indexPage={indexPage} />

      <div className="about__history ">
        <div className="container cta">
          <div className="choose_image">
            <Image
              className="gains-image"
              width={"493px"}
              height={"472px"}
              objectFit="contain"
              src={aboutPage.history_image}
              alt="gains-image"
            />
          </div>
          <div className="content section__one">
            <h2>{aboutPage.history_title}</h2>

            <div className="">
              <p>{aboutPage.history_description1}</p>
              {aboutPage.history_description2 && (
                <p>{aboutPage.history_description2}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <section className="about__spacing-top about__vision">
        <div className="container cta">
          {aboutPage.mission.map((aim, index) => (
            <div className="content" key={index}>
              <div className="">
                <Image
                  className="hero-img"
                  width={"72px"}
                  height={"72px"}
                  objectFit="contain"
                  src={aim.icon}
                  alt={aim.title}
                />
              </div>
              <h3>{aim.title}</h3>
              <p>{aim.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about__spacing-top about__roadmap">
        <div className="container cta">
          <div className="header__text">
            <h2>{aboutPage.roadmap_title}</h2>
          </div>
          <div className="about__content">
            <div className="white__bg first__year-text">
              <p>{aboutPage.roadmap[0].content}</p>
              <div className="semulated__icon">
                <p>{aboutPage.roadmap[0].year}</p>
              </div>
            </div>
            <div className="second__year-text">
              <div className="semulated__icon">
                <p>{aboutPage.roadmap[1].year}</p>
              </div>
              <p>{aboutPage.roadmap[1].content}</p>
            </div>
            <div className=" third__year-text">
              <div className="semulated__icon">
                <p>{aboutPage.roadmap[2].year}</p>
              </div>
              <p>{aboutPage.roadmap[2].content}</p>
            </div>
            <div className=" fouth__year-text">
              <div className="semulated__icon">
                <p> {aboutPage.roadmap[3].year}</p>
              </div>
              <p>{aboutPage.roadmap[3].content}</p>
            </div>
            <div className=" last__year-text">
              <div className="semulated__icon">
                <p>{aboutPage.roadmap[4].year}</p>
              </div>
              <p>{aboutPage.roadmap[4].content}</p>
            </div>
            <div className="first-roadmap-connector">
              <Image
                width={"743px"}
                height={"183px"}
                objectFit="contain"
                src="/assets/images/second-roadmap-connector.png"
                alt="connectors"
              />
            </div>
            <div className="second-roadmap-connector">
              <Image
                width={"743px"}
                height={"183px"}
                objectFit="contain"
                src="/assets/images/second-roadmap-connector.png"
                alt="connectors"
              />
            </div>
          </div>
        </div>
      </section>
      <div className="about__spacing-top">
        <section className=" about__founder">
          <h2>{aboutPage.founder_title}</h2>
          <div className="content">
            <div className="founder-img">
              <Image
                width={"410px"}
                height={"480px"}
                objectFit="contain"
                className=""
                src={aboutPage.founder_image}
                alt="mentorship-img"
              />
            </div>
            {aboutPage.founder_paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph.content}</p>
            ))}
          </div>
        </section>
      </div>
      <div className="about__spacing-top">
        <JoinAsMentor joinData={joinData} />
      </div>

      <section className="about__spacing-top mentors-section">
        <div className="container">
          <h2 className="heading">{aboutPage.team_heading}</h2>

          <div className="mentors-container">
            {aboutPage.teams.map((mentor, index) => {
              return <MentorCard key={index} mentor={mentor} />;
            })}
          </div>
        </div>
      </section>
      <section className="mentors-section">
        <div className="container">
          <h2 className="heading">{aboutPage.contributors_heading}</h2>

          <div className="mentors-container">
            {aboutPage.contributors.map((mentor, index) => {
              return <MentorCard key={index} mentor={mentor} />;
            })}
          </div>
        </div>
      </section>
      <section className=" about__spacing-top mentorship about__contribution">
        <div className="content">
          <h1 className="section-title">{aboutPage.contributors_title}</h1>
          <p>{aboutPage.contributors_description}</p>
          <Button
            variant={"outline"}
            buttonText={aboutPage.contributors_btn_text}
            handleClick={() => {
              router.push(aboutPage.contributors_btn_link);
            }}
          />
        </div>
      </section>

      {/* JOIN OUR COMMUNITY SECTION */}
      <section
        className=" about__spacing-top who-we-are"
        id="join-our-community"
      >
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
      <Testimonials
        testimonial_title={indexPage.testimonials_title}
        testimonial_description={indexPage.testimonial_description}
        testimonial_items={indexPage.testimonial_items}
        hasMaxWidth={true}
      />
      <Footer />
    </>
  );
};

export default About;

export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  const aboutPage = await strapiService.getAboutPageData();
  const joinData = await strapiService.getJoinAsMentor();
  return {
    props: {
      indexPage: indexPage.data.attributes,
      aboutPage: aboutPage.data.attributes,
      joinData: joinData.data.attributes,
    },
  };
}
