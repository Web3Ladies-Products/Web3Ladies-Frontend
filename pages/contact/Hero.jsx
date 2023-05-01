import React from "react";
import HeroSection from "../../components/sponsorship/HeroSection";
import Navbar from "../../components/layouts/Navbar";

import Image from "next/image";

import Footer from "../../components/layouts/Footer";
import ContactSection from "./ContactSection";
import { strapiService } from "../../services";

const Hero = ({ contactDetails }) => {
  return (
    <>
      <Navbar />
      <ContactSection contactDetails={contactDetails} />
      <Footer />
    </>
  );
};

export default Hero;
