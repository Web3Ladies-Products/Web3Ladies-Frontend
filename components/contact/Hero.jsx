import React from "react";
import Navbar from "../layouts/Navbar";

import Footer from "../layouts/Footer";
import ContactSection from "./ContactSection";

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
