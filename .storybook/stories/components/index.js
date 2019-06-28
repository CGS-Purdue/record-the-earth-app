import React from 'react';
import { storiesOf } from '@storybook/react';
import { Boxes, Button } from '../../../src/components';

import centered from '@storybook/addon-centered';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { WiredRadio } from '@bit/wiredjs.wired-elements.wired-radio';
// storiesOf('Wired|WiredRadioGroup', module)
//   .add('default', () =>	(
//     <h2>test</h2>
//     )
//   );

storiesOf('Components|MyComponent', module)
  .addDecorator(centered)
  .add('without props', () => (<Boxes.Boxy />))
  .add('with some props', () => (<Boxes.Boxy style="color:red" text="The Comp">More then?</Boxes.Boxy>));


storiesOf('Components|Button', module)
  .addDecorator(centered)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">😀 😎 👍 💯</span>
    </Button>
  ));
