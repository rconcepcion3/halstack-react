import { DxcNewDate } from "@dxc-technology/halstack-react";

const code = `() => {
  return (
    <DxcNewDate
      label="Optional"
      optional
      margin="medium"
    />
  );
}`;

const scope = {
  DxcNewDate,
};

export default { code, scope };