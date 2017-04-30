import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = ({
  tagName: Element = "div",
  wrap,
  direction,
  reverse,
  ...props
}) => (
  <Element {...props} />
);

Container.propTypes = {
  tagName: PropTypes.string,
  wrap: PropTypes.oneOf(["wrap", "nowrap", "wrap-reverse"]),
  direction: PropTypes.oneOf(["horizontal", "vertical"]),
  reverse: PropTypes.bool
};

const ContainerWrapper = styled(Container)`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: ${props => props.wrap || "wrap"};

  flex-direction: ${props => {
    switch (props.direction) {
      case "horizontal":
        return props.reverse ? "row-reverse" : "row";
      case "vertical":
        return props.reverse ? "column-reverse" : "column";
      default:
        return "row";
    }
  }};
  margin-top: -${props => props.theme.gutter};
  margin-left: -${props => props.theme.gutter};
`;

export default ContainerWrapper;
