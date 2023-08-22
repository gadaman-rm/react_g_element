//CardView.js
import React from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./CardView.scss";
function CardView({
  header,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement(RTLWrapper, null, /*#__PURE__*/React.createElement("div", {
    className: `card-view`,
    style: style
  }, header && /*#__PURE__*/React.createElement("div", {
    className: `card-header`
  }, header), /*#__PURE__*/React.createElement("div", {
    className: `card-body`
  }, body)));
}
CardView.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  style: PropTypes.object
};
CardView.defaultProps = {
  dir: 'ltr'
};
export default CardView;