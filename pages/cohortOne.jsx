import Navbar from "../components/layouts/Navbar";
import Button from "../components/buttons/Button";
import Image from "next/image";
import Badge from "../components/Badge";
import ArrowRight from "../components/icons/ArrowRight";
import Gallery from "../components/Gallery";
import ArrowCircle from "../components/icons/ArrowCircle";

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

    const GALLERY = [
      {
        image: "/assets/images/gallery-1.png",
        caption: "Gallery 1"
      },
      {
        image: "/assets/images/gallery-2.png",
        caption: "Gallery 2"
      },
      {
        image: "/assets/images/gallery-3.png",
        caption: "Gallery 3"
      },
      {
        image: "/assets/images/gallery-4.png",
        caption: "Gallery 4"
      },
      {
        image: "/assets/images/gallery-5.png",
        caption: "Gallery 5"
      },
      {
        image: "/assets/images/gallery-6.png",
        caption: "Gallery 6"
      }
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
      <section className="testimonials">
        <div className="container">
          <h2 className="sub-section-title bold">Testimonials</h2>
          <div className="carousel">
            {TESTIMONIAL_ITEMS.map((testimonial) => (
              <div
                className="carousel-item card card--has-border"
                key={testimonial.name}
              >
                <div className="testimonial--header">
                  <div className="testimonial--header-image">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                    />
                  </div>
                  <div>
                    <h5 className="testimonial-text">{testimonial.role}</h5>
                    <span className="testimonial-name">{testimonial.name}</span>
                  </div>
                </div>
                <div className="testimonial--body">
                  <p className="testimonial-text">{testimonial.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-done">
        <div className="container">
          <div className="projects-done--heading">
            <h1 className="sub-section-title bold">Projects Done</h1>
            <Button
              type={"outline"}
              buttonText={"View all projects"}
              handleClick={() => null}
            />
          </div>
          <ul className="projects-done--container">
            {PROJECT_ITEMS.map((project) => (
              <li
                key={project.title}
                className="projects-done--item card card__black d-flex flex-column justify-content-between"
              >
                <div className="project-header d-flex align-items-center">
                  <div className="project-header--image">
                    <Image
                      src={project.avatar}
                      alt={project.title}
                      width={35}
                      height={35}
                    />
                  </div>
                  <div className="title">
                    <h3>{project.title}</h3>
                  </div>
                </div>
                <div className="about-project">
                  <h5>About Project</h5>
                  <p>{project.about}</p>
                </div>
                <div className="project-footer">
                  <div className="project-footer--cta">
                    <Button
                      type={"clear"}
                      buttonText={"View project"}
                      handleClick={() => null}
                      hasIcon
                    >
                      <span className="icon-right d-flex align-items-center">
                        <ArrowCircle fillColor={"#FF9EDB"} />
                      </span>
                    </Button>
                  </div>
                  <div className="project-category">
                    <Badge
                      badgeText={project.type}
                      badgeBackground={project.typeBackgroound}
                      handleClick={() => null}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
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
      <Gallery galleryItems={GALLERY} />


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
