import React from "react";
import Accordion from "./accordion/Accordion";

const FAQs = ({ data }) => {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title center">Frequently Asked Questions </h2>
        <Accordion panels={data} hasFullBorder />
      </div>
    </section>
  );
};

export default FAQs;