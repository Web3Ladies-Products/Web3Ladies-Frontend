import React from 'react';
import Button from './buttons/Button';
import Mark from './Mark';

const Benefits = () => {
  return(
    <div className="benefits-section">
      <h2>Is this track right for you?</h2>
      <p>You will benefit from this programme if you are:</p>
      <div className="benefit">
        <Mark/>
        <p>A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment </p>
        </div>
    
      <div className="benefit">
        <Mark/> 
        <p>A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment </p>
        </div>
      <div className="benefit">
        <Mark/> 
        <p>A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment </p>
        </div>

        <div className="benefit">
        <Mark/> 
        <p>A professional looking for deeper knowledge about the impact and applications of blockchain technologies in a business environment </p>
        </div>
        <Button
                  type={"primary"}
                  buttonText={"Register now"}
                  handleClick={() => null}
                />
    </div>
  )
}

export default Benefits;