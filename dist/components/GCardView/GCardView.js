//GCardView.js
import React from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./GCardView.scss";
function GCardView({
  header,
  children,
  style,
  dir
}) {
  return /*#__PURE__*/React.createElement(RTLWrapper, {
    dir: dir
  }, /*#__PURE__*/React.createElement("div", {
    className: `card-view`,
    style: style
  }, header && /*#__PURE__*/React.createElement("div", {
    className: `card-header`
  }, header), /*#__PURE__*/React.createElement("div", {
    className: `card-body`
  }, children)));
}
GCardView.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  dir: PropTypes.oneOf(["ltr", "rtl"])
};
GCardView.defaultProps = {
  dir: "ltr"
};
export default GCardView;