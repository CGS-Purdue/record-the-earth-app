import React, {Component} from 'react';
import { StyleSheet, Text, TouchableHighlight, View, FlatList, Button, TouchableOpacity } from 'react-native';
import { NavigationScreenProp, NavigationActions } from 'react-navigation';

import { Input } from 'react-native-elements';
class SurveyScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Useless Placeholder',
      myName: 'empty',
      name: 'none',
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const name = this.props.navigation.getParam('name', 'fallback');

    return (
      <View>
        <Input
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='INPUT WITH CUSTOM ICON'
          label='Label'
          errorMessage='Error Message'
          containerStyle={{borderColor:'red'}}
          inputContainerStyle={{backgroundColor:'blue'}}
        />
      <Text>name : {this.props.navigation.state.name}</Text>
      <Text>myName :{this.state.myName}</Text>
        <Button
          title="next"
          onPress={() => navigate('SurveyMain', { name: 'Brent' })}
         />
      </View>
    )
  }
}

SurveyScreen.navigationOptions = {
  title:'SurveyHome'
};

export { SurveyScreen }
