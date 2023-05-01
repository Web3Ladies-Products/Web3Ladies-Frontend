import React from "react";
import Hero from "./Hero";
import { strapiService } from "../../services";

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
