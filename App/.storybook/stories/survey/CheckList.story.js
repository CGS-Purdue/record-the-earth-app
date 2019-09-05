import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo }          from '@storybook/addon-info';

import { SurveyCheckList } from '../../../components/CheckList/SurveyCheckList';
import { item, actions } from './CheckListItem.story';

const defaultItems = [
  { ...item, id: '1', title: 'SoP Question 1', info: 'This is a item info' },
  { ...item, id: '2', title: 'SoP Question 2', info: 'This is a item info' },
  { ...item, id: '3', title: 'SoP Question 3', info: 'This is a item info' },
  { ...item, id: '4', title: 'SoP Question 4', info: 'This is a item info' },
  { ...item, id: '5', title: 'SoP Question 5', info: 'This is a item info' },
  { ...item, id: '6', title: 'SoP Question 6', info: 'This is a item info' },
];

const bioItems = [
  { ...item, id: 'tag_birds', title: 'Birds,', info: 'Sounds of Birds,' },
  { ...item, id: 'tag_insects', title: 'Insects,', info: 'Sounds of Insects,' },
  { ...item, id: 'tag_frogs', title: 'Frogs and Reptiles,', info: 'Sounds of Frogs and Reptiles,' },
  { ...item, id: 'tag_mammals', title: 'Mammals', info: 'Sounds of Mammals' },
];

const emoItems = [
  { ...item, id: 'tag_birds', title: 'Make me curious', info: 'Sounds of curious,' },
  { ...item, id: 'tag_birds', title: 'Amaze me',        info: 'Sounds of Amaze,' },
  { ...item, id: 'tag_insects', title:'Stress me out',   info: 'Sounds of Stress,' },
  { ...item, id: 'tag_frogs', title: 'Make me happy',    info: 'Sounds of Happy,' },
  { ...item, id: 'tag_mammals', title:'Relax me',         info: 'Sounds of Relax' },
];

const geoItems = [
  { ...item, id: 'tag_birds',   title: 'Wind',    info: 'Sounds of Wind' },
  { ...item, id: 'tag_birds',   title: 'Water',   info: 'Sounds of Water' },
  { ...item, id: 'tag_insects', title: 'Thunder', info: 'Sounds of Thunder' },
  { ...item, id: 'tag_frogs',   title: 'Rain',    info: 'Sounds of Rain' },
];

const antItems = [
  { ...item, id: 'tag_machines',   title: 'Machines',      info: 'Sounds of Machines' },
  { ...item, id: 'tag_vehicles',   title: 'Vehicles',      info: 'Sounds of Vehicles' },
  { ...item, id: 'tag_alarms', title: 'Sirens Alarms', info: 'Sounds of Alarms' },
  { ...item, id: 'tag_talking',   title: 'Talking',       info: 'Sounds of Talking' },
];

var tagText = {
  tagBird: 'Birds',
  tagInsect: 'Insects',
  tagFrogs: 'Frogs and Reptiles',
  tagMammals: 'Mammals',
  tagWind: 'Wind' ,
  tagWater: 'Water',
  tagThunder: 'Thunder',
  tagRain: 'Rain',
  tagVehicles: 'Vehicles',
  tagSirens: 'Sirens / Alarms',
  tagTalk: 'Talking',
  tagMachines: 'Machines'
};



storiesOf('Survey|Checklist', module)
  // .addDecorator(withSmartKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('emophony', () => <SurveyCheckList items={emoItems} {...actions} />)
  .add('biophony', () => <SurveyCheckList items={bioItems} {...actions} />)
  .add('geophony', () => <SurveyCheckList items={geoItems} {...actions} />)
  .add('antphony', () => <SurveyCheckList items={antItems} {...actions} />)
  .add('loading', () => <SurveyCheckList loading items={defaultItems} {...actions} />)
