import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Testimonials from "../../components/Testimonials";

import { strapiService } from "../../services/strapi.service";
import { useRouter } from "next/router";

import Supporters from "../../components/Supporters";

export default function HireTalent({ indexPage }) {
  const router = useRouter();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h2
            dangerouslySetInnerHTML={{ __html: indexPage.get_talent_title }}
          />
          <p>{indexPage.get_talent_description}</p>
          <div className="hiretalent__content-image">
            <img src={indexPage.get_talent_frame} alt="hiretalent-image-2" />
          </div>
        </div>
      </main>

      {/* Feeture mentees SECTION */}
      <main className="top-spacing top-mentors-section hiretalent__mentee-content">
        <div className="container cta">
          <div className="text">
            <h2>{indexPage.mentees_title}</h2>
            <p>{indexPage.mentees_description}</p>
          </div>
          <div className=" mentor-card-wrapper">
            {indexPage.mentees?.map(({ id, name, jobRole, year, imageURL }) => (
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
              <h2>{indexPage.why_title}</h2>
              <p>{indexPage.why_description}</p>
            </div>
            <ul>
              {indexPage.why_lists?.map((item, index) => (
                <li key={index}>
                  <Image
                    width={"36px"}
                    height={"34px"}
                    objectFit="contain"
                    src="/icons/star.png"
                    alt="star"
                  />
                  <span className="text">{item.content}</span>
                </li>
              ))}
            </ul>

            <div className="">
              <Button
                variant="inverse-primary"
                buttonText={indexPage.why_btn_text}
                handleClick={() =>
                  window.open(indexPage.why_btn_link, "_blank")
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
              src={indexPage.why_frame}
              alt="gains-image"
            />
          </div>
        </div>
      </div>

      <section className="cta-card-section top-spacing hiretalent__talented">
        <div className="container">
          <div>
            <h1
              dangerouslySetInnerHTML={{
                __html: indexPage.history_title,
              }}
            />

            <div>
              <Button
                buttonText={indexPage.history_btn_text}
                handleClick={() =>
                  window.open(indexPage.history_btn_link, "_blank")
                }
                type="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}

      <div className="top-spacing">
        <Testimonials
          testimonial_title={indexPage.testimonial_title}
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
  const indexPage = await strapiService.getHireTalentPageData();

  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
