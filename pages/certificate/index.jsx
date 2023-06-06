import React from "react";
import Certificate from "../../components/certificate/Certificate";
import Footer from "../../components/layouts/Footer";
import Navbar from "../../components/layouts/Navbar";
import { strapiService } from "../../services";

const Certificated = ({ indexPage }) => {
  return (
    <>
      <Navbar />
      <Certificate indexPage={indexPage} />
      <div className="adjust">
        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const indexPage = await strapiService.getCertificatePageData();

  console.log(indexPage);
  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}

export default Certificated;
