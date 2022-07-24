import Navbar from "../components/layouts/Navbar";
import Button from "../components/buttons/Button";
import Image from "next/image";
import Badge from "../components/Badge";
import ArrowRight from "../components/icons/ArrowRight";

const cohortOne = () => {
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
  ];

  const PROJECT_ITEMS = [
    {
      avatar: "/assets/images/avatar.png",
      title: "Dexa Wallet",
      about:
        "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      buttonLink: null,
      type: "Web3 - Blockchain Development",
      typeBackgroound: "#7D0BFE",
    },
    {
      avatar: "/assets/images/avatar.png",
      title: "Dexa Wallet",
      about:
        "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      buttonLink: null,
      type: "Web2 - Blockchain Development",
      typeBackgroound: "#FE471F",
    },
    {
      avatar: "/assets/images/avatar.png",
      title: "Dexa Wallet",
      about:
        "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      buttonLink: null,
      type: "  UI/UX - Product Design",
      typeBackgroound: "#2652EF",
    },
    {
      avatar: "/assets/images/avatar.png",
      title: "Dexa Wallet",
      about:
        "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      buttonLink: null,
      type: "Prouct Management",
      typeBackgroound: "#00B876",
    },
  ];

  const TESTIMONIAL_ITEMS = [
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!",
      },
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities! I am gratefully for the support I received whilst starting my journey into tech. I hope other women get the same experience with LDT",
      },
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities! I am gratefully for the support I received whilst starting my journey into tech. I hope other women get the same experience with LDT.  I hope other women get the same experience with LDT",
      },
      {
        name: "Student",
        role: "Web3 Designer",
        image: "/assets/images/testimonial-image.png",
        quote:
          "LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities! I am gratefully for the support I received whilst starting my journey into tech. I hope other women get the same experience with LDT",
      },
    ];

  return (
    <>
      <Navbar />
      {/* HERO SECTION */}
      <main className="">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <Badge 
                badgeText="PAST"
                badgeBackground={"#FFFFFF"}
                badgeBorderColor={"#000000"}
              />
              <h1>Cohort One</h1>
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

      {/* SUMMARY SECTION */}
      <section>
        <div className="container summary">
          <div className="summary-title">
            <h1>Summary</h1>
          </div>
          <div className="summary-content">
            <div className="summary-text">
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
            <div className="metrics">
              <h1 className="metrics-heading">Metrics</h1>
              <ul className="metrics-container">
                <li>
                  <h3>54</h3>
                  <span className="metrics-text"> Mentees</span>
                </li>
                <li>
                  <h3>3</h3>
                  <span className="metrics-text"> Alumni</span>
                </li>
                <li>
                  <h3>24</h3>
                  <span className="metrics-text"> Mentors</span>
                </li>
              </ul>
              {/* <div className="numbers">
                <div>
                  <h2>54</h2>
                  <p>Mentees</p>
                </div>
                <div>
                  <h2>85</h2>
                  <p>Alumni</p>
                </div>
                <div>
                  <h2>24</h2>
                  <p>Mentors</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* MENTEES SECTION */}
      <section className="mentees-wrapper">
        <div className="container">
          <h1>Mentee Experience</h1>
          <div className="mentees">
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
            <div className="mentee">
              <Image
                width={"282px"}
                height={"308px"}
                src="/assets/images/mentee.png"
                alt="mentee-image"
              />
              <h1>Janet Simpson</h1>
              <p>Product Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
       <section>
        <div className="container">
          <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial-card">
              {TESTIMONIAL_ITEMS.map((item) => (
                 <li className="testimonial-content" key={item.name}>
                 <div className="title">
                   <div>
                     <Image
                       src={item.image}
                       width={"30px"}
                       height={"30px"}
                     />
                   </div>
                   <div>
                     <h1>{item.name}</h1>
                     <p>{item.role}</p>
                   </div>
                 </div>
                 <div className="about">
                   <p>{item.quote}</p>
                 </div>
                 
               </li>
              ))}
              {/* <div className="testimonial-content">
              <div className="title">
                <div>
                  <Image
                    src="/assets/images/student.png"
                    width={"30px"}
                    height={"30px"}
                  />
                </div>
                <div>
                <h1>Student</h1>
                <p>Web3 Designer</p>

                </div>
              </div>
              <div className="about">
                <p>LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!</p>
              </div>
              </div>
              <div className="testimonial-content">
              <div className="title">
                <div>
                  <Image
                    src="/assets/images/student.png"
                    width={"30px"}
                    height={"30px"}
                  />
                </div>
                <div>
                <h1>Student</h1>
                <p>Web3 Designer</p>
                
                </div>
              </div>
              <div className="about">
                <p>LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!</p>
              </div>
              </div>
              <div className="testimonial-content">
              <div className="title">
                <div>
                  <Image
                    src="/assets/images/student.png"
                    width={"30px"}
                    height={"30px"}
                  />
                </div>
                <div>
                <h1>Student</h1>
                <p>Web3 Designer</p>

                </div>
              </div>
              <div className="about">
                <p>LDT has been amazing at helping me break into the tech space. When I first joined as a member I was welcomed and offered very useful advice and opportunities!</p>
              </div>
              </div> */}
            </div>
          </div>
        </div>
      </section> 

      {/* PROJECTS SECTION */}
      <section>
        <div className="container projects">
          <div className="projects-title">
            <h1>Projects Done</h1>
            <Button
              type={"outline"}
              buttonText={"View all Projects"}
              handleClick={() => null}
            />
          </div>
          <div className="project-cards">
            {PROJECT_ITEMS.map((item) => (
              <li className="project-card" key={item.type}>
                <div className="title">
                  <div>
                    <Image
                      src="/assets/images/avatar.png"
                      width={"30px"}
                      height={"30px"}
                    />
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                  </div>
                </div>
                <div className="about">
                  <h1>About Project</h1>
                  <p>{item.about}</p>
                </div>
                <div className="footer">
                  <p>View Project</p>

                  <div className="footer-link">
                    <Badge
                      badgeText={item.type}
                      badgeBackground={item.typeBackgroound}
                    />
                  </div>
                </div>
              </li>
            ))}
          </div>
        </div>
      </section>

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
      <section>
        <div className="container gallery">
          <h1>Gallery</h1>
          <div className="gallery-images">
            <div className="images">
              <Image
                src="/assets/images/gallery-image.png"
                width={"497px"}
                height={"350px"}
                alt="gallery-image"
              />
            </div>
            <div className="images">
              <Image
                src="/assets/images/gallery-image.png"
                width={"497px"}
                height={"350px"}
                alt="gallery-image"
              />
            </div>

            <div className="images">
              <Image
                src="/assets/images/gallery-image-2.png"
                width={"497px"}
                height={"350px"}
                alt="gallery-image"
              />
            </div>
            <div className="images">
              <Image
                src="/assets/images/gallery-image-3.png"
                width={"497px"}
                height={"350px"}
                alt="gallery-image"
              />
            </div>
            <div className="images">
              <Image
                src="/assets/images/gallery-image-4.png"
                width={"497px"}
                height={"350px"}
                alt="gallery-image"
              />
            </div>
            <div className="images">
              <Image
                src="/assets/images/gallery-image-4.png"
                width={"497px"}
                height={"350px"}
                alt="gallery-image"
              />
            </div>
          </div>
        </div>
      </section>

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

export default cohortOne;
