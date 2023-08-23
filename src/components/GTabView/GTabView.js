// GTabView.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./GTabView.scss";

function GTabView({ tabs, dir }) {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <RTLWrapper dir={dir}>
      <div className={`tabs`}>
        <ul className={`nav nav-tabs`}>
          {tabs.map((tab, index) => (
            <li className={`nav-item`} key={index}>
              <button
                className={`nav-link ${
                  activeTab === index + 1 ? "active" : ""
                }`}
                onClick={() => handleTabClick(index + 1)}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
        <div className={`tab-content`}>
          {tabs.map((tab, index) => (
            <div
              className={`tab-pane ${
                activeTab === index + 1 ? "show active" : ""
              }`}
              role="tabpanel"
              key={index}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </RTLWrapper>
  );
}

GTabView.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
};

GTabView.defaultProps = {
  dir: "ltr",
};

export default GTabView;
