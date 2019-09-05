import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
// import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withInfo } from '@storybook/addon-info';

import Task from './Task';

export const task = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actions = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const longTitle = `This task's name is very large. In fact, the star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

storiesOf('Task', module)
  // .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => { return <Task task={object('task', { ...task })} {...actions} />; })
  .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
  .add('selected', () => <Task task={{ ...task, state: 'TASK_SELECTED' }} {...actions} />)
  .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />)
  .add('long title', () => <Task task={{ ...task, title: longTitle }} {...actions} />);