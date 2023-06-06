import React, { useState } from "react";
import TabButton from "./TabButton";
import PhaseContent from "./PhaseContent";

const HowItWorks = ({ data }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(data)[0]);

  return (
    <div className="how-it-works-section ">
      <div className="container">
        <h1> How It Works</h1>
        <div>
          <div className="tab-button-line"></div>
          <div className="tab-button-wrapper">
            {Object.keys(data).map((key, i) => (
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
        <PhaseContent data={data[activeTab]} />
      </div>
    </div>
  );
};
//
export default HowItWorks;
