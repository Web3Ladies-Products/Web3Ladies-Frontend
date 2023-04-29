import React from "react";
import HeroSection from "../../components/sponsorship/HeroSection";
import Navbar from "../../components/layouts/Navbar";

import Image from "next/image";

import Footer from "../../components/layouts/Footer";
import ContactSection from "./ContactSection";
import { strapiService } from "../../services";

const Hero = ({ indexPage }) => {
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

// export async function getStaticProps() {
//   const indexPage = await strapiService.getContactPage();
//   return {
//     props: {
//       indexPage: indexPage.data.attributes,
//     },
//   };
// }
