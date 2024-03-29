import React, { useEffect, useState } from "react";
import Accordion from "./accordion/Accordion";
import { strapiService } from "../services";

const FAQs = ({ data, title }) => {
  const [faqData, setFaqData] = useState({});
  useEffect(() => {
    const getData = async () => {
      try {
        const indexPage = await strapiService.getFQA();
        setFaqData(indexPage.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title center mb-20">
          {title ? title : faqData.title}
        </h2>
        <Accordion panels={data ? data : faqData.faq_data} hasFullBorder />
      </div>
    </section>
  );
};

export default FAQs;
