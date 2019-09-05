import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { Recorder } from '../../Components/Recorder';

class RecordScreen extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.state = { counter: 0 };
  }

  componentDidMount() {
    console.log('LOADED');
  }

  render() {
    return (
      <View>
      <Text style={{ fontSize: 30 }}>Recorder</Text>
      <Recorder />
      </View>
    )
  }
}

RecordScreen.defaultProps = {
  color: 'blue'
};

RecordScreen.navigationOptions = {
  header: null,
  mode: 'modal',
  headerMode: 'none',
  tabBarVisible: false,
  title: 'recorder',
};

export { RecordScreen }
