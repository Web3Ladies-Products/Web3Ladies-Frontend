import React from "react";
import Image from "next/image";

const TabButton = ({ name, index, activeTab, setActiveTab }) => {
  return (
    <button className="tab-button" onClick={() => setActiveTab(name)}>
      <div
        style={{
          backgroundColor: name === activeTab ? "#FFDCF2" : "#fff",
        }}
      >
        {index}
      </div>
      {name === activeTab && (
        <div>

          {/* <Image
            className="" 
            width="50px"
            height="50px"
            src="/assets/images/x.png"
            alt=""
          /> */}
        </div>
      )}
    </button>
  );
};

export default TabButton;
