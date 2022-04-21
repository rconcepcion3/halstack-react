import { DxcToggleGroup } from "@dxc-technology/halstack-react";

const code = `() => {
  const onChange = (newValue) => {
    console.log(newValue);
  };
  const options = [
    {
      value: 1,
      label: "Facebook"
    },
    {
      value: 2,
      label: "Twitter"
    },
    {
      value: 3,
      label: "Linkedin"
    }
  ];

  return (
    <DxcToggleGroup
      label="Toggle group"
      helperText="The 'defaultValue' prop only works with uncontrolled toggle groups"
      defaultValue={1}
      options={options}
      onChange={onChange}
      margin="medium"
    ></DxcToggleGroup>
  );
}`;

const scope = {
  DxcToggleGroup,
};

export default { code, scope };
