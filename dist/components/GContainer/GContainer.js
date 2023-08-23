//GContainer.js
import React from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./GContainer.scss";
function GContainer({
  children,
  style,
  dir
}) {
  return /*#__PURE__*/React.createElement(RTLWrapper, {
    dir: dir
  }, /*#__PURE__*/React.createElement("div", {
    className: `container`,
    style: style
  }, children));
}
GContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  dir: PropTypes.oneOf(["ltr", "rtl"])
};
GContainer.defaultProps = {
  dir: "ltr"
};
export default GContainer;