import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import { Input } from 'react-native-elements';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import SurveyTags from './SurveyTags';
import SurveyText from './SurveyText';

export default class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
   return (
    <View>
    <FormLabel>Name</FormLabel>
      <FormInput onChangeText={handleChange}/>
      <FormValidationMessage>Error message</FormValidationMessage>
        <Text h2>Heading 2</Text>
        <SurveyTags />
        <SurveyText />
        <Button  title='BUTTON' />
    </View>
    );
  }
}
