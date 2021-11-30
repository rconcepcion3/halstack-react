import { DxcNumber } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChange = ({ value }) => {
    setValue(value);
  };

  const onBlur = ({ value, error }) => {
    setValue(value);
    setError(error);
  };

  return (
    <DxcNumber
      label="Min 5, max 20 and step 5"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      margin="medium"
      min={5}
      max={20}
      step={5}
      error={error}
    />
  );
}`;

const scope = {
  DxcNumber,
  useState,
};

export default { code, scope };
