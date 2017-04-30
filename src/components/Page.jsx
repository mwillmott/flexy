import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

const Page = styled.div`
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;

  width: ${props => (props.theme.fluid ? "auto" : props.theme.width)};
  padding-right: ${props => (props.theme.fluid ? props.theme.outterMargin : 0)};
  padding-left: ${props => (props.theme.fluid ? props.theme.outterMargin : 0)};
`;

const PageWrapper = ({
  fluid = false,
  width = "1200px",
  gutter = "1rem",
  outterMargin = "2rem",
  ...props
}) => (
  <ThemeProvider theme={{ fluid, width, gutter, outterMargin }}>
    <Page {...props} />
  </ThemeProvider>
);

PageWrapper.propTypes = {
  fluid: PropTypes.bool,
  gutter: PropTypes.string,
  outterMargin: PropTypes.string,
  width: PropTypes.string
};

export default PageWrapper;
