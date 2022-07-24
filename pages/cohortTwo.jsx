import React from "react";
import Image from "next/image";
import Navbar from "../components/layouts/Navbar";
import Button from "../components/buttons/Button";
import Badge from "../components/Badge";

const cohortTwo = () => {

  const TRACKS = [
    {
      icons:['/assets/images/solidity.png','/assets/images/python.png','/assets/images/js.png',],
      title:"Web3 - Blockchain Development",
      description:"The Blockchain developer’s responsibility is to develop innovative solutions to challenging problems, including solutions for command and control, and high integrity.",
      buttonText:"View Track"
    },
    {
      icons:['/assets/images/html.png','/assets/images/css.png','/assets/images/js.png',],
      title:"Web2 - Blockchain Development",
      description:"This track is for beginners in web development, this track will focus on teaching the basics of web development, such as HTML, CSS, and JavaScript.",
      buttonText:"View Track"
    },
    {
      icons:'/assets/images/figma.png',
      title:"Product Design",
      description:"This track is designed to evaluate a baseline of visual skills, and analytical thinking, this is for applicants who want to start a career in UI/UX track",
      buttonText:"View Track"
    },
    {
      icons:'/assets/images/jira.png',
      title:"Product Management",
      description:"Product management is the business process of planning, developing, launching, and managing a product or service. It includes the entire lifecycle of a product, from ideation to development to go to market.",
      buttonText:"View Track"
    }    
  ]
  return (
    <>
      <Navbar />
      <main className="">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
            <Badge 
                badgeText="ONGOING"
                badgeBackground={"#FFFFFF"}
                badgeBorderColor={"#000000"}
              />
              <h1>Cohort Two</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At
                molestie volutpat pharetra cursus et vel dictum. Amet integer
                facilisis egestas porta suspendisse.
              </p>

              <div className="button-container">
                <Button
                  type={"primary"}
                  buttonText={"Register Now"}
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
                  objectFit="contain"
                  src="/assets/images/female-polygon.png"
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"150px"}
                  height={"125px"}
                  src="/assets/images/web3ladies-cohorts.png"
                  alt="web3ladies-vector"
                />
                <Image
                  className="hero-illustration"
                  width={"100px"}
                  height={"155px"}
                  src="/assets/images/curved-web3ladies-vector.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ABOUT MENTEES SECTION */}
      <section className="about">
        <div className="container ">
          <div className="about-item">
            <div className="about-item--image">
              <Image
                src="/assets/images/ama-session.png"
                width={"635px"}
                height={"405px"}
                alt="Ama session"
                className="about-image"
                objectFit="cover"
              />
            </div>
            <div className="about-item--text">
              <h3>About Cohort</h3>
              <p>
                This is an intensive learning phase of the basics/foundations
                for all tracks, it serves as the introduction to the track for
                participants. This phase is for 4weeks, classes will be twice a
                week (Tuesdays & Thursdays 5 - 7 PM). Across all tracks
                participants will learn intensively as a beginner, mentors will
                be on the ground to teach, resources will be shared with the
                participants, assignments will be given as well, and there will
                be an eviction at the end of this phase upon final assessment to
                graduate into the learning phase.
              </p>
            </div>
          </div>
          <div className="mentees--container">
            <div className="mentee">
              <p className="mentee-track">Web3 - Blockchain Development</p>
              <div className="menteesNo">
                <h1>12</h1>
                <p>Mentees</p>
              </div>
            </div>
            <div className="mentee">
              <p className="mentee-track">Web3 - Blockchain Development</p>
              <div className="menteesNo">
                <h1>12</h1>
                <p>Mentees</p>
              </div>
            </div>
            <div className="mentee">
              <p className="mentee-track">Web3 - Blockchain Development</p>
              <div className="menteesNo">
                <h1>12</h1>
                <p>Mentees</p>
              </div>
            </div>
            <div className="mentee">
              <p className="mentee-track">Web3 - Blockchain Development</p>
              <div className="menteesNo">
                <h1>12</h1>
                <p>Mentees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACKS SECTION */}
      <section className="tracks">
          <div className="round-vector">
            <Image
              src="/assets/images/round-vector.png"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="crescent-vector">
            <Image
              src="/assets/images/crescent-vector.png"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div className="cylindrical">
            <Image
              src="/assets/images/cylindrical.png"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <h1>Tracks</h1>
          <div className="track-items">
            {TRACKS.map((item) => (
              <li className="track-item" key={item.title}>
                <div className="icons">
                <Image 
                    src={item.icons}
                    width={'40px'}
                    height={'40px'}
                    objectFit='contain' />
                  {/* <Image 
                    src={item.icons}
                    width={'40px'}
                    height={'2px'}
                    objectFit='contain'
                  /> */}
                  {/* <Image 
                    src="/assets/images/python.png"
                    width={'40px'}
                    height={'2px'}
                    objectFit='contain'
                  /> */}
                  {/* <Image 
                    src="/assets/images/js.png"
                    width={'40px'}
                    height={'2px'}
                    objectFit='contain'
                  /> */}
                  
                </div>
                <div className="title">
                  <h3>{item.title}</h3>
                </div>
               <div>

                <p>{item.description}</p>
               </div>
               <div>

                <Button
                    type={"outline"}
                    buttonText={item.buttonText}
                    handleClick={() => null}
                  ></Button>
               </div>
              </li>
            ))}
          </div>
      </section>

    {/* YOUTUBE SECTION */}
      <section className="visit container">
        <div className="container">
          <div className="hero_content">
            <h1>
              Visit our Youtube page <br></br> to see our videos
            </h1>
            <Button
              type={"primary"}
              buttonText={"Visit"}
              handleClick={() => null}
            />
            <div className="youtube">
              <Image
                className="youtube-img"
                width={"293px"}
                height={"272px"}
                objectFit="contain"
                src="/assets/images/youtube.png"
                alt="hero-image"
              />

              
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default cohortTwo;
 