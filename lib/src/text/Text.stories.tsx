import React from "react";
import Title from "../../.storybook/components/Title";
import DxcText from "./Text";

export default {
  title: "Text",
  component: DxcText,
};

export const Chromatic = () => (
  <>
    <Title title="Two texts as span" theme="light" level={4} />
    <DxcText>Text 1.</DxcText>
    <DxcText>Text 2.</DxcText>
    <Title title="Two texts as p" theme="light" level={4} />
    <DxcText as="p">Text 1.</DxcText>
    <DxcText as="p">Text 2.</DxcText>
    <Title title="Size and weight" theme="light" level={4} />
    <DxcText as="p" size="xsmall" weight="regular">
      xSmall and regular
    </DxcText>
    <DxcText as="p" size="xsmall" weight="medium">
      xSmall and medium
    </DxcText>
    <DxcText as="p" size="xsmall" weight="bold">
      xSmall and strong
    </DxcText>
    <DxcText as="p" size="small" weight="regular">
      Small and regular
    </DxcText>
    <DxcText as="p" size="small" weight="medium">
      Small and medium
    </DxcText>
    <DxcText as="p" size="small" weight="bold">
      Small and strong
    </DxcText>
    <DxcText as="p" size="standard" weight="regular">
      Standard and regular
    </DxcText>
    <DxcText as="p" size="standard" weight="medium">
      Standard and medium
    </DxcText>
    <DxcText as="p" size="standard" weight="bold">
      Standard and strong
    </DxcText>
    <DxcText as="p" size="large" weight="regular">
      Large and regular
    </DxcText>
    <DxcText as="p" size="large" weight="medium">
      Large and medium
    </DxcText>
    <DxcText as="p" size="large" weight="bold">
      Large and strong
    </DxcText>
    <Title title="Alignment" theme="light" level={4} />
    <DxcText as="p" size="large" align="left">
      Left
    </DxcText>
    <DxcText as="p" size="large" align="center">
      Center
    </DxcText>
    <DxcText as="p" size="large" align="right">
      Right
    </DxcText>
  </>
);
