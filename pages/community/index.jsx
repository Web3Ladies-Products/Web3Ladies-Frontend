import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/layouts/Navbar";
import communityData from "../../pages/api/community.json";
import Image from "next/image";
import Footer from "../../components/layouts/Footer";
import Button from "../../components/buttons/Button";
import WhyUsSection from "../../components/WhyUsSection";
import CommunityEvents from "../../components/CommunityEvents";
import Slack from "../../components/icons/Slack";
import CommunityClubs from "../../components/CommunityClubs";
import Gallery from "../../components/Gallery";
import FAQs from "../../components/FAQs";
import Testimonials from "../../components/Testimonials";
import CommunityTestimonial from "../../components/CommuintyTestimonial";

const Community = () => {
  const communityHome = communityData.home;
  const router = useRouter();

  // React.useEffect(() => {
  //   router.push("/");

  // }, []);

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section>
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1 className="section-title">{communityHome.hero.title}</h1>
              <p className="section-text">{communityHome.hero.text}</p>
              <div className="button-container">
                <Button
                  variant={"primary"}
                  buttonText={communityHome.hero.buttonText}
                  handleClick={() => router.push(communityHome.hero.buttonLink)}
                />
              </div>
            </div>

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"380px"}
                  height={"438px"}
                  src="/assets/images/community-polygon.png"
                  alt="hero-image"
                />
                <Image
                  className="hero-illustration"
                  width={"105px"}
                  height={"95px"}
                  src="/assets/images/web3-vector.png"
                  alt="bitcoin-logo"
                />
                <Image />
                <Image
                  className="hero-illustration"
                  width={"355px"}
                  height={"121px"}
                  src="/assets/images/web3ladies-union.png"
                  alt="ethereum-logo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF HERO SECTION */}

      {/* WHYUS SECTION */}
      <WhyUsSection />
      {/* END OF WHYUS SECTION */}

      {/* ANALYTICS SECTION */}
      <section className="analytics">
        <div className="container">
          <ul className="analytics--container groups-container">
            {communityHome.analytics.no_number?.map((number) => (
              <li key={number.title} className="group-item">
                <h3 className="section-title">{number.noOfNumber}</h3>
                <h6 className="analytics--text"> {number.title} </h6>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* END OF ANALYTICS SECTION */}

      {/* COMMUINTY EVENT SECTION */}
      <CommunityEvents />
      {/* END OF COMMUINTY EVENT  SECTION */}

      {/* HOW TO JOIN SECTION */}

      <main className="community">
        <div className="container why">
          <div className>
            <h1 className="why--heading">{communityHome.join.title}</h1>
          </div>
        </div>

        <div style={{ marginTop: "30px" }}>
          <ul className=" container highlights--container">
            {communityHome.how_to_join?.map((item, index) => (
              <li key={index} className="highlight--container-item">
                <div className="grid-container">
                  <div className="">
                    <img src={item.image} className="grid-container--image" />
                  </div>
                  <div className="highlights--container-item--text">
                    <h4 className="item-text">{item.step}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="container why">
            <div className="sub-heading">
              <h1 className="">
                <Button
                  variant={"outline"}
                  width={"243px"}
                  handleClick={() =>
                    window.open(communityHome.join.buttonLink, "_blank")
                  }
                  hasIcon
                >
                  <span className="icon-left">
                    <Slack />
                  </span>
                  {communityHome.join.buttonText}
                </Button>
              </h1>
            </div>
          </div>
        </div>
      </main>
      {/* END OF JOIN  SECTION */}

      {/* COMMUINTY CLUB SECTION */}
      <CommunityClubs />
      {/* END OF COMMUINTY CLUB  SECTION */}

      {/* YOUTUBE SECTION */}

      <section className="con-cta">
        <div className="container cta">
          <div className="content">
            <div className="hero_content">
              <h1 className="section-title">
                {communityHome.youtube_section.title}
              </h1>

              <div className="button-container">
                <Button
                  variant={"primary"}
                  style={{ width: "165px" }}
                  buttonText={communityHome.youtube_section.buttonText}
                  handleClick={() =>
                    router.push(communityHome.youtube_section.buttonLink)
                  }
                />
              </div>
            </div>

            <div className="hero_image">
              <div>
                <Image
                  className="hero-image"
                  width={"380px"}
                  height={"400px"}
                  src="/assets/images/youtube.png"
                  alt="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF YOUTUBE SECTION */}

      {/* COMMUINTY SECTION */}
      <section>
        <div className="container-join">
          <div className="container why">
            <div>
              <h1 className="why--heading" id="why--heading">
                {communityHome.join.buttonText}
              </h1>

              <p className="why--text">{communityHome.join.description}</p>
            </div>
          </div>
          <div className="container why">
            <div className="sub-heading">
              <h1 className="">
                <Button
                  variant={"outline"}
                  width={"243px"}
                  handleClick={() =>
                    window.open(communityHome.join.buttonLink, "_blank")
                  }
                  hasIcon
                >
                  <span className="icon-left">
                    <Slack />
                  </span>
                  {communityHome.join.buttonText}
                </Button>
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* END OF COMMUINTY  SECTION */}

      {/* GALLERY SECTION */}
      <section className="gallery">
        <div className="container">
          <div className="gallery--heading">
            <h1 className="sub-section-title bold">
              {" "}
              {communityHome.galleryItem.title}
            </h1>
          </div>
          <ul className="gallery--container">
            {communityHome.gallery.map((item, index) => (
              <li className="gallery--container-item" key={index}>
                <div className="gallery--container-item--image">
                  <Image
                    src={item.image}
                    width={"415px"}
                    height={"314px"}
                    objectFit="contain"
                    alt="gallery-image"
                  />
                </div>
                <div className="gallery--container-item--text">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/*END OF GALLERY SECTION */}

      {/*FAQ */}
      <FAQs data={communityHome.faqs} />
      {/*FAQ */}

      {/* TESTIMONIALS SECTION */}
      <CommunityTestimonial />
      {/* END OF TESTIMONIALS SECTION */}

      {/* END OF TRANING SECTION */}
      <section className="hands-training">
        <div className="container">
          <div className="hands-training--container groups-container">
            <div className="crescent-vector">
              {/* <Image
                src="/assets/images/crescent-vector.png"
                width={"100%"}
                height={"100%"}
                alt="crescent-vector"
              /> */}

              {/* <div className="round-vector">
                <Image
                  src="/assets/images/down-pyramid.png"
                  width={"100%"}
                  height={"100%"}
                  alt="crescent-vector"
                />
              </div> */}
            </div>
            <div className="container cta">
              <div className="content">
                <div className="hero_content">
                  <h1 className="section-title">{communityHome.train.title}</h1>
                  <p className="">{communityHome.train.description}</p>
                  <div className="container why">
                    <div className="sub-heading">
                      <h1 style={{ marginRight: "30px" }}>
                        <img
                          src="/assets/images/spiral.png"
                          className="spiral-vector"
                        />
                        <Button variant={"primary"} width={"243px"}>
                          {communityHome.train.buttonText}
                        </Button>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END OF TRAINING SECTION */}

      <Footer />
    </>
  );
};
export default Community;
