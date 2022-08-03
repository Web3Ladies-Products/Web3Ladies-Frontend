import React from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("all");
  const TABS = [
    {
      id: "all",
      name: "All",
    },
    {
      id: "announcements",
      name: "Announcements",
    },
    {
      id: "all",
      name: "Press",
    },
    {
      id: "all",
      name: "News",
    },
    {
      id: "all",
      name: "Learn",
    },
  ];
  return (
    <>
      <div className="tabs">
        {TABS.map((tab, index) => (
          <div
            key={index}
            className={tab.id === activeTab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            <div className="tab-name">{tab.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
