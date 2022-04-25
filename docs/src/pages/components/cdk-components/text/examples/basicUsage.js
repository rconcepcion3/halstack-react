import { DxcText } from "@dxc-technology/halstack-react";

const code = `() =>{
    return (
        <div style={{ display: "flex", flexWrap: "wrap", columnGap: "100px", margin: "36px", "align-items":"baseline" }}>
            <DxcText as="p" size="large">
                Large text.
            </DxcText>
            <DxcText as="p" weight="bold">
                Bold text.
            </DxcText>
            <DxcText as="em">
                Text as italic
            </DxcText>
            
        </div>
    );
}`;

const scope = { DxcText };

export default { code, scope };
