import React from "react";
import styled from "styled-components";

type TextProps = {
  as?: "p" | "span" | "strong" | "small" | "em" | "u";
  children: React.ReactNode;
  size?: "xsmall" | "small" | "standard" | "large";
  weight?: "regular" | "medium" | "bold";
  align?: "left" | "center" | "right";
  tone?: "info" | "warning" | "error" | "success";
};

function Text({ as = "span", size = "standard", weight = "regular", align = "left", children }: TextProps) {
  return (
    <StyledText as={as === "em" ? "italic" : as} size={size} weight={weight} align={align}>
      {children}
    </StyledText>
  );
}

const StyledText = styled.span<TextProps>`
  margin: 0px;
  font-family: Open Sans, sans-serif;
  line-height: 1.5em;
  font-size: ${({ size }) => {
    switch (size) {
      case "xsmall":
        return "0.75rem";
      case "small":
        return "0.875rem";
      case "standard":
        return "1rem";
      case "large":
        return "1.25rem";
      default:
        return "1rem";
    }
  }};
  font-weight: ${({ weight }) => {
    switch (weight) {
      case "regular":
        return "400";
      case "medium":
        return "500";
      case "bold":
        return "700";
      default:
        return "400";
    }
  }};
  text-align: ${({ align }) => {
    switch (align) {
      case "left":
        return "left";
      case "center":
        return "center";
      case "right":
        return "right";
      default:
        return "left";
    }
  }};
`;

export default Text;
