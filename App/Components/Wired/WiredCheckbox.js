import React, { Component } from "react";
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import {
  WiredCheckBox
} from "react-wired";

// const WiredCheckboxComponent = new WiredCheckbox();
// export default function (prop) {
//   return (
// 		<WiredCheckboxComponent checked={prop.checked}>Checkbox</WiredCheckboxComponent>
// 	);
// }
//

export default (
  <div className="demoAppLayout">
      <WiredCheckBox text="Checkbox Checked" checked={isChecked} onClick={action('clicked')} />
      <WiredCheckBox text="Checkbox Unchecked" checked={notChecked} onClick={action('clicked')} />
      <WiredCheckBox text="Checkbox Disabled" checked={notChecked} disabled />
  </div>
)
