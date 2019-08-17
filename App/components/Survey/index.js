import * as React from 'react';
import { FlatList, StyleSheet, Text, Button, View } from 'react-native';

import { createAppContainer, createStackNavigator } from 'react-navigation';
import SurveyBioScreen from './SurveyBioScreen'
import CombinedSurvey from './CombinedSurvey'
import SurveyGeoScreen from './SurveyGeoScreen'
import SurveyAntScreen from './SurveyAntScreen'
import SurveyEmoScreen from './SurveyEmoScreen'

class SurveyMainScreen extends React.Component {
  static navigationOptions = {
    title: 'Survey',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Survey Stack</Text>

        <Button
          title="Combined Survey"
          onPress={() => navigate('EmoSurvey', { name: 'EmoSurvey' })}
        />
        <Button
          title="Start Ordered Survey"
          onPress={() => navigate('SurveyScreen1', { name: 'SurveyScreen1' })}
        />

        <Button
          title="Survey Bio"
          onPress={() => navigate('BioSurvey', { name: 'BioSurvey' })}
        />
        <Button
          title="Survey Geo"
          onPress={() => navigate('GeoSurvey', { name: 'GeoSurvey' })}
        />
        <Button
          title="Survey Anthro"
          onPress={() => navigate('AntSurvey', { name: 'AntSurvey' })}
        />
        <Button
          title="Survey Emo"
          onPress={() => navigate('EmoSurvey', { name: 'EmoSurvey' })}
        />

      </View>
    );
  }
}


class OrderedSurveyScreen1 extends React.Component {
  static navigationOptions = {
    title: 'Survey 1',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <SurveyBioScreen />
        <Button title="Next" onPress={() => navigate('EmoSurvey', { name: 'EmoSurvey' })} />
      </View>
    );
  }
}

const SurveyStack = createStackNavigator({
  CombinedSurvey: { screen: CombinedSurvey },
  SurveyMain: { screen: SurveyMainScreen },
  SurveyScreen1: { screen: OrderedSurveyScreen1 },
  BioSurvey: { screen: SurveyBioScreen },
  EmoSurvey: { screen: SurveyEmoScreen },
  GeoSurvey: { screen: SurveyGeoScreen },
  AntSurvey: { screen: SurveyAntScreen },

});

export default SurveyStack;
