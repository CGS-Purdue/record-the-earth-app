import React, { Component } from 'react';
import { Button, View, ImageBackground } from 'react-native';
import { CheckButton } from '../../Components/Button/CheckButton';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CenterView, Section, PadView, RootView } from '../../Components/Views';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;


class SurveyBioScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      insects: false,
      birds: false,
      mammals: false,
      frogs: false,
    };

    this.surveyPosition = 2;
    this.surveyKey = 'bio';

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
        <View style={{flex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
          <BlackFade />
        </View>
          <RootView>
            <PadView padding={[2, 2]}>
              <CenterView>
                <Section weight={1} expand={true} shrink={true}>
                  <HeadingText level={3} style={_styles.survey_screen_title}>
                    {'Did you hear any of these sounds?'}
                  </HeadingText>
                </Section>

                <Section
                  weight={3}
                  expand={true}
                  justify={'flex-start'}
                  align={'stretch'}
                >
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
                  <View style={{
                    height: 10,
                    backgroundColor: _colors.TRANSPARENT,
                  }}></View>
                  <Button
                    title={'Continue'}
                    style={_styles.button_default}
                    color={_colors.BLU_100}
                    accessibilityLabel="Go to next"
                    onPress={() => {
                      let _survey_data = this.getSurveyState();
                      navigate('SurveyEmo', { survey_data: _survey_data });
                    }}
                  />
              </Section>
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

export { SurveyBioScreen };
