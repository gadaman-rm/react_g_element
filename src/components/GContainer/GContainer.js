//GContainer.js
import React from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./GContainer.scss";

function GContainer({ children, style, dir }) {
  return (
    <RTLWrapper dir={dir}>
      <div className={`container`} style={style}>
        {children}
      </div>
    </RTLWrapper>
  );
}

GContainer.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
};

GContainer.defaultProps = {
  dir: "ltr",
};
export default GContainer;
