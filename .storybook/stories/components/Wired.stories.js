import React, { Component } from "react";
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import { Boxes, Button } from '../../../src/components';


import {
  WiredButton,
  WiredCheckBox
} from "react-wired";


var isDisabled = true;
var notDisabled = false;
const isChecked = true;
const notChecked = true;

const wiredButtonMd = `
# wired button

<!-- STORY -->

\`\`\`html
  <wired-button elevation="3">Elevation</wired-button>
\`\`\`\n
`;

storiesOf('Components|Wired', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(centered)
  .add('Checkbox', () =>	(
      <div className="demoAppLayout">
          <WiredCheckBox text="Checkbox Checked" checked={isChecked} onClick={action('clicked')} />
          <WiredCheckBox text="Checkbox Unchecked" checked={notChecked} onClick={action('clicked')} />
          <WiredCheckBox text="Checkbox Disabled" checked={notChecked} disabled />
      </div>
    )
  )
  .add('Button', () =>	(
      <div className="demoAppLayout">
        <WiredButton text="Click Me" />
        <WiredButton text="Disabled" disabled={isDisabled} />
        <WiredButton text="Elevation" elevation={3} />
      </div>
    )), {
    info: {
      inline: false
    }
  };
