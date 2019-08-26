import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { Recorder } from '../../Components/Recorder';
import { RootView } from '../../Views/RootView';
import { CenterView } from '../../Views/CenterView';


class RecordScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('LOADED');
  }

  render() {
    return (
      <RootView>
        <CenterView>
          <Recorder />
        </CenterView>
      </RootView>
    )
  }
}

RecordScreen.defaultProps = {
  color: 'green'
};

RecordScreen.navigationOptions = {
  header: null,
  mode: 'modal',
  headerMode: 'none',
  tabBarVisible: false,
  title: 'recorder',
};

export { RecordScreen }
