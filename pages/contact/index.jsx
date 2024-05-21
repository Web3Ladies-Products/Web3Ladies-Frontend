import React from "react";

import { strapiService } from "../../services";
import Hero from "../../components/contact/Hero";

const contact = ({ indexPage }) => {
  return (
    <>
      <Hero contactDetails={indexPage} />
    </>
  );
};

export default contact;

export async function getStaticProps() {
  const indexPage = await strapiService.getContactPage();

  return {
    props: {
      indexPage: indexPage.data.attributes,
    },
  };
}
