import React from "react";
import Hero from "../../components/tracks/HeroSection";
import ExtraInfo from "../../components/tracks/ExtraInfoSection";
import Benefits from "../../components/tracks/BenefitsSection";
import Curriculum from "../../components/tracks/Curriculum";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
// import OngroundMentors from '../components/OngroundMentors'
// import WorkshopMentors from '../components/WorkshopMentors'
import Gains from "../../components/tracks/Gains";

const Blockchain = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExtraInfo />
      <Benefits />
      <Curriculum />
      <Gains />
      {/* <OngroundMentors/>
     <WorkshopMentors/> */}
      <Footer />
    </div>
  );
};

export default Blockchain;
