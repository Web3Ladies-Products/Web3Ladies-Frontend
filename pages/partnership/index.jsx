import React from "react";

import Navbar from "../../components/layouts/Navbar";
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
import NumberMarker from "../../components/icons/NumberMarker";
import { useRouter } from "next/router";

const Partnership = ({
  indexPage,
  sponsorshipData,
  highlightsPosts,
  featuredPost,
}) => {
  const router = useRouter();
  const title = "Join the big league. Become a <span>Web3Ladies Partner</span>";
  const get_list = [
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
    {
      content:
        "A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment ",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="">
        {/*START OF HERO SECTION*/}
        <div className="container cta">
          <div className=" content">
            <div className=" hero_content">
              <h1
                className="title section-title "
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p>
                Be a part of a community of confident and audacious <br /> Web3
                Ladies. We are always open to new members.
              </p>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText="Become a Partner"
                  handleClick={() => {
                    router.push("/partnership/register");
                  }}
                />
              </div>
            </div>

            <div className="hero_images">
              <div>
                <Image
                  className="hero-img"
                  width={"492px"}
                  height={"492px"}
                  objectFit="contain"
                  src="/assets/images/mentorship-hero-img.png"
                  alt="mentorship-img"
                />
                <Image
                  className="hero-img"
                  width={"178px"}
                  height={"58px"}
                  objectFit="contain"
                  src="/assets/images/eth-img.png"
                  alt="ethereum-logo"
                />
                <Image
                  className="hero-img"
                  width={"166px"}
                  height={"73px"}
                  objectFit="contain"
                  src="/assets/images/filecoin-img.png"
                  alt="filecoin-logo"
                />
                <Image
                  className="hero-img"
                  width={"187px"}
                  height={"49px"}
                  objectFit="contain"
                  src="/assets/images/polygon-img.png"
                  alt="polygon-logo"
                />
                <Image
                  className="hero-img"
                  width="100"
                  height="150"
                  objectFit="contain"
                  layout="fixed"
                  src="/assets/images/web3vector-img.png"
                  alt="web3ladies-vector"
                />
              </div>
            </div>
          </div>
        </div>
        {/*END OF HERO SECTION*/}
      </main>
      <Supporters title="Current Partners" indexPage={indexPage} />
      <AboutSection
        title={sponsorshipData.about_title}
        description={sponsorshipData.about_description}
        showArc={false}
      />

      <div className="partnership__price">
        <div className="container cta">
          <div className="content section__one">
            <h2>What you get</h2>
            <ul className="">
              {get_list.map((get, index) => {
                return (
                  <li key={index} className="">
                    <NumberMarker number={index + 1} />
                    <p>{get.content}</p>
                  </li>
                );
              })}
            </ul>
            <div className="">
              <Button
                variant="outline"
                buttonText="Become a Partner"
                handleClick={() =>
                  window.open("/partnership/register", "_blank")
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
              src="/assets/images/what_you_get.png"
              alt="gains-image"
            />
          </div>
        </div>
      </div>

      <section className="events donation">
        <div className="container">
          <ul className="events-list">
            {sponsorshipData.donation_items?.map((item, index) => (
              <li className="events-item" key={index}>
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
                          {extra.content.map((item, index) => (
                            <li key={index} className="pill">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="events-item--text--extra">
                        <h4>{extra.title}</h4>
                        <ul className="card achievements">
                          {extra.content.map((item, index) => (
                            <li key={index}>
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
                      variant={item.button_type_one}
                      buttonText={item.button_text_one}
                      handleClick={() => {
                        window.location.href = item.button_link_one;
                      }}
                    />

                    <Button
                      variant={item.button_type_two}
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
        <div className="container partnership__ecosystem">
          <h1
            className="section-title"
            dangerouslySetInnerHTML={{ __html: sponsorshipData.help_title }}
          />
          <div className="about__image-section">
            <Image
              className="hero-img "
              width="100"
              objectFit="contain"
              height="150"
              src="/assets/images/web3ladies-about-bounce.png"
              alt="web3ladies-vector"
            />
          </div>
        </div>
      </section>
      <Pledge indexPage={indexPage} />

      {highlightsPosts && (
        <Highlights
          viewMore={true}
          viewMoreLink="/blog?tab=press"
          title={sponsorshipData.highlights_title}
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

export default Partnership;

export async function getStaticProps() {
  try {
    const indexPage = await strapiService.getHomePageData();
    const sponsorshipPage = await strapiService.getSponsorshipData();
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
        sponsorshipData: sponsorshipPage.data.attributes,
        highlightsPosts,
        ...(featuredPost && { featuredPost: featuredPost[0] }),
      },
    };
  } catch (error) {
    return {
      props: {
        indexPage: {},
        sponsorshipData: {},
        highlightsPosts: [],
        featuredPost: null,
      },
    };
  }
}
