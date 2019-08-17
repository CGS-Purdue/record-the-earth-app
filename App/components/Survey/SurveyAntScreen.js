import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class SurveyBioScreen extends React.Component {
  static navigationOptions = {
    title: 'Human Survey Screen',
    style: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFD700'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      ischeckedTalking: true,
      ischeckedVehicles: false,
      ischeckedAlarms: false,
      ischeckedMachines: true,
    };
  }

  onChangeCheckTalking() {   this.setState({ ischeckedTalking: !this.state.ischeckedTalking });  }
  onChangeCheckVehicles() {  this.setState({ ischeckedVehicles: !this.state.ischeckedVehicles });  }
  onChangeCheckAlarms() {    this.setState({ ischeckedAlarms: !this.state.ischeckedAlarms });  }
  onChangeCheckMachines() {  this.setState({ ischeckedMachines: !this.state.ischeckedMachines });  }

  selectAll() {
    this.setState({
      ischeckedTalking: true,
      ischeckedVehicles: true,
      ischeckedAlarms: true,
      ischeckedMachines: true
    });
  }

  unSelectAll() {
    this.setState({
      ischeckedTalking: false,
      ischeckedVehicles: false,
      ischeckedAlarms: false,
      ischeckedMachines: false
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
            title="Talking"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            value={this.state.ischeckedTalking}
            checked={this.state.ischeckedTalking}
            onPress={this.onChangeCheckTalking.bind(this)}
          /> 
          <CheckBox
            title="Vehicles"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ischeckedVehicles}
            value={this.state.ischeckedVehicles}
            onPress={this.onChangeCheckVehicles.bind(this)}
          />
          <CheckBox
            title="Alarms"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ischeckedAlarms}
            value={this.state.ischeckedAlarms}
            onPress={this.onChangeCheckAlarms.bind(this)}
          />
          <CheckBox
            title="Machines"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            value={this.state.ischeckedMachines}
            checked={this.state.ischeckedMachines}
            onPress={this.onChangeCheckMachines.bind(this)}
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
    alignItems: 'center',
    borderColor: '#008080'
  },
  writeup: {
    flex: 0,
    backgroundColor: '#FFE4B5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8
  },
  innerview: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
});