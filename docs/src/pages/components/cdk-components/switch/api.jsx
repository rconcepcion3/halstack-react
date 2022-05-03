import React from "react";
import { DxcTable } from "@dxc-technology/halstack-react";

const switchPropsTable = () => {
  return (
    <DxcTable>
      <tr>
        <th>Name</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>defaultChecked: boolean</td>
        <td></td>
        <td>Initial state of the switch, only when it is uncontrolled.</td>
      </tr>
      <tr>
        <td>checked: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the component is checked. If undefined, the component will be
          uncontrolled and the checked attribute will be managed internally by
          the component.
        </td>
      </tr>
      <tr>
        <td>value: string</td>
        <td></td>
        <td>
          Will be passed to the value attribute of the html input element. When
          inside a form, this value will be only submitted if the switch is
          checked.
        </td>
      </tr>
      <tr>
        <td>label: string</td>
        <td></td>
        <td>Text to be placed next to the switch.</td>
      </tr>
      <tr>
        <td>labelPosition: 'before' | 'after'</td>
        <td>
          <code>'before'</code>
        </td>
        <td>Whether the label should appear after or before the switch.</td>
      </tr>
      <tr>
        <td>name: string</td>
        <td></td>
        <td>Name attribute of the input element.</td>
      </tr>
      <tr>
        <td>disabled: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>If true, the component will be disabled.</td>
      </tr>
      <tr>
        <td>optional: boolean</td>
        <td>
          <code>false</code>
        </td>
        <td>
          If true, the component will display <code>(Optional)</code> next to
          the label.
        </td>
      </tr>
      <tr>
        <td>onChange: function</td>
        <td></td>
        <td>
          This function will be called when the user clicks the switch. The new
          value of the checked attribute will be passed as a parameter.
        </td>
      </tr>
      <tr>
        <td>margin: string | object</td>
        <td></td>
        <td>
          Size of the margin to be applied to the component ('xxsmall' |
          'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'). You
          can pass an object with 'top', 'bottom', 'left' and 'right' properties
          in order to specify different margin sizes.
        </td>
      </tr>
      <tr>
        <td>size: string</td>
        <td>
          <code>'fitContent'</code>
        </td>
        <td>
          Size of the component ('small' | 'medium' | 'large' | 'fillParent' |
          'fitContent').
        </td>
      </tr>
      <tr>
        <td>tabIndex: number</td>
        <td>0</td>
        <td>Value of the tabindex.</td>
      </tr>
    </DxcTable>
  );
};

export default switchPropsTable;
