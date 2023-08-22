//CardView.js
import React from "react";
import PropTypes from "prop-types";
import RTLWrapper from "rtl_wrapper";
import "./CardView.scss";

function CardView({ header, body, style }) {
  return (
    <RTLWrapper>
      <div className={`card-view`} style={style}>
        {header && (
          <div className={`card-header`}>
            {header}
          </div>
        )}
        <div className={`card-body`}>
          {body}
        </div>
      </div>
    </RTLWrapper>
  );
}

CardView.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
  style: PropTypes.object,
};

export default CardView;
