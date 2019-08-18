import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class CheckBoxView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ischecked1: true,
      ischecked2: false,
      ischecked3: true,
    };
  }

  onChangeCheck1() {
    this.setState({ ischecked1: !this.state.ischecked1 });
  }
  onChangeCheck2() {
    this.setState({ ischecked2: !this.state.ischecked2 });
  }
  onChangeCheck3() {
    this.setState({ ischecked3: !this.state.ischecked3 });
  }

  render() {
    return (
      <View>
        <CheckBox title='Click Here' checked={this.state.checked} />
        <CheckBox
          center
          title='Click Here'
          checked={this.state.ischecked1}
        />
        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={this.state.ischecked2}
        />
        <CheckBox
          center
          title='Click Here to Remove This Item'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
          checked={this.state.ischecked2}
        />
      </View>
   )}
}
