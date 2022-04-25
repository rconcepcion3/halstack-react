import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const TextPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>as: 'p' | 'span' | 'strong' | 'small' | 'em' | 'u'</td>
        <td>'span'</td>
        <td>
          Determines the HTML tag with which the text is to be rendered
          (paragraph, span, strong, small, italic or underlined).
        </td>
      </tr>
      <tr>
        <td>children: node</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>size: 'xsmall' | 'small' | 'standard' | 'large'</td>
        <td>'standard</td>
        <td>Size of the text</td>
      </tr>
      <tr>
        <td>weight: 'light' | 'regular' | 'bold' </td>
        <td>'regular'</td>
        <td>Weight of the text</td>
      </tr>
      <tr>
        <td>alignment: 'left' | 'center' | 'right' </td>
        <td>'left'</td>
        <td>Where the text should be aligned.</td>
      </tr>
      <tr>
        <td>tone: 'default' | 'info' | 'warning' | 'error' | 'success'</td>
        <td>'default'</td>
        <td>Different options for the foreground colour of text.</td>
      </tr>
    </DxcTable>
  );
};

export default TextPropsTable;
