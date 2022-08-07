import Image from "next/image";
import React from "react";
import indexPageData from "./api/home.json";
import Button from "../components/buttons/Button";
import Highlights from "../components/Highlights";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const indexPage = indexPageData;
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <main className="header-bg">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1 className="section-title">
                Equipping Ladies with relevant Blockchain skills
              </h1>
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
              {indexPage.W3L_SUPPORTERS_1.map((supporter) => (
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
              {indexPage.W3L_SUPPORTERS_2.map((supporter) => (
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

      {/* WHO WE ARE SECTION */}
      <section className="introduction">
        <div className="container">
          <h1 className="introduction--heading section-title"> Who we are</h1>
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
      {/* END OF WHO WE ARE SECTION */}

      {/* JOIN OUR COMMUNITY SECTION */}
      <section className="who-we-are">
        <div className="container wrapper">
          <div className="who-we-are--container">
            <div className="who-we-are--content">
              <h3 className="section-title">Join Our Community</h3>
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
      {/* END OF JOIN OUR COMMUNITY SECTION */}

      {/* ANALYTICS SECTION */}
      <section className="analytics">
        <div className="container">
          <h1 className="analytics--heading section-title"> Our Numbers</h1>
          <ul className="analytics--container">
            <li>
              <h3 className="section-title">1050</h3>
              <span className="analytics--text"> Community members</span>
            </li>
            <li>
              <h3 className="section-title">3</h3>
              <span className="analytics--text"> Cohorts</span>
            </li>
            <li>
              <h3 className="section-title">54</h3>
              <span className="analytics--text"> Graduated mentees</span>
            </li>
            <li>
              <h3 className="section-title">52</h3>
              <span className="analytics--text"> Worktools given</span>
            </li>

            <li>
              <h3 className="section-title">24</h3>
              <span className="analytics--text"> Projects</span>
            </li>
          </ul>
        </div>
      </section>
      {/* END OF ANALYTICS SECTION */}

      {/* IMPACT SECTION */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">How We Create Impact</h2>
        </div>
        <ul className="impact-list">
          {indexPage.IMPACT_ITEMS.map((item, index) => (
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
      <Highlights
        title={"Highlights of the Week"}
        HIGHLIGHTS_ITEMS={indexPage.HIGHLIGHTS_ITEMS}
      />
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

      {/* MENTORSHIP SECTION */}
      <section className="mentorship">
        <div className="container">
          <h1 className="section-title">
            Get mentored by the best in the <span>Web3 Ecosystem</span>
          </h1>
          <Button
            type={"primary"}
            buttonText={"Register Now"}
            handleClick={() => null}
          />
          {indexPage.LOGOS.map((item) => (
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
            <h1 className="section-title">Support us by taking our plegde</h1>
            <Button
              type={"outline"}
              buttonText={"Take the pledge"}
              handleClick={() => null}
            />
          </div>
          <div className="pledge--image">
            <Image
              src="/assets/images/pledge-image.png"
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
      <section className="events">
        <div className="container">
          <h1 className="section-title">Upcoming Events</h1>
          <ul className="events-list">
            {indexPage.EVENTS_ITEMS.map((item) => (
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
                    buttonText={"Learn More"}
                    handleClick={() => null}
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
            Check us out on{" "}
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
                src="https://www.youtube.com/embed/LapzOS7zyW0"
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
              buttonText={"Visit our Youtube"}
              handleClick={() =>
                window.open(
                  "https://www.youtube.com/channel/UCJHXyL53LLhIqjYI1Gzt9mQ",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </section>
      {/* END OF YOUTUBE SECTION */}

      {/* TESTIMONIALS SECTION */}
      <Testimonials />
      {/* END OF TESTIMONIALS SECTION */}

      <Footer />
    </>
  );
}
