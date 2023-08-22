// TabView.js
import React, { useState } from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./TabView.scss";
function TabView({
  tabs,
  dir
}) {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = tabIndex => {
    setActiveTab(tabIndex);
  };
  return /*#__PURE__*/React.createElement(RTLWrapper, {
    dir: true
  }, /*#__PURE__*/React.createElement("div", {
    className: `tabs`
  }, /*#__PURE__*/React.createElement("ul", {
    className: `nav nav-tabs`
  }, tabs.map((tab, index) => /*#__PURE__*/React.createElement("li", {
    className: `nav-item`,
    key: index
  }, /*#__PURE__*/React.createElement("button", {
    className: `nav-link ${activeTab === index + 1 ? "active" : ""}`,
    onClick: () => handleTabClick(index + 1)
  }, tab.title)))), /*#__PURE__*/React.createElement("div", {
    className: `tab-content`
  }, tabs.map((tab, index) => /*#__PURE__*/React.createElement("div", {
    className: `tab-pane ${activeTab === index + 1 ? "show active" : ""}`,
    role: "tabpanel",
    key: index
  }, tab.content)))));
}
TabView.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
  })).isRequired
};
TabView.defaultProps = {
  dir: 'ltr'
};
export default TabView;