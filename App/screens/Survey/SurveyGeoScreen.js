import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { CheckBox } from 'react-native-elements';

export default class SurveyGeoScreen extends React.Component {
  static navigationOptions = {
    title: 'Geo Survey Screen',
    style: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#000000'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      ischeckedRain: true,
      ischeckedWind: false,
      ischeckedWater: false,
      ischeckedThunder: true,
    };
  }

  onChangeCheckRain() {  this.setState({ ischeckedRain: !this.state.ischeckedRain });  }
  onChangeCheckWind() {  this.setState({ ischeckedWind: !this.state.ischeckedWind });  }
  onChangeCheckWater() {  this.setState({ ischeckedWater: !this.state.ischeckedWater });  }
  onChangeCheckThunder() {  this.setState({ ischeckedThunder: !this.state.ischeckedThunder });   }

  selectAll() {
    this.setState({
      ischeckedRain: true,
      ischeckedWind: true,
      ischeckedWater: true,
      ischeckedThunder: true
    });
  }

  unSelectAll() {
    this.setState({
      ischeckedRain: false,
      ischeckedWind: false,
      ischeckedWater: false,
      ischeckedThunder: false
    });
  }

  render() {

    return (
      <View style={styles.container}>
         <Text style={styles.writeup}>
          Did you hear any of these sounds?
        </Text>

        <View style={StyleSheet.create({ flex: 1 })}>
          <CheckBox
            title="Rain"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            value={this.state.ischeckedRain}
            checked={this.state.ischeckedRain}
            onPress={this.onChangeCheckRain.bind(this)}
          /> 
          <CheckBox
            title="Wind"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ischeckedWind}
            value={this.state.ischeckedWind}
            onPress={this.onChangeCheckWind.bind(this)}
          />
          <CheckBox
            title="Rushing Water"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ischeckedWater}
            value={this.state.ischeckedWater}
            onPress={this.onChangeCheckWater.bind(this)}
          />
          <CheckBox
            title="Thunder"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            value={this.state.ischeckedThunder}
            checked={this.state.ischeckedThunder}
            onPress={this.onChangeCheckThunder.bind(this)}
          />
        </View>

        <View style={styles.innerview}>
          <TouchableOpacity style={styles.options} onPress={this.selectAll.bind(this)}>
            <Text>Select All</Text>
          </TouchableOpacity>
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  options: {
    flex: 1,
    alignItems: 'flex-start',
    borderColor: '#008080'
  },
  writeup: {
    flex: 0,
    backgroundColor: '#FFE4B5',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 8
  },
  innerview: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
});