import React from "react";
import { useRouter } from "next/router";
import trackData from "../../data/track_data.json";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import Hero from "../../components/tracks/HeroSection";
import Why from "../../components/tracks/Why";
import Benefits from "../../components/tracks/BenefitsSection";
import Curriculum from "../../components/tracks/Curriculum";
import OngroundMentors from "../../components/tracks/OngroundMentors";
import WorkshopMentors from "../../components/tracks/WorkshopMentors";
import Gains from "../../components/tracks/Gains";

const Track = () => {
  const { query } = useRouter();
  const { trackSlug } = query;
  const track = trackData.find((track) => track.slug === trackSlug);

  if (!track) {
    return <div>Track not found</div>;
  }

  return (
    <div>
      <Navbar />
      <Hero data={track.hero} />
      <Why data={track.why} />
      <Benefits data={track.benefits} />
      <Curriculum data={track.curriculum} />
      <Gains data={track.gains} />
      <OngroundMentors data={track.ongroundMentors} />
      <WorkshopMentors data={track.workshopMentors} />
      <Footer />
    </div>
  );
};

export default Track;
