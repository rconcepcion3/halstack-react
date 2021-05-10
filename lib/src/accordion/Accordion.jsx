import React, { useState, useEffect, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";

import { getMargin } from "../common/utils.js";
import { spaces, responsiveSizes } from "../common/variables.js";
import useTheme from "../useTheme.js";
import { BackgroundColorProvider } from "../BackgroundColorContext.js";

const DxcAccordion = ({
  label = "",
  iconSrc = "",
  icon,
  assistiveText = "",
  disabled = false,
  onChange = "",
  isExpanded,
  children,
  margin,
  padding,
  tabIndex = 0,
}) => {
  const [innerIsExpanded, setInnerIsExpanded] = React.useState(false);
  const [isResponsive, setIsResponsive] = useState();
  const colorsTheme = useTheme();
  // const backgroundType = useContext(BackgroundColorContext);

  const handleResize = (width) => {
    if (width) {
      if (width <= responsiveSizes.tablet ? setIsResponsive(true) : setIsResponsive(false));
    }
  };

  const handleEventListener = () => {
    handleResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleEventListener);
    handleResize(window.innerWidth);
    return () => {
      window.removeEventListener("resize", handleEventListener);
    };
  }, []);

  const handlerAccordion = () => {
    if (isExpanded == null) {
      setInnerIsExpanded(!innerIsExpanded);
    }
    if (typeof onChange === "function") {
      onChange(isExpanded == null ? !innerIsExpanded : !isExpanded);
    }
  };

  return (
    <ThemeProvider theme={colorsTheme.accordion}>
      <DXCAccordion
        padding={padding}
        margin={margin}
        disabled={disabled}
        icon={icon || iconSrc}
        isResponsive={isResponsive}
      >
        <ExpansionPanel
          disabled={disabled}
          onChange={handlerAccordion}
          expanded={isExpanded != null ? isExpanded : innerIsExpanded}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} tabIndex={disabled ? -1 : tabIndex}>
            <AccordionInfo>
              <AccordionLabel>{label}</AccordionLabel>
              {icon ? (
                <IconContainer>{typeof icon === "object" ? icon : React.createElement(icon)}</IconContainer>
              ) : (
                iconSrc && <AccordionIcon src={iconSrc} />
              )}
            </AccordionInfo>
            {assistiveText && <AccordionAssistiveText>{assistiveText}</AccordionAssistiveText>}
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <AccordionText>
              <BackgroundColorProvider color={colorsTheme.accordion.backgroundColor}>
                {children}
              </BackgroundColorProvider>
            </AccordionText>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </DXCAccordion>
    </ThemeProvider>
  );
};

const calculateWidth = (margin) => {
  return `calc(100% - ${getMargin(margin, "left")} - ${getMargin(margin, "right")})`;
};

