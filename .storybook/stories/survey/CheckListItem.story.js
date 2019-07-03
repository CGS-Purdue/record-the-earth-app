import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
// import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withInfo } from '@storybook/addon-info';

import CheckListItem from '../../../src/components/CheckList/CheckListItem';

export const item = {
  id: '1',
  title: 'Test item',
  state: 'SURVEY_ITEM',
  updatedAt: new Date(2019, 0, 1, 9, 0),
};

export const actions = {
  onSelectedItem: action('onSelectedItem'),
};

storiesOf('Survey|List Item', module)
  // .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .add('default', () => { return <CheckListItem item={object('item', { ...item })} {...actions} />; })
  .add('selected', () => <CheckListItem item={{ ...item, state: 'ITEM_SELECTED' }} {...actions} />)
