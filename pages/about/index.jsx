import React from "react";
import Supporters from "../../components/Supporters";
import Navbar from "../../components/layouts/Navbar";
import { useRouter } from "next/router";
import Button from "../../components/buttons/Button";
import Image from "next/image";
import { strapiService } from "../../services";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/layouts/Footer";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import MentorCard from "../../components/tracks/MentorCard";

const About = ({ indexPage, joinData }) => {
  const router = useRouter();
  const teams = [
    {
      name: "Janet Simpson",
      role: "Blockchain Developer at Binance",
      image: "/assets/images/mentor.png",
    },
    {
      name: "Janet Simpson",
      role: "Blockchain Developer at Binance",
      image: "/assets/images/mentor.png",
    },
    {
      name: "Janet Simpson",
      role: "Blockchain Developer at Binance",
      image: "/assets/images/mentor.png",
    },
    {
      name: "Janet Simpson",
      role: "Blockchain Developer at Binance",
      image: "/assets/images/mentor.png",
    },
    {
      name: "Janet Simpson",
      role: "Blockchain Developer at Binance",
      image: "/assets/images/mentor.png",
    },
    {
      name: "Janet Simpson",
      role: "Blockchain Developer at Binance",
      image: "/assets/images/mentor.png",
    },
  ];
  const aims = [
    {
      icon: "/icons/vision-icon.png",
      title: "Vision",
      description:
        "To become the number one sought after community of vibrant, creative and innovative ladies in the tech space.",
    },
    {
      icon: "/icons/mission-icon.png",
      title: "Our Mission",
      description:
        "To bridge the gap between tech aspirers and the actual representation of ladies in tech companies across the world. We plan to do this by raising self confident women who are self aware and who have a fighting chance to compete favorably in the tech ecosystem.",
    },
  ];
  return (
    <>
      <Navbar />
      <main className="about__hero">
        {/*START OF HERO SECTION*/}
        <div className="container cta">
          <div className=" content">
            <div className=" hero_content">
              <h1 className="title section-title ">About Web3Ladies</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                volutpat, ligula lorem tristique amet sit egestas faucibus
                aliquet. Dui neque mauris arcu eu. Condimentum posuere a
                tincidunt ullamcorper ac. Velit nulla at metus urna lobortis
                egestas laoreet pretium augue.
              </p>
            </div>

            <div className="about__hero-images">
              <div className="about-hero-vector">
                <img
                  src="/assets/images/about-hero-vector.png"
                  alt="mentorship-img"
                />
              </div>
              <div className="hero__img-ovarlay">
                <Image
                  width={"319px"}
                  height={"246px"}
                  objectFit="contain"
                  src="/assets/images/what_you_get.png"
                  alt="mentorship-img"
                />
              </div>
              <div className="hero-img">
                <Image
                  width={"492px"}
                  height={"492px"}
                  objectFit="contain"
                  src="/assets/images/what_you_get.png"
                  alt="mentorship-img"
                />
              </div>
            </div>
          </div>
        </div>
        {/*END OF HERO SECTION*/}
      </main>
      <Supporters title="Current Partners" indexPage={indexPage} />

      <div className="about__history ">
        <div className="container cta">
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
          <div className="content section__one">
            <h2>What you get</h2>

            <div className="">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                volutpat, ligula lorem tristique amet sit egestas faucibus
                aliquet. Dui neque mauris arcu eu. Condimentum posuere a
                tincidunt ullamcorper ac. Velit nulla at metus urna lobortis
                egestas laoreet pretium augue.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                volutpat, ligula lorem tristique amet sit egestas faucibus
                aliquet. Dui neque mauris arcu eu. Condimentum posuere a
                tincidunt ullamcorper ac. Velit nulla at metus urna lobortis
                egestas laoreet pretium augue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="about__spacing-top about__vision">
        <div className="container cta">
          {aims.map((aim, index) => (
            <div className="content" key={index}>
              <div className="">
                <Image
                  className="hero-img"
                  width={"72px"}
                  height={"72px"}
                  objectFit="contain"
                  src={aim.icon}
                  alt={aim.title}
                />
              </div>
              <h3>{aim.title}</h3>
              <p>{aim.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="about__spacing-top">
        <div className="container cta">
          <h2>Out impact Readmap</h2>
        </div>
      </section>
      <div className="about__spacing-top">
        <section className=" about__founder">
          <h2>About Out Founder</h2>
          <div className="content">
            <div className="founder-img">
              <Image
                width={"410px"}
                height={"480px"}
                objectFit="contain"
                className=""
                src="/assets/images/test-founder.png"
                alt="mentorship-img"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              faucibus diam at amet, rhoncus vel tristique. Consequat in ut
              feugiat aenean quisque. Ac lacus aliquet lacus risus id enim odio
              phasellus. Nibh vitae venenatis, lorem a habitant. Nisl ornare
              nullam et tellus, suspendisse. Et leo, ultricies nec, enim
              pellentesque urna. Dui felis in volutpat cum ultrices aenean
              suspendisse adipiscing.
            </p>
            <p>
              Rutrum eget felis sit nisi, turpis facilisis enim. Tortor fames
              cursus nisl tellus mattis nec. Eu faucibus viverra commodo urna,
              in sit tincidunt. Est sit phasellus integer sagittis quam feugiat
              dolor. Urna, in amet, scelerisque lacinia netus aliquam feugiat
              sollicitudin tincidunt.
            </p>
            <p>
              Convallis at et sed amet augue sagittis. Non justo, leo, sed mi
              vestibulum. At mauris lacinia ornare magna. Vitae erat leo
              vulputate aliquam mauris ut pellentesque viverra. Vel accumsan,
              mattis feugiat quis risus pharetra non vitae. Adipiscing nulla
              volutpat suspendisse urna ultricies mi mauris. Leo, risus nunc
              nibh vivamus leo, sed aenean morbi. In mauris quis vitae augue
              senectus ipsum tempus. Accumsan blandit vulputate donec urna
              faucibus phasellus nunc lorem
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis
              faucibus diam at amet, rhoncus vel tristique. Consequat in ut
              feugiat aenean quisque. Ac lacus aliquet lacus risus id enim odio
              phasellus. Nibh vitae venenatis, lorem a habitant. Nisl ornare
              nullam et tellus, suspendisse. Et leo, ultricies nec, enim
              pellentesque urna. Dui felis in volutpat cum ultrices aenean
              suspendisse adipiscing.
            </p>
            <p>
              Rutrum eget felis sit nisi, turpis facilisis enim. Tortor fames
              cursus nisl tellus mattis nec. Eu faucibus viverra commodo urna,
              in sit tincidunt. Est sit phasellus integer sagittis quam feugiat
              dolor. Urna, in amet, scelerisque lacinia netus aliquam feugiat
              sollicitudin tincidunt.
            </p>
            <p>
              Convallis at et sed amet augue sagittis. Non justo, leo, sed mi
              vestibulum. At mauris lacinia ornare magna. Vitae erat leo
              vulputate aliquam mauris ut pellentesque viverra. Vel accumsan,
              mattis feugiat quis risus pharetra non vitae. Adipiscing nulla
              volutpat suspendisse urna ultricies mi mauris. Leo, risus nunc
              nibh vivamus leo, sed aenean morbi. In mauris quis vitae augue
              senectus ipsum tempus. Accumsan blandit vulputate donec urna
              faucibus phasellus nunc lorem suspendisse. Ullamcorper venenatis
              feugiat amet laoreet posuere ultrices ornare interdum eget.
            </p>
          </div>
        </section>
      </div>
      <div className="about__spacing-top">
        <JoinAsMentor joinData={joinData} />
      </div>

      <section className="about__spacing-top mentors-section">
        <div className="container">
          <h2 className="heading">Meet the Team</h2>

          <div className="mentors-container">
            {teams.map((mentor, index) => {
              return <MentorCard key={index} mentor={mentor} />;
            })}
          </div>
        </div>
      </section>
      <section className="mentors-section">
        <div className="container">
          <h2 className="heading">Contributors</h2>

          <div className="mentors-container">
            {teams.map((mentor, index) => {
              return <MentorCard key={index} mentor={mentor} />;
            })}
          </div>
        </div>
      </section>
      <section className=" about__spacing-top mentorship about__contribution">
        <div className="content">
          <h1 className="section-title">Become a Contributor</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
            volutpat, ligula lorem tristique amet sit egestas faucibus aliquet.
            Dui neque mauris arcu eu. Condimentum posuere a tincidunt
            ullamcorper ac.
          </p>
          <Button
            variant={"outline"}
            buttonText="Apply now"
            handleClick={() => {
              router.push("/mentorship/register");
            }}
          />
        </div>
      </section>

      {/* JOIN OUR COMMUNITY SECTION */}
      <section
        className=" about__spacing-top who-we-are"
        id="join-our-community"
      >
        <div className="container wrapper">
          <div className="who-we-are--container">
            <div className="who-we-are--content">
              <h3
                className="section-title"
                dangerouslySetInnerHTML={{
                  __html: indexPage.join_our_community_title,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: indexPage.join_our_community_description,
                }}
              />
              <div className="who-we-are--content-cta">
                <Button
                  variant={"outline"}
                  width={"243px"}
                  handleClick={() =>
                    window.open(
                      indexPage.join_our_community_button_link,
                      "_blank"
                    )
                  }
                  hasIcon
                >
                  <span className="icon-left">{/* <Slack /> */}</span>
                  {indexPage.join_our_community_button_text}
                </Button>
              </div>
            </div>
            <div className="who-we-are--img">
              <Image
                src={indexPage.join_our_community_image_url}
                width={"532px"}
                height={"500px"}
                objectFit="contain"
                alt="community-image"
              />
            </div>
          </div>
        </div>
      </section>
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

export default About;

export async function getStaticProps() {
  const indexPage = await strapiService.getHomePageData();
  const joinData = await strapiService.getJoinAsMentor();
  return {
    props: {
      indexPage: indexPage.data.attributes,
      joinData: joinData.data.attributes,
    },
  };
}
