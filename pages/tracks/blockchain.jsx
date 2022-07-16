import React from "react";
import Hero from "../../components/HeroSectionion";
import ExtraInfo from "../../components/ExtraInfoSectionion";
import Benefits from "../../components/BenefitsSectionion";
import Curriculum from "../../components/Curriculumlum";
import Navbar from "../../components/layouts/Navbar";
import Footer from "../../components/layouts/Footer";
// import OngroundMentors from '../components/OngroundMentors'
// import WorkshopMentors from '../components/WorkshopMentors'
import Gains from "../../components/Gainsins";

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
