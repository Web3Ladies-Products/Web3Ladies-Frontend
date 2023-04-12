import React from "react";
import HeroSection from "../../components/sponsorship/HeroSection";
import Navbar from "../../components/layouts/Navbar";

import Image from "next/image";

import Footer from "../../components/layouts/Footer";
import ContactSection from "./ContactSection";

const Hero = () => {
  const contactDetails = {
    title: "Contact Us",
    description: "We are eager to hear from you",
    image: "/assets/images/hero-image.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    buttonType: "primary",
  };
  return (
    <>
      <Navbar />
      <ContactSection contactDetails={contactDetails} />
      <Footer />
    </>
  );
};

export default Hero;
