import React from "react";
import Panel from "./Panel";

const Accordion = ({
  panels,
  hasActiveBackground,
  hasFullBorder,
  fullWidth,
}) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const activateTab = (index) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <div className="accordion" role="tablist">
      {panels?.map((panel, index) => (
        <Panel
          key={index}
          activeTab={activeTab}
          index={index}
          {...panel}
          activateTab={() => activateTab(index)}
          hasActiveBackground={hasActiveBackground}
          hasFullBorder={hasFullBorder}
          fullWidth={fullWidth}
        />
      ))}
    </div>
  );
};

export default Accordion;
