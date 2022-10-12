import React from "react";
import HeroSection from "../../components/sponsorship/HeroSection";
import Navbar from "../../components/layouts/Navbar";
import sponsorshipData from "../api/sponsorship.json";
import Supporters from "../../components/Supporters";
import { strapiService } from "../../services";
import AboutSection from "../../components/AboutSection";
import Image from "next/image";
import Pledge from "../../components/common/Pledge";
import Highlights from "../../components/Highlights";
import Featured from "../../components/blog/Featured";
import Footer from "../../components/layouts/Footer";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import Button from "../../components/buttons/Button";

const Sponsorship = ({ indexPage, highlightsPosts, featuredPost }) => {
  const heroDetails = sponsorshipData.hero;
  return (
    <>
      <Navbar />
      <HeroSection heroDetails={heroDetails} />
      <Supporters
        title={sponsorshipData.supportersTitle}
        indexPage={indexPage}
      />
      <AboutSection
        title={sponsorshipData.aboutTitle}
        description={sponsorshipData.aboutDescription}
      />
      <section className="events donation">
        <div className="container">
          <ul className="events-list">
            {sponsorshipData.donationItems?.map((item, idx) => (
              <li className="events-item" key={idx}>
                <div className="events-item--image">
                  <Image
                    src={item.image}
                    width={"536px"}
                    height={"720px"}
                    alt={item.title}
                    className="events-image"
                    objectFit="cover"
                  />
                </div>
                <div className="events-item--text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.extras.map((extra) =>
                    extra.type === "pills" ? (
                      <div className="events-item--text--extra">
                        <h4>{extra.title}</h4>
                        <ul className="pill-container">
                          {extra.content.map((item, idx) => (
                            <li key={idx} className="pill">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="events-item--text--extra">
                        <h4>{extra.title}</h4>
                        <ul className="card achievements">
                          {extra.content.map((item, idx) => (
                            <li key={idx}>
                              <p>{item.title}</p>
                              <h6>{item.description}</h6>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                  <div className="button-container">
                    <Button
                      type={item.button_type_one}
                      buttonText={item.button_text_one}
                      handleClick={() => {
                        window.location.href = item.button_link_one;
                      }}
                    />
                    <Button
                      type={item.button_type_two}
                      buttonText={item.button_text_two}
                      handleClick={() => {
                        window.location.href = item.button_link_two;
                      }}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="mentorship sponsor">
        <div className="container">
          <h1
            className="section-title"
            dangerouslySetInnerHTML={{ __html: sponsorshipData.helpTitle }}
          />
          {sponsorshipData.helpLogos?.map((item) => (
            <div className="logo-container" key={item.name}>
              <Image
                src={item.logo}
                width={"204px"}
                height={"146px"}
                alt={item.title}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </section>
      <Pledge indexPage={indexPage} />

      {highlightsPosts && (
        <Highlights
          viewMore={true}
          viewMoreLink="/blog?tab=press"
          title={sponsorshipData.highlightsTitle}
          HIGHLIGHTS_ITEMS={highlightsPosts}
        >
          {featuredPost && (
            <Featured
              imageLeft={true}
              featuredPost={featuredPost}
              fullWidth={true}
            />
          )}
        </Highlights>
      )}
      <FAQs data={sponsorshipData.faqs} />
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

export default Sponsorship;

export async function getStaticProps() {
  try {
    const indexPage = await strapiService.getHomePageData();
    const pressReleasePosts = await strapiService.getPostsByCategory(
      1,
      10,
      "press"
    );
    const highlightsPosts = pressReleasePosts?.map((item) => {
      return {
        id: item.id,
        type: item?.attributes?.category,
        image: item?.attributes?.featured_image_url,
        title: item?.attributes?.title,
        background: "#E7D2FF",
        button_link: `/blog/${item?.attributes?.slug}`,
        button_text: "Read More",
      };
    });
    const featuredPost = pressReleasePosts?.filter(
      (item) => item["attributes"].isFeatured === true
    );
    return {
      props: {
        indexPage: indexPage.data.attributes,
        highlightsPosts,
        ...(featuredPost && { featuredPost: featuredPost[0] }),
      },
    };
  } catch (error) {
    return {
      props: {
        indexPage: {},
        highlightsPosts: [],
        featuredPost: null,
      },
    };
  }
}
