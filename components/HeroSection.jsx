import React from 'react';
import Image from "next/image"
import Button from "../components/buttons/Button";


const Hero = () => {
  return(
    <div className="track-hero-section">
      <div className="track-hero-text">
        <h1>Web3 - Blockchain Development</h1>
        <p>The Blockchain developer’s responsibility is to develop innovative solutions to challenging problems, including solutions for command and control, and high integrity.</p>
        <p className="note">*Registration ongoing for next cohort</p>
        <div className="btn-group">

        <Button
                  type={"outline"}
                  buttonText={"Learn More"}
                  handleClick={() => null}
                />
                <Button
                  type={"primary"}
                  buttonText={"Learn More"}
                  handleClick={() => null}
                
                />
        </div>   
      </div>
      <div className="img-cont">
      <Image
                  className=""
                  width={"493px"}
                  height={"472px"}
                  src="/assets/images/track-img.svg"
                  alt="hero-image"
                />
      </div>
    </div>
  )
}

export default Hero;