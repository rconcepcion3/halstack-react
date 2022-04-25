import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const ListPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>type: 'disc' | 'circle' | 'square' | 'number' | 'icon'</td>
        <td>'disc'</td>
        <td>Defines the style of the bullet point in the list.</td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>
          gutter: "none" | "xxxsmall" | "xxsmall" | "xsmall" | "small" |
          "medium" | "large" | "xlarge" | "xxlarge" | "xxxlarge"
        </td>
        <td>'xxsmall</td>
        <td>Space applied between each list item.</td>
      </tr>
      <tr>
        <td>icon: string | SVGSVGElement</td>
        <td></td>
        <td>Icon to display as bullet.</td>
      </tr>
      <tr>
        <td>size: "xsmall" | "small" | "standard" | "large" </td>
        <td>'standard'</td>
        <td>Size to be applied to each item in the list.</td>
      </tr>
    </DxcTable>
  );
};

export default ListPropsTable;
