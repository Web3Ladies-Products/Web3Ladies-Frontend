import React, { useState } from "react";
import { phaseData } from "../../../pages/api/feedback";
import TabButton from "./TabButton";
import PhaseContent from "./PhaseContent";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("one");

  return (
    <div className="how-it-works-section ">
      <div className="container">
        <h1> How It Works</h1>
        <div>
          <div className="tab-button-line"></div>
          <div className="tab-button-wrapper">
            {Object.keys(phaseData).map((key, i) => (
              <TabButton
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                key={key}
                index={i + 1}
                name={key}
              />
            ))}
          </div>
        </div>
        <PhaseContent data={phaseData[activeTab]} />
      </div>
    </div>
  );
};
//
export default HowItWorks;
