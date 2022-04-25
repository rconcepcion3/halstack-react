import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import TextPropsTable from "./api.jsx";
import basicUsage from "./examples/basicUsage";
import toneExample from "./examples/toneExample";

function Text() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Text" status="experimental"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <TextPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Basic Usage" example={basicUsage}></Example>
        <Example title="Tone" example={toneExample}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default Text;
