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
    title: 'Survey Screen',
    style: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#FFD700'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      ischeckedInsects: true,
      ischeckedBirds: false,
      ischeckedMammals: false,
      ischeckedFrogs: true,
    };
  }

  onChangeCheckInsects() {  this.setState({ ischeckedInsects: !this.state.ischeckedInsects });  }
  onChangeCheckBirds() {    this.setState({ ischeckedBirds: !this.state.ischeckedBirds });  }
  onChangeCheckMammals() {  this.setState({ ischeckedMammals: !this.state.ischeckedMammals });   }
  onChangeCheckFrogs() {    this.setState({ ischeckedFrogs: !this.state.ischeckedFrogs });  }

  selectAll() {
    this.setState({
      ischeckedInsects: true,
      ischeckedBirds: true,
      ischeckedMammals: true,
      ischeckedFrogs: true
    });
  }

  unSelectAll() {
    this.setState({
      ischeckedInsects: false,
      ischeckedBirds: false,
      ischeckedMammals: false,
      ischeckedFrogs: false
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