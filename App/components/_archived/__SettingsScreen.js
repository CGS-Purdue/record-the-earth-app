import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Button, Text, View,  } from 'react-native';

export default class SettingsScreen extends React.Component {
    render() {
      return <ExpoConfigView />;
    }
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
