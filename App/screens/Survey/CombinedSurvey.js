import * as React from 'react';
import { FlatList, StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { CheckBox } from 'react-native-elements';


export default class CombinedSurvey extends React.Component {
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
      ischeckedTalking: false,
      ischeckedVehicles: false,
      ischeckedAlarms: false,
      ischeckedMachines: false,
      ischeckedHappy: false,
      ischeckedRelax: false,
      ischeckedStress: false,
      ischeckedCurious: false,
      ischeckedRain: false,
      ischeckedWind: false,
      ischeckedWater: false,
      ischeckedThunder: false,
      ischeckedInsects: false,
      ischeckedBirds: false,
      ischeckedMammals: false,
      ischeckedFrogs: false,
    };
  }


  onChangeCheckTalking() {   this.setState({ ischeckedTalking:  !this.state.ischeckedTalking  });  }
  onChangeCheckVehicles() {  this.setState({ ischeckedVehicles: !this.state.ischeckedVehicles });  }
  onChangeCheckAlarms() {    this.setState({ ischeckedAlarms:   !this.state.ischeckedAlarms   });  }
  onChangeCheckMachines() {  this.setState({ ischeckedMachines: !this.state.ischeckedMachines });  }
  onChangeCheckHappy() {     this.setState({ ischeckedHappy:    !this.state.ischeckedHappy    });  }
  onChangeCheckRelax() {     this.setState({ ischeckedRelax:    !this.state.ischeckedRelax    });  }
  onChangeCheckStress() {    this.setState({ ischeckedStress:   !this.state.ischeckedStress   });  }
  onChangeCheckCurious() {   this.setState({ ischeckedCurious:  !this.state.ischeckedCurious  });  }
  onChangeCheckRain() {      this.setState({ ischeckedRain:     !this.state.ischeckedRain     });  }
  onChangeCheckWind() {      this.setState({ ischeckedWind:     !this.state.ischeckedWind     });  }
  onChangeCheckWater() {     this.setState({ ischeckedWater:    !this.state.ischeckedWater    });  }
  onChangeCheckThunder() {   this.setState({ ischeckedThunder:  !this.state.ischeckedThunder  });  }
  onChangeCheckInsects() {   this.setState({ ischeckedInsects:  !this.state.ischeckedInsects  });  }
  onChangeCheckBirds() {     this.setState({ ischeckedBirds:    !this.state.ischeckedBirds    });  }
  onChangeCheckMammals() {   this.setState({ ischeckedMammals:  !this.state.ischeckedMammals  });  }
  onChangeCheckFrogs() {     this.setState({ ischeckedFrogs:    !this.state.ischeckedFrogs    });  }

  selectAll() {
    this.setState({
      ischeckedTalking: false,
      ischeckedVehicles: false,
      ischeckedAlarms: false,
      ischeckedMachines: false,
      ischeckedHappy: false,
      ischeckedRelax: false,
      ischeckedStress: false,
      ischeckedCurious: false,
      ischeckedRain: false,
      ischeckedWind: false,
      ischeckedWater: false,
      ischeckedThunder: false,
      ischeckedInsects: false,
      ischeckedBirds: false,
      ischeckedMammals: false,
      ischeckedFrogs: false,
    });
  }

  unSelectAll() {
    this.setState({
      ischeckedTalking: false,
      ischeckedVehicles: false,
      ischeckedAlarms: false,
      ischeckedMachines: false,
      ischeckedHappy: false,
      ischeckedRelax: false,
      ischeckedStress: false,
      ischeckedCurious: false,
      ischeckedRain: false,
      ischeckedWind: false,
      ischeckedWater: false,
      ischeckedThunder: false,
      ischeckedInsects: false,
      ischeckedBirds: false,
      ischeckedMammals: false,
      ischeckedFrogs: false,
    });
  }

  render() {
    return (
      <View style={Styles.container}>
         <Text style={Styles.writeup}>
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
        <View style={StyleSheet.create({ flex: 1 })}>
              <CheckBox
                title="Insects"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                value={this.state.ischeckedInsects}
                checked={this.state.ischeckedInsects}
                onPress={this.onChangeCheckInsects.bind(this)}
              />
              <CheckBox
                title="Birds"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.ischeckedBirds}
                value={this.state.ischeckedBirds}
                onPress={this.onChangeCheckBirds.bind(this)}
              />
              <CheckBox
                title="Mammals"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.ischeckedMammals}
                value={this.state.ischeckedMammals}
                onPress={this.onChangeCheckMammals.bind(this)}
              />
              <CheckBox
                title="Frogs and Reptiles"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                value={this.state.ischeckedFrogs}
                checked={this.state.ischeckedFrogs}
                onPress={this.onChangeCheckFrogs.bind(this)}
              />
        </View>

        <View style={StyleSheet.create({ flex: 1 })}>
          <CheckBox
            title="Make me happy"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            value={this.state.ischeckedHappy}
            checked={this.state.ischeckedHappy}
            onPress={this.onChangeCheckHappy.bind(this)}
          />
          <CheckBox
            title="Relax me"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ischeckedRelax}
            value={this.state.ischeckedRelax}
            onPress={this.onChangeCheckRelax.bind(this)}
          />
          <CheckBox
            title="Stress me out"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={this.state.ischeckedStress}
            value={this.state.ischeckedStress}
            onPress={this.onChangeCheckStress.bind(this)}
          />
          <CheckBox
            title="Make me curious"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            value={this.state.ischeckedCurious}
            checked={this.state.ischeckedCurious}
            onPress={this.onChangeCheckCurious.bind(this)}
          />
        </View>

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
        <View style={Styles.innerview}>
          <TouchableOpacity style={Styles.options} onPress={this.selectAll.bind(this)}>
            <Text>Select All</Text>
          </TouchableOpacity>
        </View>
     </View>
    );
  }
}


const Styles = StyleSheet.create({
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
