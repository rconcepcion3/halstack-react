import React, { useState } from "react";
import styled from "styled-components";
import { DxcSpinner, DxcButton, DxcNewSpinner } from "@dxc-technology/halstack-react";

import Mode from "../Mode";

const Spinner = () => {
  const [isVisible, changeIsVisible] = useState(false);
  const [isVisible2, changeIsVisible2] = useState(false);
  const showModal = () => {
    changeIsVisible(true);
    fetchData().then(() => {
      changeIsVisible(false);
    });
  };
  const showModal2 = () => {
    changeIsVisible2(true);
    fetchData().then(() => {
      changeIsVisible2(false);
    });
  };
  const fetchData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  };

  return (
    <SpinnerContainer>
      <Mode text="Undeterminate default">
        <DxcSpinner label="Loading..." margin="small" />
      </Mode>
      <Mode text="Determinate default">
        <DxcSpinner label="Loading..." showValue value={50} margin="small" />
      </Mode>
      <Mode text="Small">
        <DxcSpinner margin="small" mode="small" />
      </Mode>
      <Mode text="With overlay">
        <DxcButton
          theme="light"
          label="Show Spinner for 3 seconds"
          onClick={showModal}
          margin={{ top: "small", bottom: "xlarge" }}
        />
        {isVisible && (
          <DxcSpinner label="Loading..." mode="overlay" />
        )}
      </Mode>

      <Mode text="New Spinner Undeterminate default">
        <DxcNewSpinner label="Loading..." margin="small" />
      </Mode>

      <Mode text="New Spinner Determinate default">
        <DxcNewSpinner label="Loading..." value="50" showValue={true} margin="small" />
      </Mode>

      <Mode text="New Spinner Small">
        <DxcNewSpinner mode="small" margin="small" />
      </Mode>

      <Mode text="New Spinner With overlay">
        <DxcButton
          theme="light"
          label="Show Spinner for 3 seconds"
          onClick={showModal2}
          margin={{ top: "small", bottom: "xlarge" }}
        />
        {isVisible2 && (
          <DxcNewSpinner label="Loading..." mode="overlay" />
        )}
      </Mode>
      
    </SpinnerContainer>    
  );
};

const SpinnerContainer = styled.div``;

export default Spinner;
