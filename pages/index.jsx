import Image from "next/image";
import React from "react";
import Badge from "../components/Badge";
import Button from "../components/buttons/Button";
import ArrowRight from "../components/icons/ArrowRight";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";

export default function Home() {
  const W3L_SUPPORTERS_1 = [
    {
      name: "Polygon",
      logo: "/assets/images/polygon.svg",
    },
    {
      name: "W3D",
      logo: "/assets/images/w3d.svg",
    },
    {
      name: "FTX",
      logo: "/assets/images/ftx.svg",
    },
    {
      name: "StackShift",
      logo: "/assets/images/stackshift.svg",
    },
    {
      name: "Crevatal",
      logo: "/assets/images/crevatal.svg",
    },
  ];

  const W3L_SUPPORTERS_2 = [
    {
      name: "Harmony",
      logo: "/assets/images/harmony.svg",
    },
    {
      name: "Filecoin",
      logo: "/assets/images/filecoin.svg",
    },
    {
      name: "ChainWhiz",
      logo: "/assets/images/chainwhiz.svg",
    },
  ];

  const IMPACT_ITEMS = [
    {
      title: "Mentorship",
      description:
        "We believe knowledge is what makes us distinguished and so we're committed to offering quality training to our ladies",
      image: "/assets/images/mentorship.png",
    },
    {
      title: "Community",
      description:
        "We are a community of proactive sisters who come together to achieve a common goal of being self-confident, innovative, and self-aware. All these we encourage and achieve through our various community events.",
      image: "/assets/images/community.png",
    },
    {
      title: "Events",
      description:
        "Through our events, we help create adequate awareness and enlightenment on trending topics in the web3 ecosystem.",
      image: "/assets/images/events.png",
    },
  ];

  const HIGHLIGHTS_ITEMS = [
    {
      type: "Events",
      title: "We had our AMA session on UX Research and Web3",
      buttonText: "Learn More",
      buttonLink: null,
      image: "/assets/images/ama-session.png",
      background: "#FFE6F6",
    },
    {
      type: "Blog",
      title:
        "Commencement of the Registration for our mentorship Cohort III on Monday 20th June 2022",
      buttonText: "Learn More",
      buttonLink: null,
      image: "/assets/images/ama-session.png",
      background: "#E7D2FF",
    },
    {
      type: "Announcements",
      title:
        "Commencement of the Registration for our mentorship Cohort III on Monday 20th June 2022",
      buttonText: "Learn More",
      buttonLink: null,
      image: "/assets/images/ama-session.png",
      background: "#FFE2E2",
    },
    {
      type: "Events",
      title: "We had our AMA session on UX Research and Web3",
      buttonText: "Learn More",
      buttonLink: null,
      image: "/assets/images/ama-session.png",
      background: "#FFE6F6",
    },
    {
      type: "Blog",
      title:
        "Commencement of the Registration for our mentorship Cohort III on Monday 20th June 2022",
      buttonText: "Learn More",
      buttonLink: null,
      image: "/assets/images/ama-session.png",
      background: "#E7D2FF",
    },
    {
      type: "Announcements",
      title:
        "Commencement of the Registration for our mentorship Cohort III on Monday 20th June 2022",
      buttonText: "Learn More",
      buttonLink: null,
      image: "/assets/images/ama-session.png",
      background: "#FFE2E2",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <main className="header-bg">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1>Equipping Ladies with relevant Blockchain skills</h1>
              <p>
                The goal for us is to empower more self-confident and audacious
                ladies with the required skillset to compete favorably in the
                blockchain ecosystem, thereby bridging the gender diversity gap
                in the industry, by attacking what we think is the root problem
                in this time and age.
              </p>

              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={"Learn More"}
                  handleClick={() => null}
                />
                <Button
                  type={"outline"}
                  buttonText={"Sponsor Us"}
                  handleClick={() => null}
                />
              </div>
            </div>

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"493px"}
                  height={"472px"}
                  src="/assets/images/hero-image.png"
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
          <h1 className="support--heading"> Our Supporters</h1>
          <div className="support--groups-container">
            <div className="first-group">
              {W3L_SUPPORTERS_1.map((supporter) => (
                <Image
                  className="support-image"
                  width={"165px"}
                  height={"60px"}
                  src={supporter.logo}
                  alt={supporter.name}
                  key={supporter.name}
                />
              ))}
            </div>

            <div className="second-group">
              {W3L_SUPPORTERS_2.map((supporter) => (
                <Image
                  className="support-image"
                  width={"165px"}
                  height={"60px"}
                  src={supporter.logo}
                  alt={supporter.name}
                  key={supporter.name}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* END OF SUPPORT SECTION */}

      {/* INTRODUCTION SECTION */}
      <section className="introduction">
        <div className="container">
          <h1 className="introduction--heading"> Who we are</h1>
          <div className="introduction--container">
            <p className="introduction--container-text">
              This is a free intensive learning phase of the basics/foundations
              for all tracks, it serves as the introduction to the track for
              participants. This phase is for 4weeks, classes will be twice a
              week (Tuesdays &amp; Thursdays 5 - 7 PM). Across all tracks
              participants will learn intensively as a beginner, mentors will be
              on the ground to teach, resources will be shared with the
              participants, assignments will be given as well, and there will be
              an eviction at the end of this phase upon final assessment to
              graduate into the learning phase.
            </p>

            <div className="introduction--container-cta">
              <Button
                type={"primary"}
                buttonText={"Learn More"}
                handleClick={() => null}
              />
            </div>
          </div>
        </div>
      </section>
      {/* END OF INTRODUCTION SECTION */}

      {/* WHO WE ARE SECTION */}
      <section className="who-we-are">
        <div className="container wrapper">
          <div className="who-we-are--container">
            <div className="who-we-are--content">
              <h3>Join Our Community</h3>
              <p>
                Be part of our Non-Profit community of forward-thinking ladies
                shaping the future of the web3 ecosystem.
              </p>
              <div className="who-we-are--content-cta">
                <Button
                  type={"outline"}
                  width={"243px"}
                  buttonText={"Join our community"}
                  handleClick={() => null}
                />
              </div>
            </div>
            <div className="who-we-are--img">
              <Image
                src="/assets/images/communityimg.png"
                width={"532px"}
                height={"500px"}
                objectFit="contain"
                alt="community-image"
              />
            </div>
          </div>
        </div>
      </section>
      {/* END OF WHO WE ARE SECTION */}

      {/* ANALYTICS SECTION */}
      <section className="analytics">
        <div className="container">
          <h1 className="analytics--heading"> Our Numbers</h1>
          <ul className="analytics--container">
            <li>
              <h3>1050</h3>
              <span className="analytics--text"> Community members</span>
            </li>
            <li>
              <h3>3</h3>
              <span className="analytics--text"> Cohorts</span>
            </li>
            <li>
              <h3>54</h3>
              <span className="analytics--text"> Graduated mentees</span>
            </li>
            <li>
              <h3>52</h3>
              <span className="analytics--text"> Worktools given</span>
            </li>

            <li>
              <h3>24</h3>
              <span className="analytics--text"> Projects</span>
            </li>
          </ul>
        </div>
      </section>
      {/* END OF ANALYTICS SECTION */}

      {/* IMPACT SECTION */}
      <section className="impact-section">
        <div className="container">
          <h2>How We Create Impact</h2>
        </div>
        <ul className="impact-list">
          {IMPACT_ITEMS.map((item, index) => (
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
                  <h1>{(index < 9 ? "0" : "") + (index + 1)}</h1>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Button
                    type={"outline"}
                    buttonText={"Learn More"}
                    handleClick={() => null}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      {/* END OF IMPACT SECTION */}

      {/* HIGHLIGHTS SECTION */}
      <section className="highlights">
        <div className="container">
          <div className="highlights--heading">
            <h1>Highlights Of The Week</h1>
            <Button
              type={"outline"}
              buttonText={"View More"}
              handleClick={() => null}
            />
          </div>
          <ul className="highlights--container">
            {HIGHLIGHTS_ITEMS.map((item) => (
              <li className="highlight--container-item" key={item.title}>
                <div className="highlights--container-item--image">
                  <Image
                    src="/assets/images/highlights-image.png"
                    width={"125px"}
                    height={"220px"}
                    objectFit="contain"
                    alt="highlights-image"
                  />
                </div>
                <div className="highlights--container-item--text">
                  <Badge
                    badgeText={item.type}
                    badgeBackground={item.background}
                  />
                  <h4>{item.title}</h4>
                  <Button
                    type={"clear"}
                    color={"primary"}
                    hasIcon
                    buttonText={item.buttonText}
                    handleClick={() => null}
                  >
                    <span className="icon-right">
                      <ArrowRight width={10} height={10} color={"#7D0BFE"} />{" "}
                    </span>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* END OF HIGHLIGHTS SECTION */}

      {/* CALL FOR SPONSORS SECTION */}
      <section className="call-for-sponsors">
        <div className="call-for-sponsors--text">
          <div>
            <h1>You can become a sponsor</h1>
            <p>
              Be a part of a movement that is focused on changing the narrative
              in the web3 space by sponsoring or partnering with us.
            </p>
            <Button
              type={"outline"}
              color={"primary"}
              buttonText={"Become a Sponsor"}
              handleClick={() => null}
            />
          </div>
        </div>
        <div className="call-for-sponsors--image">
          <Image
            src="/assets/images/call-for-sponsors.png"
            width={"532px"}
            height={"500px"}
            objectFit="contain"
            alt="call-for-sponsors-image"
          />
        </div>
      </section>
      {/* END OF CALL FOR SPONSORS SECTION */}
      <Footer />
    </>
  );
}
