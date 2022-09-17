import React from 'react';
import Button from './buttons/Button';
import Image from 'next/image';

export default function AboutSection({title,description,buttonText,handleClick}) {
  return (
    <div className="about-section">
    <div className="container">
      <div className="about--heading">
        <h1>{title}</h1>
        <Image
          className="hero-img"
          width="100"
          height="150"
          src="/assets/images/web3vector-img.png"
          alt="web3ladies-vector"
        />
      </div>
      <div className="about--content">
        <p className="about-text">
         {description}
        </p>
        <div className="introduction--container-cta">
          <Button
            type={"primary"}
            buttonText={buttonText}
            handleClick={() => null}
          />
          <Image
            className="arrow-img"
            width="67px"
            height="63px"
            objectFit="contain"
            src="/assets/images/arrow-img.png"
            alt="arrow-vector"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
