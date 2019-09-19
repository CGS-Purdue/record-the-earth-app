import React, { Component } from 'react';
import { Button, ImageBackground } from 'react-native';
import { CheckButton } from '../../Components/Button/CheckButton';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CenterView, CenterColView, PadView, RootView, } from '../../Components/Views';

import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;

  console.log(_styles);
class SurveyBioScreen extends Component {
  constructor(props) {
    super(props);

    this.surveyPosition = 5;
    this.surveyKey = 'hum';

    this.state = {
      insects: false,
      birds: false,
      mammals: false,
      frogs: false,
    };
    this.surveyBioRef = React.createRef();
    this.state._survey = this.props.navigation.state.params.survey_data;
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyBio = {
      insects: this.state.insects,
      birds: this.state.birds,
      mammals: this.state.mammals,
      frogs: this.state.frogs,
    };

    let _survey_data = this.state._survey;
    console.log(_survey_data);
    _survey_data.tags = Object.assign(empty, { bio: surveyBio });
    return _survey_data;
  };

  _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
  };

  _setPreviousSurveyData = (data) => {
    this.setState({ survey_data: data });
  };

  render() {
    const { navigate } = this.props.navigation;
    let survey_data = this.props.navigation.getParam('survey_data', {});
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_bg_cliff}
      >
        <RootView>
          <PadView padding={[2, 2]}>
            <CenterView>
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
                title={'Continue Button'}
                style={_styles.button_default}
                color={_colors.PRIMARY}
                accessibilityLabel="Go to next"
                onPress={() => {
                  let _survey_data = this.getSurveyState();
                  navigate('SurveyEmo', { survey_data: _survey_data });
                }}
              />
            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}
SurveyBioScreen.navigationOptions = {
  title: 'SurveyBioScreen',
};

// <View style={Styles.innerview}>
//   <TouchableOpacity
//     style={Styles.options}
//     onPress={() => navigate('SurveyEmo', { data: '' })}
//   >
//     <Text>Continue</Text>
//   </TouchableOpacity>
// </View>
//

export { SurveyBioScreen };
