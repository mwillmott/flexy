import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Box = ({ tagName: Element = "div", align, ...props }) => (
  <Element {...props} />
);

Box.propTypes = {
  align: PropTypes.oneOf(["start", "end", "center", "baseline", "stretch"]),
  tagName: PropTypes.string
};

const BoxWrapper = styled(Box)`
  flex-basis: auto;
  flex-grow: 1;
  align-self: ${props => {
    switch (props.align) {
      case "start":
      case "end":
        return `flex-${props.align}`;
      default:
        return props.align || "auto";
    }
  }};
  padding-top: ${props => props.theme.gutter};
  padding-left: ${props => props.theme.gutter};
  padding-bottom: 0;
  padding-right: 0;
`;

export default BoxWrapper;
