import React from "react";
import Accordion from "./accordion/Accordion";

const FAQs = ({ bootcamp }) => {
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title center mb-20">
          Frequently Asked Questions{" "}
        </h2>
        <Accordion panels={bootcamp.faqs} hasFullBorder />
      </div>
    </section>
  );
};

export default FAQs;
