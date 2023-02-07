import React from "react";
import Certificate from "../../components/certificate/Certificate";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const Certificated = () => {
  
    return (
        <>
        <Navbar />
      <Certificate/>
      <div className="adjust">
      <Footer />
      </div>
       
        </>
    )
  }
  
  export default Certificated