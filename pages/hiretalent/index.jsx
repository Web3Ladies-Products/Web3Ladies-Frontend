import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";
import Highlights from "../../components/Highlights";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import Testimonials from "../../components/Testimonials";

import { strapiService } from "../../services/strapi.service";
import { useRouter } from "next/router";
import AboutSection from "../../components/AboutSection";
import Supporters from "../../components/Supporters";
import Pledge from "../../components/common/Pledge";

import Community from "../../components/analytics/Community";

import Notification from "../../components/cohorts/Notification";
import CTACard from "../../components/CTACard";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";

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

      <CTACard />
      {/* TESTIMONIALS SECTION */}

      <Testimonials
        testimonial_title={indexPage.testimonials_title}
        testimonial_description={indexPage.testimonial_description}
        testimonial_items={indexPage.testimonial_items}
        hasMaxWidth={true}
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
