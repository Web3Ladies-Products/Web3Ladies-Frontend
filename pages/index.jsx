import Image from "next/image";
import React from "react";
import Button from "../components/buttons/Button";
import Footer from "../components/layouts/Footer";
import Navbar from "../components/layouts/Navbar";
import stackshift from "../public/assets/images/stackshift.svg"
import polygon from "../public/assets/images/polygon.svg"
import w3d from "../public/assets/images/w3d.svg"
import chainwhiz from "../public/assets/images/chainwhiz.svg"
import filecoin from "../public/assets/images/filecoin.svg"
import ftx from "../public/assets/images/ftx.svg"
import crevatal from "../public/assets/images/crevatal.svg"
import harmony from "../public/assets/images/harmony.svg"
import globe from "../public/assets/images/globe.svg"


export default function Home() {
  return (
    <>
      <Navbar />
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
        <div className="support-logos">
          <h1 className="Support"> Our Supporters</h1>
          <div className="support-container">
            <div className="first-group">
              <Image
                className="support-image"
                width={"165px"}
                height={"60px"}
                src={polygon}
                alt="ethereum-logo"
              />

              <Image
                className="support-image"
                width={"115px"}
                height={"60px"}
                src={w3d}
                alt="ethereum-logo"
              />

              <Image
                className="support-image"
                width={"140px"}
                height={"60px"}
                src={ftx}
                alt="ethereum-logo"
              />

              <Image
                className="support-image"
                width={"199px"}
                height={"29px"}
                src={stackshift}
                alt="ethereum-logo"
              />

              <Image
                className="support-image"
                width={"173px"}
                height={"60px"}
                src={crevatal}
                alt="ethereum-logo"
              />
            </div>


            <div className="second-group">
              <Image
                className="support-image"
                width={"163px"}
                height={"38px"}
                src={harmony}
                alt="ethereum-logo"
              />

              <Image
                className="support-image"
                width={"140px"}
                height={"60px"}
                src={filecoin}
                alt="ethereum-logo"
              />

              <Image
                className="support-image"
                width={"184px"}
                height={"60px"}
                src={chainwhiz}
                alt="ethereum-logo"
              />
            </div>

          </div>
        </div>



        <div className="introduction">
          <h1 className="intro-header"> Who we are</h1>
          <div className="intro-container">
            <div className="first-text">
              <p className="intro-text">This is a free intensive learning phase of the basics/foundations for all tracks, it serves as the introduction to the track
                for participants. This phase is for 4weeks, classes will be twice a week (Tuesdays & Thursdays 5 - 7 PM). Across all
                tracks participants will learn intensively as a beginner, mentors will be on the ground to teach, resources will be shared
                with the participants, assignments will be given as well, and there will be an eviction at the end of this phase upon final
                assessment to graduate into the learning phase.</p>
            </div>


            <div className="intro-button">
              <Button
                type={"primary"}
                buttonText={"Learn More"}
                handleClick={() => null}
              />
            </div>

          </div>
        </div>


        <div className="wrapper">

          <div className="join-community-container">

            <div className="join-community-text-and-cta">
              <h3>Join Our Community</h3>
              <p className="community-text">Be part of our Non-Profit community of forward-thinking ladies shaping the future of the web3 ecosystem.</p>
              <Button
                type={"outline"}
                width={"243px"}
                buttonText={"Join our community"}
                handleClick={() => null}
              />
            </div>
            <div className="join-community-img">
              <Image
                className="second-img"
                padding={"0px"}
                margin={"0px"}
                width={"300px"}
                height={"300px"}
                src="/assets/images/communityimg.png"
                alt="ethereum-logo"
              />
              {/* <Image
                      className="third-img"
                      padding={"0px"}
                      margin={"0px"}
                      width={"300px"}
                      height={"300px"}
                      src="/assets/images/globe.svg"
                      alt="ethereum-logo"
                    /> */}


            </div>

          </div>
        </div>






        <div className="wrapper">
          <div className="numbers-section">
            <h1 className="number-header"> Our Numbers</h1>
            <div className="our-numbers">

            
    <ul>
      <li> 1050

      <span className="community-txt"> community member</span>
      </li>
     
      <li> 1050</li>
      <span className="community-txt"> community member</span>
      <li> 1050</li>
      <span className="community-txt"> community member</span>
      <li> 1050</li>
      <span className="community-txt"> community member</span>
      
      <li> 1050</li>
      <span className="community-txt"> community member</span>
     
    </ul>






            </div>
          </div>
        </div>


      </main>


      <Footer />
    </>
  );
}
