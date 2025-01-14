import React from "react";
import styled from "styled-components";
import RowPropsType from "./types";

export default function Row({
  gutter = "none",
  align,
  justify,
  wrap = true,
  reverse = false,
  children,
}: RowPropsType): JSX.Element {
  return (
    <StyledRow gutter={gutter} align={align} justify={justify} wrap={wrap} reverse={reverse}>
      {children}
    </StyledRow>
  );
}
const StyledRow = styled.div<RowPropsType>`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  flex-wrap: ${({ wrap }) => (wrap ? "wrap" : "nowrap")};
  align-items: ${({ align }) => {
    switch (align) {
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      case "baseline":
        return "baseline";
      case "stretch":
        return "stretch";
      default:
        return "initial";
    }
  }};
  justify-content: ${({ justify }) => {
    switch (justify) {
      case "spaceBetween":
        return "space-between";
      case "spaceAround":
        return "space-around";
      case "spaceEvenly":
        return "space-evenly";
      case "start":
        return "flex-start";
      case "center":
        return "center";
      case "end":
        return "flex-end";
      default:
        return "initial";
    }
  }};
  gap: ${({ gutter }) => {
    switch (gutter) {
      case "none":
        return "0";
      case "xxxsmall":
        return "0.125rem";
      case "xxsmall":
        return "0.25rem";
      case "xsmall":
        return "0.5rem";
      case "small":
        return "1rem";
      case "medium":
        return "1.5rem";
      case "large":
        return "2rem";
      case "xlarge":
        return "3rem";
      case "xxlarge":
        return "4rem";
      case "xxxlarge":
        return "5rem";
      default:
        return "0";
    }
  }};
`;
