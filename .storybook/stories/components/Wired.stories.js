import React, { Component } from "react";
import { storiesOf } from '@storybook/react';

import { WiredButton } from "react-wired";

storiesOf('Wired|Checkbox', module)
  .add('default', () =>	(
      <div className="demoAppLayout">
        <WiredButton text="this toggles the states below" elevation={2} />
      </div>
    )
  );
