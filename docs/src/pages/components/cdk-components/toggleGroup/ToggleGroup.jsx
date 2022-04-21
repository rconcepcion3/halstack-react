import React from "react";
import { DxcHeading } from "@dxc-technology/halstack-react";
import ComponentDoc from "../../common/ComponentDoc";
import Section from "../../common/Section";
import Example from "../../common/Example";
import ComponentHeader from "../../common/ComponentHeader";
import ToggleGroupPropsTable from "./api.jsx";
import defaultToggleGroup from "./examples/uncontrolledToggleGroup";
import controlled from "./examples/controlledToggleGroup";
import multiple from "./examples/multipleToggleGroup";
import withIcons from "./examples/withIcons";

function ToggleGroup() {
  return (
    <ComponentDoc>
      <ComponentHeader title="Toggle Group" status="ready"></ComponentHeader>
      <Section>
        <DxcHeading level={3} text="Props" margin={{ bottom: "small" }} />
        <ToggleGroupPropsTable />
      </Section>
      <Section>
        <DxcHeading level={3} text="Examples" margin={{ bottom: "small" }} />
        <Example title="Controlled toggle group" example={controlled}></Example>
        <Example
          title="Uncontrolled toggle group"
          example={defaultToggleGroup}
        ></Example>
        <Example title="Multiple toggle group" example={multiple}></Example>
        <Example title="Toggle group with icons" example={withIcons}></Example>
      </Section>
    </ComponentDoc>
  );
}

export default ToggleGroup;
