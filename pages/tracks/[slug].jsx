import React from "react";

import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import Hero from "../../components/tracks/HeroSection";
import Why from "../../components/tracks/Why";
import Benefits from "../../components/BenefitsSection";
import Curriculum from "../../components/Curriculum";
import Gains from "../../components/Gains";
import Mentors from "../../components/Mentors";
import { FAQ_DATA } from "../api/feedback.json";
import FAQs from "../../components/FAQs";
import FreehandCard from "../../components/FreehandCard";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
import { strapiService } from "../../services";
const Tracks = ({track}) => {
  // console.log(track)

  
  if (!track) {
    return <Custom404Error/>;
  }
  const scrollToViewCurriculum = () => {
    const element = document.getElementById("curriculum");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Hero track={track} handleViewCurriculum={scrollToViewCurriculum} />
      <Why track={track} />
      <Benefits track={track} />
      <Curriculum track={track} />
      <Gains track={track} />
      <Mentors track={track} />
      <Mentors track={track} />
      <FeaturedMentees />
      <JoinAsMentor />
      <div className="mt-20"></div>
      <FAQs data={FAQ_DATA} />

      <div className="tracks__spacing">
        <FreehandCard />
      </div>

      <Footer />
    </div>
  );
};


export async function getStaticPaths() {
  const response = await strapiService.getTracks();
  const paths = response.data.map((track) => {
  //  console.log(response)
    return {
      params: {
        slug: track.attributes.slug,
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const response = await strapiService.getTracksBySlug(params.slug);
    const data = response.data[0]?.attributes;
  //  console.log(data)

    if (data) {
     
      
      return {
        props: {
          track: {
            ...data,
           
         
          },
        },
      };
    }
    return {
      props: {
        track: null,
        notFound: true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        track: null,
        notFound: true,
      },
    };
  }
}


export default  Tracks;


