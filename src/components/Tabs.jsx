import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Hot");
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      title: "Hot",
      path: "/hot",
    },
    {
      title: "New",
      path: "/new",
    },
    {
      title: "Top",
      path: "/top",
    },
  ];

  const handleTab = (tab) => {
    setActiveTab(tab.title);
    navigate(tab.path);
  };

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.title);
    }
  }, [location.pathname]);

  return (
    <div className="my-16 w-full md:w-[50%] mx-auto">
      <div role="tablist" className="tabs tabs-bordered gap-5">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.title}
              role="tab"
              className={`tab ${activeTab === tab.title ? "tab-active" : ""}`}
              onClick={(e) => handleTab(tab)}
            >
              {tab.title === "Hot" && "🔥 Hot"}
              {tab.title === "New" && "✨ New"}
              {tab.title === "Top" && "🏆 Top"}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
