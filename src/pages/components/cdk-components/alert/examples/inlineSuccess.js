import { DxcAlert } from "@diaas/dxc-react-cdk";
import { useState } from "react";

const code = `() => {
  const [isVisible, changeIsVisible] = useState(true);

  if (isVisible) {
    return (
      <DxcAlert
        type="confirm"
        mode="inline"
        inlineText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        margin="medium"
      />
    );
  }
  return null;
}`;

const scope = {
  DxcAlert,
  useState
};

export default { code, scope };
