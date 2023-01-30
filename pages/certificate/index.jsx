import React from "react";
import Cert from "../../components/certificate/Cert";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const Certificate = () => {
  
    return (
        <>
        <Navbar />
      <Cert/>
      <div className="adjust">
      <Footer />
      </div>
       
        </>
    )
  }
  
  export default Certificate