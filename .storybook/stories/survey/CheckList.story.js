import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo }          from '@storybook/addon-info';

import { SurveyCheckList } from '../../../src/components/CheckList/SurveyCheckList';
import { item, actions } from './CheckListItem.story';

export const defaultItems = [
  { ...item, id: '1', title: 'SoP Question 1', info: 'This is a item info' },
  { ...item, id: '2', title: 'SoP Question 2', info: 'This is a item info' },
  { ...item, id: '3', title: 'SoP Question 3', info: 'This is a item info' },
  { ...item, id: '4', title: 'SoP Question 4', info: 'This is a item info' },
  { ...item, id: '5', title: 'SoP Question 5', info: 'This is a item info' },
  { ...item, id: '6', title: 'SoP Question 6', info: 'This is a item info' },
];

storiesOf('Survey|Checklist', module)
  // .addDecorator(withSmartKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <SurveyCheckList items={defaultItems} {...actions} />)
  .add('loading', () => <SurveyCheckList loading items={[]} {...actions} />)
