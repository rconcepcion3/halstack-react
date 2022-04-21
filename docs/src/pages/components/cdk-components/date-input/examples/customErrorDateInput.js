import { DxcDateInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [value, setValue] = useState("");
  const [error, setError] = useState();
  const onChange = ({ value, error, date }) => {
    setValue(value);
  };
  const onBlur = ({ value, error, date }) => {
    setValue(value);
    setError(error);
  };

  return (
    <DxcDateInput
      label="Custom error"
      helperText="Using onBlur event for handling errors"
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      error={error == undefined ? "" : "The typed date is invalid."}
      margin="medium"
      optional
    />
  );
}`;

const scope = {
  DxcDateInput,
  useState,
};

export default { code, scope };
