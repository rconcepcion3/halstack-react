import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { spaces } from "../common/variables.js";

import { getMargin } from "../common/utils.js";
import useTheme from "../useTheme";
import ChipPropsType from "./types";

const DxcChip = ({
  label,
  suffixIcon,
  prefixIcon,
  suffixIconSrc,
  onClickSuffix,
  prefixIconSrc,
  onClickPrefix,
  disabled,
  margin,
  tabIndex = 0,
}: ChipPropsType): JSX.Element => {
  const colorsTheme = useTheme();

  return (
    <ThemeProvider theme={colorsTheme.chip}>
      <StyledDxcChip disabled={disabled} margin={margin}>
        {prefixIcon ? (
          <IconContainer
            disabled={disabled}
            prefixIcon
            label={label}
            mode="prefix"
            tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
            onClick={() => onClickPrefix && !disabled && onClickPrefix(label)}
            interactuable={typeof onClickPrefix === "function" && !disabled}
          >
            {typeof prefixIcon === "object" ? prefixIcon : React.createElement(prefixIcon)}
          </IconContainer>
        ) : (
          prefixIconSrc && (
            <PrefixIconContainer
              disabled={disabled}
              src={prefixIconSrc}
              label={label}
              tabIndex={typeof onClickPrefix === "function" && !disabled ? tabIndex : -1}
              onClick={() => onClickPrefix && !disabled && onClickPrefix(label)}
              interactuable={typeof onClickPrefix === "function" && !disabled}
            />
          )
        )}
        {label && (
          <ChipTextContainer disabled={disabled} prefixIconSrc={prefixIconSrc} suffixIconSrc={suffixIconSrc}>
            {label}
          </ChipTextContainer>
        )}
        {suffixIcon ? (
          <IconContainer
            disabled={disabled}
            suffixIcon
            mode="suffix"
            label={label}
            tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
            onClick={() => onClickSuffix && !disabled && onClickSuffix(label)}
            interactuable={typeof onClickSuffix === "function" && !disabled}
          >
            {typeof suffixIcon === "object" ? suffixIcon : React.createElement(suffixIcon)}
          </IconContainer>
        ) : (
          suffixIconSrc && (
            <SuffixIconContainer
              disabled={disabled}
              src={suffixIconSrc}
              label={label}
              tabIndex={typeof onClickSuffix === "function" && !disabled ? tabIndex : -1}
              onClick={() => onClickSuffix && !disabled && onClickSuffix(label)}
              interactuable={typeof onClickSuffix === "function" && !disabled}
            />
          )
        )}
      </StyledDxcChip>
    </ThemeProvider>
  );
};

const getCursor = (interactuable, disabled) => {
  if (disabled) {
    return "cursor:not-allowed;";
  }
  if (interactuable) {
    return "cursor:pointer;";
  }
  return "cursor:default; outline:none;";
};

const StyledDxcChip = styled.div`
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  max-width: ${({ margin }) => `calc(100% - 40px - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`};
  background-color: ${(props) =>
    (props.disabled && props.theme.disabledBackgroundColor) || props.theme.backgroundColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border-width: ${(props) => props.theme.borderThickness};
  border-style: ${(props) => props.theme.borderStyle};
  border-color: ${(props) => props.theme.borderColor};
  padding-top: ${(props) => props.theme.contentPaddingTop};
  padding-bottom: ${(props) => props.theme.contentPaddingBottom};
  padding-left: ${(props) => props.theme.contentPaddingLeft};
  padding-right: ${(props) => props.theme.contentPaddingRight};

  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
`;

const ChipTextContainer = styled.span`
  font-size: ${(props) => props.theme.fontSize};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeight};
  font-style: ${(props) => props.theme.fontStyle};
  color: ${(props) => (props.disabled ? props.theme.disabledFontColor : props.theme.fontColor)};
  cursor: ${({ disabled }) => (disabled && "not-allowed") || "default"};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const SuffixIconContainer = styled.img`
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
  ${(props) => getCursor(props.interactuable, props.disabled)}
  margin-left: ${(props) =>
    ((props.label || props.suffixIconSrc) && props.theme.iconSpacing) || (props.prefixIconSrc && "5px")};
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
`;

const PrefixIconContainer = styled.img`
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
  ${(props) => getCursor(props.interactuable, props.disabled)}
  margin-right: ${(props) =>
    ((props.label || props.suffixIconSrc) && props.theme.iconSpacing) || (props.prefixIconSrc && "5px")};
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
`;

const IconContainer = styled.div`
  color: ${(props) => (props.disabled ? props.theme.disabledIconColor : props.theme.iconColor)};
  ${(props) =>
    props.prefixIcon
      ? `margin-right: ${
          ((props.label || props.suffixIcon || props.suffixIconSrc) && props.theme.iconSpacing) ||
          ((props.prefixIcon || props.prefixIconSrc) && "0")
        };`
      : `margin-left: ${
          ((props.label || props.prefixIcon || props.prefixIconSrc) && props.theme.iconSpacing) ||
          ((props.prefixIcon || props.prefixIconSrc) && "0")
        };`}
  ${(props) => getCursor(props.interactuable, props.disabled)}
  width: ${(props) => props.theme.iconSize};
  height: ${(props) => props.theme.iconSize};
  overflow: hidden;

  img,
  svg {
    height: 100%;
    width: 100%;
  }
  &:focus {
    outline-color: ${(props) => props.theme.focusColor};
    outline-width: 2px;
    ${(props) => props.disabled && "outline: none;"}
  }
`;

export default DxcChip;
