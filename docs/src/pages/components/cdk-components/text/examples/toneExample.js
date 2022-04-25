import { DxcText } from "@dxc-technology/halstack-react";

const code = `() =>{
    return (
        <>
            <DxcText as="p" tone="info">
                Info tone.
            </DxcText>
            <DxcText as="p" tone="warning">
                Warning tone.
            </DxcText>
            <DxcText as="p" tone="error">
                Error tone.
            </DxcText>
            <DxcText as="p" tone="success">
                Success tone.
            </DxcText>      
            <DxcText as="p">
                Default tone.
            </DxcText>
        </>
    );
}`;

const scope = { DxcText };

export default { code, scope };
