import React from "react";
import { useRouter } from "next/router";
import trackData from "../api/tracks.json";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import Hero from "../../components/tracks/HeroSection";
import Why from "../../components/tracks/Why";
import Benefits from "../../components/BenefitsSection";
import Curriculum from "../../components/Curriculum";
import Gains from "../../components/Gains";
import Mentors from "../../components/Mentors";
import { FAQ_DATA } from "../../pages/api/feedback";
import FAQs from "../../components/FAQs";
import FreehandCard from "../../components/FreehandCard";
import JoinAsMentor from "../../components/mentorship/JoinAsMentor";
import FeaturedMentees from "../../components/mentorship/FeaturedMentees";
const Track = ({ sponsorshipData }) => {
  const { query } = useRouter();
  const { trackSlug } = query;
  const track = trackData.find((track) => track.slug === trackSlug);

  if (!track) {
    return <div>Track not found</div>;
  }

  const scrollToViewCurriculum = () => {
    const element = document.getElementById("curriculum");
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Hero data={track.hero} handleViewCurriculum={scrollToViewCurriculum} />
      <Why data={track.why} />
      <Benefits data={track.benefits} />
      <Curriculum data={track.curriculum} />
      <Gains data={track.gains} />
      <Mentors data={track.ongroundMentors} />
      <Mentors data={track.workshopMentors} />
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

export default Track;
