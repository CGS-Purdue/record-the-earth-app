import React, { Component } from 'react';
import { StyleSheet, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { CenterColView, RootView, PadView } from '../../Components/Views';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CheckButton } from '../../Components/Button/CheckButton';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles  = Theme.Styles;

class SurveyBioScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insects: false,
      birds: false,
      mammals: false,
      frogs: false,
    };
    this.state._survey = this.props.navigation.state.params;
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyBio = {
       insects: this.state.insects,
       birds: this.state.birds,
       mammals: this.state.mammals,
       frogs: this.state.frogs,
     };
     let survey_data = Object.assign(empty, this.state._survey, {surveyBio});
     console.log('survey_data',survey_data);
     return survey_data;
  }

  _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
  }

  _setPreviousSurveyData = (data) => {
    this.setState({ _survey : data });
  }

  render() {
    const { navigate } = this.props.navigation;
    let survey_data = this.props.navigation.getParam('survey_data', {});
    console.log('survey_data', survey_data);
    return (
      <RootView>
        <CenterColView>
          <PadView padding={[2, 2]}>

            <HeadingText level={3}>
              Did you hear any of these sounds?
            </HeadingText>
            <CheckButton
              id={'insects'}
              onchecked={this._setSuveryItemState}
              text={'Insects'}
            />
            <CheckButton
              id={'Birds'}
              onchecked={this._setSuveryItemState}
              text={'Birds'}
            />
            <CheckButton
              id={'mammals'}
              onchecked={this._setSuveryItemState}
              text={'Mammals'}
            />
            <CheckButton
              id={'frogs'}
              onchecked={this._setSuveryItemState}
              text={'Frogs and Reptiles'}
            />

          <Button
            title={"Continue Button"}
            style={_styles.button_default}
            color={_colors.PRIMARY}
            accessibilityLabel="Go to next"
            onPress={() => {
              let result = this.getSurveyState();
              navigate('SurveyEmo', { survey_data: result })
            }}
          />
          </PadView>
        </CenterColView>
      </RootView>
    );
  }
}
SurveyBioScreen.navigationOptions = {
  title: 'SurveyBioScreen',
}


// <View style={Styles.innerview}>
//   <TouchableOpacity
//     style={Styles.options}
//     onPress={() => navigate('SurveyEmo', { data: '' })}
//   >
//     <Text>Continue</Text>
//   </TouchableOpacity>
// </View>
//
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  options: {
    flex: 1,
    alignItems: 'center',
    borderColor: '#008080',
  },
  writeup: {
    flex: 0,
    backgroundColor: '#FFE4B5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  innerview: {
    flex: 0.4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export { SurveyBioScreen };
