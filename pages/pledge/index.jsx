import React from "react";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";

const Pledge = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <section>
          <div className="container">
            <h1 className="section-title center">Take our pledge</h1>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pledge;
