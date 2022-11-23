import Image from "next/image";
import React from "react";
import Button from "../../components/buttons/Button";

const ContactSection = ({ contactDetails}) => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content bootcamp">
            <h1 dangerouslySetInnerHTML={{ __html: contactDetails.title }} />
            <p>{contactDetails.description}</p>

            <div className="button-container">
              <Button
                variant={contactDetails.buttonType}
                buttonText={contactDetails.buttonText}
                handleClick={() => {
                  window.location.href =contactDetails.buttonLink;
                }}
              />
            </div>
          </div>

          <div className="hero_image">
            <div>
              <Image
                className="hero-image"
                width={"617px"}
                height={"445px"}
                src={contactDetails.image}
                alt="sponsorship-image"
              />
              <Image
                className="hero-illustration"
                width={"170px"}
                height={"68px"}
                src="/assets/images/web3ladies-vector.png"
                alt="web3ladies-vector"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactSection;
