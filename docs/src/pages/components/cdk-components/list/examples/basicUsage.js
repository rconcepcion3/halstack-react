import { DxcList, DxcText } from "@dxc-technology/halstack-react";

const code = `() => {
  const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "100px",
        margin: "36px",
        "align-items": "center",
      }}
    >
      <DxcList type="circle" size="xsmall">
        <DxcText>Type circle. </DxcText>
        <DxcText>Type circle.</DxcText>
      </DxcList>
      <DxcList type="number">
        <DxcText>Type number. </DxcText>
        <DxcText>Type number.</DxcText>
      </DxcList>
      <DxcList type="icon" icon={icon} size="large">
        <DxcText>Type icon. </DxcText>
        <DxcText>Type icon.</DxcText>
      </DxcList>
    </div>
  );
}`;

const scope = {
  DxcList,
  DxcText,
};

export default { code, scope };
