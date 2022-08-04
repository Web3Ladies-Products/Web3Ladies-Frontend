import { useRouter } from "next/router";
import React from "react";
import All from "../icons/All";
import Annoncement from "../icons/Annoncement";
import Learn from "../icons/Learn";
import News from "../icons/News";
import Press from "../icons/Press";
import SearchField from "./SearchField";

const Tabs = ({ onChange }) => {
  const router = useRouter();
  const tab = router.query.tab;
  const currentTab = React.useMemo(() => (tab ? tab : "all"), [tab]);

  const tabs = [
    {
      id: "all",
      name: "All",
      icon: <All isActive={currentTab === "all"} />,
    },
    {
      id: "announcements",
      name: "Announcements",
      icon: <Annoncement isActive={currentTab === "announcements"} />,
    },
    {
      id: "press",
      name: "Press",
      icon: <Press isActive={currentTab === "press"} />,
    },
    {
      id: "news",
      name: "News",
      icon: <News isActive={currentTab === "news"} />,
    },
    {
      id: "learn",
      name: "Learn",
      icon: <Learn isActive={currentTab === "learn"} />,
    },
  ];

  return (
    <section>
      <div
        className="container d-flex justify-content-between"
        style={{ paddingTop: "0" }}
      >
        <div className="option-tabs">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`option-tabs--tab-bordered ${
                tab.id === currentTab ? "active" : ""
              }`}
              onClick={() => onChange(tab.id)}
            >
              <div className="d-flex justify-content-center align-items-center">
                <span className="icon">{tab.icon}</span>
                <div className="text">{tab.name}</div>
              </div>
            </div>
          ))}
        </div>
        <SearchField />
      </div>
    </section>
  );
};

export default Tabs;
