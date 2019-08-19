import React from 'react';
import { storiesOf } from '@storybook/react';

import { withInfo }          from '@storybook/addon-info';
import { withKnobs, object } from '@storybook/addon-knobs/react';
// import { withSmartKnobs }    from 'storybook-addon-smart-knobs';

import { PureTaskList } from './TaskList';
import { task, actions } from './Task.story';

export const defaultTasks = [
  { ...task, id: '1', title: 'Task 1', info: 'This is a task info' },
  { ...task, id: '2', title: 'Task 2', info: 'This is a task info' },
  { ...task, id: '3', title: 'Task 3', info: 'This is a task info' },
  { ...task, id: '4', title: 'Task 4', info: 'This is a task info' },
  { ...task, id: '5', title: 'Task 5', info: 'This is a task info' },
  { ...task, id: '6', title: 'Task 6', info: 'This is a task info' },
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
];

export const withKnobsTasks = [
  ...defaultTasks.slice(0, 5),
  { id: '6', title: 'Task 6 (knob)', state: 'TASK_PINNED' },
];


storiesOf('TaskList', module)
  // .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />, {
    notes: 'test here'
  })
  .add('withKnobsTasks', () => { return <PureTaskList tasks={object('tasks', withKnobsTasks)} {...actions} />; })
  .add('withPinnedTasks', () => <PureTaskList tasks={withPinnedTasks} {...actions} />)
  .add('loading', () => <PureTaskList loading tasks={[]} {...actions} />)
  .add('empty', () => <PureTaskList tasks={[]} {...actions} />);
