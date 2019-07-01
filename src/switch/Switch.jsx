import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Switch } from "@material-ui/core";

const DxcSwitch = ({ checked=false, value, label, labelPosition, theme, name, disabled, disableRipple, onChange, required }) => {
  const [innerChecked, setInnerChecked] = useState(0);

  const handlerSwitchChange = newValue => {
    const switchChecked = newValue.target.checked === undefined ? !innerChecked : newValue.target.checked;
    setInnerChecked(switchChecked);
    onChange(switchChecked);
  };

  return (
    <SwitchContainer theme={theme} disabled={disabled} labelPosition={labelPosition}>
      <Switch
        checked={checked || innerChecked}
        inputProps={(name = { name })}
        onChange={handlerSwitchChange}
        value={value}
        disabled={disabled}
        disableRipple={disableRipple}
      />
      <LabelContainer
        labelPosition={labelPosition}
        theme={theme}
        onClick={disabled === true ? () => {} : handlerSwitchChange}
        disabled={disabled}
      >
        {required && <RequiredSpan theme={theme}>*</RequiredSpan>}
        {label}
      </LabelContainer>
    </SwitchContainer>
  );
};

const RequiredSpan = styled.span`
  color: ${props => (props.theme === "dark" ? "#FF6161" : "#ee2222")};
  margin-right: 5px;
  cursor: default;
`;

const SwitchContainer = styled.div`
  display: inline-flex;
  align-items: baseline;
  flex-direction: ${props => (props.labelPosition === "before" ? "row-reverse" : "row")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
  .MuiSwitch-root {
    align-items: center;
    width: 60px;
    height: 45px;
    margin: 3px;
    .MuiIconButton-root {
      /*Enabled and unchecked*/
      top: unset;
      .MuiSwitch-thumb {
        /*Only for ball*/
        width: 26px;
        height: 26px;
      }
      color: #ffffff;
      &:hover {
        background-color: transparent;
      }
      .MuiTouchRipple-child {
        background-color: ${props => (props.theme === "dark" ? "#FFED00" : "#666666")};
        opacity: 1;
      }
      &.Mui-disabled {
        /*Disabled*/
        color: ${props => (props.theme === "dark" ? "#B3B3B3" : "#FFFFFF")};
        &.Mui-checked {
          /*Disabled and checked*/
          color: ${props => (props.theme === "dark" ? "#B3B3B3" : "#C1C1C1")};
          + .MuiSwitch-track {
            /*Disabled and checked bar*/
            background-color: ${props => (props.theme === "dark" ? "#3D3D3D" : "#EFEFEF")};
            opacity: 1;
          }
        }
        + .MuiSwitch-track {
          /*Disabled and unchecked bar*/
          background-color: ${props => (props.theme === "dark" ? "#3D3D3D" : "#F4F4F4")};
          opacity: 1;
        }
      }
      &.Mui-checked {
        /*Enabled and checked*/
        color: ${props => (props.theme === "dark" ? "#FFED00" : "#000000")};
        transform: translateX(35%);
        &:hover {
          background-color: transparent;
        }
        .MuiTouchRipple-child {
          background-color: #666666;
          opacity: 1;
        }
        + .MuiSwitch-track {
          /*Enabled and checked bar*/
          background-color: #666666;
        }
      }
    }
    .MuiSwitch-track {
      /*Enabled and unchecked bar*/
      background-color: ${props => (props.theme === "dark" ? "#292929" : "#C2C2C2")};
      opacity: 1;
      height: 12px;
    }
  }
`;

const LabelContainer = styled.span`
  color: ${props => (props.theme === "dark" ? "#FFFFFF" : "#000000")};
  margin-right: ${props => (props.labelPosition === "before" ? "0px" : "15px")};
  margin-left: ${props => (props.labelPosition === "before" ? "15px" : "0px")};
  cursor: ${props => (props.disabled === true ? "not-allowed" : "default")};
`;

DxcSwitch.propTypes = {
  checked: PropTypes.bool,
  value: PropTypes.any,
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["after", "before", ""]),
  theme: PropTypes.oneOf(["light", "dark", ""]),
  name: PropTypes.string,
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default DxcSwitch;