DxcAccordion.propTypes = {
  label: PropTypes.string,
  iconSrc: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  assistiveText: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  isExpanded: PropTypes.bool,
  children: PropTypes.element,
  margin: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  padding: PropTypes.oneOfType([
    PropTypes.shape({
      top: PropTypes.oneOf(Object.keys(spaces)),
      bottom: PropTypes.oneOf(Object.keys(spaces)),
      left: PropTypes.oneOf(Object.keys(spaces)),
      right: PropTypes.oneOf(Object.keys(spaces)),
    }),
    PropTypes.oneOf([...Object.keys(spaces)]),
  ]),
  tabIndex: PropTypes.number,
};
const DXCAccordion = styled.div`
  display: flex;
  font-size: ${(props) => props.theme.fontSizeBase};
  min-width: ${(props) => props.theme.minWidth};
  margin: ${(props) => (props.margin && typeof props.margin !== "object" ? spaces[props.margin] : "0px")};
  margin-top: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.top ? spaces[props.margin.top] : ""};
  margin-right: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.right ? spaces[props.margin.right] : ""};
  margin-bottom: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.bottom ? spaces[props.margin.bottom] : ""};
  margin-left: ${(props) =>
    props.margin && typeof props.margin === "object" && props.margin.left ? spaces[props.margin.left] : ""};

  width: ${(props) => calculateWidth(props.margin)};
  

  cursor: ${(props) => (props.disabled && "not-allowed") || "pointer"};
  .MuiPaper-root {
    min-width: 0;
    display: flex;
    left: 85px;
    background-color: ${(props) => props.theme.backgroundColor} !important;
    box-shadow: ${(props)=>`${props.theme.boxShadowOffsetX} ${props.theme.boxShadowOffsetY} ${props.theme.boxShadowBlur} ${props.theme.boxShadowColor}`};
    position: static;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    &.Mui-expanded {
      border-radius: ${(props) => props.theme.borderRadius}; 
    }
    &.MuiExpansionPanel-root {
      display: flex;
      flex-direction: column;
     
    }
    &.MuiExpansionPanel-rounded{
     border-radius:${(props) => props.theme.borderRadius}; 
    }
    .MuiButtonBase-root.MuiExpansionPanelSummary-root {
      :hover {
        background-color: ${(props) => `${props.theme.hoverBackgroundColor}`};
      }
    }

    .MuiButtonBase-root {
      border-radius: ${(props) => props.theme.borderRadius};
      
      height: 48px;
      &.Mui-expanded {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        .MuiSvgIcon-root {
          opacity: 1;
        }
      }

      &.MuiIconButton-root {
        height: auto;
      }

      .MuiExpansionPanelSummary-content {
        padding-right: 24px;
        min-width: 0;
        &.Mui-expanded {
          div:nth-child(2) {
            opacity: 1;
          }
        }
        :hover {
          div {
            opacity: 1;
          }
        }
      }
    }

    .MuiExpansionPanelSummary-root.Mui-expanded {
      min-height: ${(props) => props.theme.minHeight};
      border-width:${(props) => props.theme.borderThickness};
      border-style:${(props) => props.theme.borderStyle};
      border-color:${(props) => props.theme.focusOutline};
    }

    .MuiTouchRipple-root {
      display: none;
    }
  }

  .MuiCollapse-hidden {
    display: none;
  }

  .MuiPaper-root.Mui-disabled {
    color: ${(props) => props.theme.disabledFontColor};
  }

  .MuiCollapse-container {
  
    border-radius: 0px 0px 4px 4px;
    cursor: default;
    width: 100%;
  }

  .MuiSvgIcon-root {
    color: ${(props) => props.theme.arrowColor};
  }

  .MuiExpansionPanelSummary-root {
    padding-top: ${(props) => props.theme.headerPaddingTop};
    padding-right: ${(props) => props.theme.headerPaddingRight};
    padding-bottom: ${(props) => props.theme.headerPaddingBottom};
    padding-left: ${(props) => props.theme.headerPaddingLeft};
  }

  .MuiExpansionPanelSummary-root.Mui-disabled {
    opacity: 1;
  }

  .MuiExpansionPanelDetails-root {
    padding: ${(props) => (props.padding && typeof props.padding !== "object" ? spaces[props.padding] : "0px")};
    padding-top: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.top ? spaces[props.padding.top] : ""};
    padding-right: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.right ? spaces[props.padding.right] : ""};
    padding-bottom: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.bottom ? spaces[props.padding.bottom] : ""};
    padding-left: ${(props) =>
      props.padding && typeof props.padding === "object" && props.padding.left ? spaces[props.padding.left] : ""};
  }
`;

const AccordionInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: ${(props) => props.theme.headerTitleMarginRight};
  margin-left: ${(props) => props.theme.headerTitleMarginLeft};
  margin-top: ${(props) => props.theme.headerTitleMarginTop};
  margin-bottom: ${(props) => props.theme.headerTitleMarginBottom};
  font-family: ${(props) => props.theme.headerTitleFontFamily};
  font-size: ${(props) => props.theme.headerTitleFontSize};
  font-style: ${(props) => props.theme.headerTitleFontStyle};
  font-weight: ${(props) => props.theme.headerTitleFontWeight};
  color: ${(props) => props.theme.headerTitleFontColor};
`;

const AccordionLabel = styled.div``;

const AccordionText = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.contentTextFontFamily};
  font-size:${(props) => props.theme.contentTextFontSize};
  font-style: ${(props) => props.theme.contentTextFontStyle};
  font-weight: ${(props) => props.theme.contentTextFontWeight};
  color: ${(props) => props.theme.contentTextFontColor} !important;
`;

const AccordionAssistiveText = styled.div`
  margin-top: ${(props) => props.theme.assistiveTextMarginTop};
  margin-bottom: ${(props) => props.theme.assistiveTextMarginBottom};
  margin-left: ${(props) => props.theme.assistiveTextMarginLeft};
  margin-right: ${(props) => props.theme.assistiveTextMarginRight};
  font-size: ${(props) => props.theme.assistiveTextFontSize};
  font-family: ${(props) => props.theme.assistiveTextFontFamily};
  font-style: ${(props) => props.theme.assistiveTextFontStyle};
  font-weight: ${(props) => props.theme.assistiveTextFontWeight};
  color: ${(props) => props.theme.assistiveTextFontColor};

  letter-spacing: ${(props) => props.theme.assistiveTextLetterSpacing};
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: ${(props) => props.theme.assistiveTextMinWidth};
  text-align: end;
`;

const IconContainer = styled.div`
  max-height: ${(props) => props.theme.iconMaxHeight};
  max-width: ${(props) => props.theme.iconMaxWidth};
  margin-left: ${(props) => props.theme.iconMarginLeft};
  margin-right: ${(props) => props.theme.iconMarginRigth};
  overflow: hidden;
  color: ${(props) => props.theme.arrowColor};

  img,
  svg {
    height: 100%;
    width: 100%;
  }
`;

const AccordionIcon = styled.img`
  max-height: 20px;
  max-width: 20px;
  margin-left: 0px;
  margin-right: 10px;
`;

export default DxcAccordion;
