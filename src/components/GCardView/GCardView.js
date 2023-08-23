//GCardView.js
import React from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./GCardView.scss";

function GCardView({ header, children, style, dir }) {
  return (
    <RTLWrapper dir={dir}>
      <div className={`card-view`} style={style}>
        {header && <div className={`card-header`}>{header}</div>}
        <div className={`card-body`}>{children}</div>
      </div>
    </RTLWrapper>
  );
}

GCardView.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  dir: PropTypes.oneOf(["ltr", "rtl"]),
};

GCardView.defaultProps = {
  dir: "ltr",
};

export default GCardView;
