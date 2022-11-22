import React from 'react'
import HeroSection from "../../components/sponsorship/HeroSection";
import Navbar from "../../components/layouts/Navbar";

import Image from "next/image";

import Footer from "../../components/layouts/Footer";
import ContactSection from './ContactSection';

const Hero = () => {
  const contactDetails = {
    title: "Contact Us",
    description: "We are here to help you. Feel free to contact us.",
    image: "/images/contact/hero.png",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    buttonType: "primary",

  };
  return (
   <>
   <Navbar />
      <ContactSection contactDetails ={contactDetails } />
      <Footer />
   </>
  )
}

export default Hero