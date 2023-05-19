import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Testimonials from "../../components/Testimonials";

import { strapiService } from "../../services/strapi.service";
import { useRouter } from "next/router";

import Supporters from "../../components/Supporters";

import Notification from "../../components/cohorts/Notification";

const mentees = [
  {
    id: "1",
    name: " Nzewi OCultist dummy",
    year: "Year of graduation: 2020",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "2",
    name: " Janet Jackson",
    year: "BinYear of graduation: 2020nce",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "3",
    name: " Mentee Jackson",
    year: "Year of graduation: 2020",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "4",
    name: " Mentee Jackson",
    year: "Year of graduation: 2020",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "1",
    name: " Nzewi OCultist dummy",
    year: "Year of graduation: 2020",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "2",
    name: " Janet Jackson",
    year: "BinYear of graduation: 2020nce",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "3",
    name: " Mentee Jackson",
    year: "Year of graduation: 2020",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
  {
    id: "4",
    name: " Mentee Jackson",
    year: "Year of graduation: 2020",
    jobRole: "Blockchain ",
    imageURL: "/assets/images/lone-woman.png",
  },
];
export default function HireTalent({ indexPage }) {
  const router = useRouter();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      {/* NOTIFICATION */}
      {indexPage?.show_new_cohort_notification && (
        // Registration for <strong>Cohort III</strong> is ongoing
        <Notification text={indexPage.cohort_notification_text} />
      )}

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
                  variant={"primary"}
                  buttonText={indexPage.button_one_text}
                  handleClick={() => router.push(indexPage.button_one_link)}
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
                  src="/assets/images/hiretalent-image.png"
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"113px"}
                  height={"121px"}
                  src="/assets/images/bitcoin.png"
                  alt="bitcoin-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* END OF HERO SECTION */}

      {/* SUPPORT SECTION */}
      <Supporters title={"Companies who trust us"} indexPage={indexPage} />
      {/* END OF SUPPORT SECTION */}
      <main className="hiretalent__content-details top-spacing">
        <div className="container cta">
          <h2>
            Get Talents Trained by <br /> Industry Leading Experts
          </h2>
          <p>
            Our students are trained by skilled experts with high-level
            experience to gain relevant skills solving real life problems{" "}
          </p>
          <div className="hiretalent__content-image">
            <img
              src="/assets/images/hiretalent-frame.png"
              alt="hiretalent-image-2"
            />
          </div>
        </div>
      </main>

      {/* Feeture mentees SECTION */}
      <main className="top-spacing top-mentors-section hiretalent__mentee-content">
        <div className="container cta">
          <div className="text">
            <h2>Featured Mentees</h2>
            <p>
              Our students are trained by skilled experts with high-level
              experience to gain relevant skills solving real life problems{" "}
            </p>
          </div>
          <div className=" mentor-card-wrapper">
            {mentees?.map(({ id, name, jobRole, year, imageURL }) => (
              <div key={id} className="top-mentors-card">
                <Image
                  className="arrow-img"
                  width="100%"
                  height="266px"
                  objectFit="cover"
                  src={imageURL}
                  alt="arrow-vector"
                />
                <div className="top-mentors-card-content">
                  <h2>{name}</h2>
                  <div>
                    <span>{jobRole}</span> &#124; <span>{year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="hiretalent__choose">
        <div className="container cta">
          <div className="content">
            <div>
              <h2>Why Choose Us</h2>
              <p>
                These mentors will be on the ground for all the mentorship
                activities, they are responsible for classes, responding to
                mentees’ concerns on slack, and grading mentees, they will also
                be compensated monthly.
              </p>
            </div>
            <ul>
              <li>
                <Image
                  width={"36px"}
                  height={"34px"}
                  objectFit="contain"
                  src="/icons/star.png"
                  alt="star"
                />
                <span className="text">Students are trained by experts</span>
              </li>
              <li>
                <Image
                  width={"36px"}
                  height={"34px"}
                  objectFit="contain"
                  src="/icons/star.png"
                  alt="star"
                />
                <span className="text">Students are trained by experts</span>
              </li>
            </ul>

            <div className="">
              <Button
                variant="inverse-primary"
                buttonText="Hire now"
                handleClick={() =>
                  window.open("/mentorship/register", "_blank")
                }
              />
            </div>
          </div>

          <div className="choose_image">
            <Image
              className="gains-image"
              width={"493px"}
              height={"472px"}
              objectFit="contain"
              src="/assets/images/why-hire-us.png"
              alt="gains-image"
            />
          </div>
        </div>
      </div>

      <section className="cta-card-section top-spacing hiretalent__talented">
        <div className="container">
          <div>
            <h1>
              Over <span>5000+</span> talented ladies trained on our platform
            </h1>

            <div>
              <Button buttonText="Hire now" type="primary" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}

      <div className="top-spacing">
        <Testimonials
          testimonial_title={indexPage.testimonials_title}
          testimonial_description={indexPage.testimonial_description}
          testimonial_items={indexPage.testimonial_items}
          hasMaxWidth={true}
        />
      </div>

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
