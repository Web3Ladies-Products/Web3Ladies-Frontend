import React from "react";
import Button from "../buttons/Button";

const JoinAsMentor = () => {
  return (
    <div className="join-as-mentor-section">
      <div>
        <div>
          <div className="">
            <h1>Help us mentor more Ladies</h1>
            <p>Become a sponsor of Web3Ladies</p>
            <Button type="outlined-clear" buttonText="Join us now" />
          </div>
          <div className="">
            <h1>HAVE WHAT IT TAKES TO BE A MENTOR</h1>
            <p>Become a Mentor at Web3Ladies</p>
            <Button type="outlined-clear" buttonText="Apply now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinAsMentor;
