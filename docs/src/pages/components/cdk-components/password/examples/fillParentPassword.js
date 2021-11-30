import { DxcPassword } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value }) => {
    setValue(value);
  };

  return (
    <DxcPassword
      value={value}
      label="Fill parent"
      clearable
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      size="fillParent"
    />
  );
}`;

const scope = {
  DxcPassword,
  useState,
};

export default { code, scope };
