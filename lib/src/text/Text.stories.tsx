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
    <Title title="Text as strong" theme="light" level={4} />
    <DxcText as="strong">Text 1.</DxcText>
    <Title title="Texts as small" theme="light" level={4} />
    <DxcText as="small">Text 1.</DxcText>
    <Title title="Texts as underline" theme="light" level={4} />
    <DxcText as="u">Text 1.</DxcText>
    <Title title="Texts as italic" theme="light" level={4} />
    <DxcText as="em">Text 1.</DxcText>
    <Title title="Sizes" theme="light" level={4} />
    <DxcText as="p" size="xsmall">
      Xsmall text.
    </DxcText>
    <DxcText as="p" size="small">
      Small text.
    </DxcText>
    <DxcText as="p" size="standard">
      Standard text.
    </DxcText>
    <DxcText as="p" size="large">
      Large text.
    </DxcText>
    <Title title="Weights" theme="light" level={4} />
    <DxcText as="p" weight="light">
      Light text.
    </DxcText>
    <DxcText as="p" weight="regular">
      Regular text.
    </DxcText>
    <DxcText as="p" weight="bold">
      Bold text.
    </DxcText>
    <Title title="Alignment" theme="light" level={4} />
    <DxcText as="p" alignment="left">
      Text.
    </DxcText>
    <DxcText as="p" alignment="center">
      Text.
    </DxcText>
    <DxcText as="p" alignment="right">
      Text.
    </DxcText>
    <Title title="Tone" theme="light" level={4} />
    <DxcText as="p">Default text.</DxcText>
    <DxcText as="p" tone="info">
      Info text.
    </DxcText>
    <DxcText as="p" tone="warning">
      Warning text.
    </DxcText>
    <DxcText as="p" tone="error">
      Error text.
    </DxcText>
    <DxcText as="p" tone="success">
      Success text.
    </DxcText>
  </>
);
