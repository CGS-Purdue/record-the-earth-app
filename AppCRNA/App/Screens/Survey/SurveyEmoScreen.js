import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { CheckBox } from 'react-native-elements';

export default class SurveyEmoScreen extends React.Component {
  static navigationOptions = {
    title: 'Emo Survey Screen',
    style: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#000000'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      ischeckedHappy: true,
      ischeckedRelax: false,
      ischeckedStress: false,
      ischeckedCurious: true,
    };
  }

  onChangeCheckHappy() {   this.setState({ ischeckedHappy: !this.state.ischeckedHappy });  }
  onChangeCheckRelax() {   this.setState({ ischeckedRelax: !this.state.ischeckedRelax });  }
  onChangeCheckStress() {  this.setState({ ischeckedStress: !this.state.ischeckedStress });  }
  onChangeCheckCurious() { this.setState({ ischeckedCurious: !this.state.ischeckedCurious });   }

  selectAll() {
    this.setState({
      ischeckedHappy: true,
      ischeckedRelax: true,
      ischeckedStress: true,
      ischeckedCurious: true
    });
  }

  unSelectAll() {
    this.setState({
      ischeckedHappy: false,
      ischeckedRelax: false,
      ischeckedStress: false,
      ischeckedCurious: false
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