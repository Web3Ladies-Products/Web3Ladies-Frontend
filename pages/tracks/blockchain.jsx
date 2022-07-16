import React from "react";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
import Hero from "../../components/tracks/HeroSection";
import WhyBlockchain from "../../components/tracks/WhyBlockchain";
import Benefits from "../../components/tracks/BenefitsSection";
import Curriculum from "../../components/tracks/Curriculum";
import OngroundMentors from "../../components/tracks/OngroundMentors";
import WorkshopMentors from "../../components/tracks/WorkshopMentors";
import Gains from "../../components/tracks/Gains";

const Blockchain = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyBlockchain />
      <Benefits />
      <Curriculum />
      <Gains />
      <OngroundMentors />
      <WorkshopMentors />
      <Footer />
    </div>
  );
};

export default Blockchain;
