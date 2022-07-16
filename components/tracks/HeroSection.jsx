import React from "react";
import Image from "next/image";
import Button from "../buttons/Button";

const Hero = () => {
  return (
    <main>
      <div className="container cta">
        <div className="content">
          <div className="hero_content">
            <h1>Web3 - Blockchain Development</h1>
            <p>
              The Blockchain developer’s responsibility is to develop innovative
              solutions to challenging problems, including solutions for command
              and control, and high integrity.
            </p>
            <p className="note">*Registration ongoing for next cohort</p>

            <div className="button-container">
              <Button
                type={"outline"}
                buttonText={"View curriculum"}
                handleClick={() => null}
              />
              <Button
                type={"primary"}
                buttonText={"Register now"}
                handleClick={() => null}
              />
            </div>
          </div>

          <div className="hero_image">
            <div>
              <Image
                className="hero-image"
                width={"493px"}
                height={"472px"}
                src="/assets/images/blockchain-dev.png"
                alt="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
