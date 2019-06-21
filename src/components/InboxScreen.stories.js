import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureInboxScreen } from './InboxScreen';
// import PureInboxScreenReadme from './InboxScreen.md';
import { defaultTasks } from './TaskList.stories';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasks,
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};




storiesOf('InboxScreen', module)
  .addDecorator(withKnobs)
  .addParameters({
      readme: {
        // Show readme before story
        // content: PureInboxScreenReadme,
        // Show readme at the addons panel
        sidebar: '# test',
      },
    })
  .addDecorator(withInfo({
    inline: true,
    header: true,
    source: true,
    maxPropsIntoLine: 5,
    maxPropObjectKeys: 5,
    maxPropArrayLength: 4,
    maxPropStringLength: 100,
  }))
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureInboxScreen />, {
    notes: `
          InboxScreen documentation about this component, supports markdown

          ~~~js
          <Button>Click</Button>
          ~~~
        `,
    }
  )
  .add('error', () => <PureInboxScreen error="Something" />);
