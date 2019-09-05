import React, { Component } from "react";
import centered from '@storybook/addon-centered/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';

import { Boxes, Button } from '../../../components';

import {
  WiredButton,
  WiredCheckBox,
  WiredInput,
  WiredRadio,
  WiredToggle,
  WiredTextArea,
  WiredProgress,
  WiredSpinner
} from "react-wired";


var isDisabled = true;
var notDisabled = false;
var isActive = true;
var notActive = false;
const isChecked = true;
const notChecked = false;
var state = {
      toggle: true,
      value: "",
      counter: 0
  };
var toggle = false;
var toggleState = () => setState({ toggle: !this.state.toggle, counter: this.state.counter + 1 });
// var handleChange = e => setState({ value: e.target.value });
// const { toggle, value, counter } = this.state;

storiesOf('Components|Notebook Style', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(centered)
  .add('Checkbox', () =>  (
    <div className="demoAppLayout">
      <WiredCheckBox text="Checkbox Checked" checked={isChecked} onClick={action('clicked')} />
      <WiredCheckBox text="Checkbox Unchecked" checked={notChecked} onClick={action('clicked')} />
      <WiredCheckBox text="Checkbox Disabled" checked={notChecked} disabled />
      <WiredCheckBox checked={toggle} text="text" />
      <WiredCheckBox checked={toggle} disabled text="text" />
    </div>
    )
  )
  .add('Radio', () =>  (
    <div className="demoAppLayout">
      <WiredRadio checked={isChecked} text="Radio On" />
      <WiredRadio checked={isChecked} disabled text="Radio On / button disabled" />
      <WiredRadio checked={notChecked} text="Radio Off " />
      <WiredRadio checked={notChecked} disabled text="Radio Off / button disabled" />
    </div>
  ))
  .add('Spinner', () =>  (
    <div className="demoAppLayout">
      <WiredSpinner active={isActive} thickness={1} /><br/>
      <WiredSpinner active={isActive} thickness={2} /><br/>
      <WiredSpinner active={isActive} thickness={4} /><br/>
      <WiredSpinner active={isActive} thickness={8} /><br/>
      <WiredSpinner active={isActive} thickness={12} /><br/>
    </div>
  ))
  .add('Input', () =>  (
    <div className="demoAppLayout">
      <WiredInput placeholder="Input Field" disabled={toggle} />
    </div>
  ))
  .add('Textarea', () =>  (
    <div className="demoAppLayout">
      Short Textarea<br/>
      <WiredTextArea placeholder="placeholder" value={""} onChange={action('changed')} /><br/>
      3 Row Textarea<br/>
      <WiredTextArea placeholder="Enter text" rows="3" value={""} onChange={action('changed')} /><br/>
      Disabled Textarea<br/>
      <WiredTextArea value={"text"} rows="2" disabled onChange={action('changed')} /><br/>
    </div>
  ))
  .add('Toggle', () =>  (
    <div className="demoAppLayout">
      <WiredToggle checked={isChecked} onClick={action('clicked')} /> On <br/>
      <WiredToggle checked={isChecked} disabled onClick={action('clicked')} /> On + Disabled <br/>
      <WiredToggle checked={notChecked} onClick={action('clicked')} /> Off <br/>
      <WiredToggle checked={notChecked} disabled onClick={action('clicked')} /> Off + Disabled <br/>
    </div>
  ))
  .add('Progessbar', () =>  (
    <div className="demoAppLayout">
      <WiredProgress max={50} min={0} progressLabel="%" value={0} percentage /><br/>
      <WiredProgress max={100} min={0} progressLabel="10%" value={10} percentage /><br/>
      <WiredProgress max={100} min={0} progressLabel="25%" value={25} percentage /><br/>
      <WiredProgress max={100} min={0} progressLabel="50%" value={50} percentage /><br/>
      <WiredProgress max={100} min={0} progressLabel="75%" value={75} percentage /><br/>
      <WiredProgress max={100} min={0} progressLabel="95%" value={95} percentage /><br/>
      <WiredProgress max={100} min={0} progressLabel="100%" value={100} percentage /><br/>
    </div>
  ))
  .add('Button', () =>  (
    <div className="demoAppLayout">
      <WiredButton text="Click Me" /><br/>
      <WiredButton text="Disabled" disabled={isDisabled} /><br/>
      <WiredButton text="Elevation" elevation={3} /><br/>
      <WiredButton text="alerts 'hi' " elevation={3} disabled={toggle} onClick={() => alert("hi")} /><br/>
    </div>
  ));
