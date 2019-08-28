import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';


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

export { SurveyMainScreen }
