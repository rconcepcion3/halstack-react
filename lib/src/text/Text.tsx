// @ts-nocheck
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "../useTheme";

type TextProps = {
  as?: "p" | "span" | "strong" | "small" | "em" | "u";
  children: React.ReactNode;
  size?: "xsmall" | "small" | "standard" | "large";
  weight?: "light" | "regular" | "bold";
  alignment?: "left" | "center" | "right";
  tone?: "default" | "info" | "warning" | "error" | "success";
};

const getTextColor = (props) => {
  switch (props.tone) {
    case "info":
      return props.theme.infoColor;
    case "warning":
      return props.theme.warningColor;
    case "error":
      return props.theme.errorColor;
    case "success":
      return props.theme.successColor;
    default:
      return props.theme.defaultColor;
  }
};

function Text({
  as = "span",
  size = "standard",
  weight = "regular",
  alignment = "left",
  tone = "default",
  children,
}: TextProps) {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.text}>
      <StyledText as={as === "em" ? "i" : as} size={size} weight={weight} alignment={alignment} tone={tone}>
        {children}
      </StyledText>
    </ThemeProvider>
  );
}

const StyledText = styled.span<TextProps>`
  margin: 0px;
  font-family: Open Sans, sans-serif;
  line-height: 1.5em;
  color: ${(props) => getTextColor(props)};
  font-size: ${({ size, as }) => {
    if (as !== "small") {
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
    }
  }};
  font-weight: ${({ weight, as }) => {
    if (as !== "strong") {
      switch (weight) {
        case "light":
          return "400";
        case "regular":
          return "500";
        case "bold":
          return "700";
        default:
          return "400";
      }
    }
  }};
  text-align: ${({ alignment }) => {
    switch (alignment) {
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
