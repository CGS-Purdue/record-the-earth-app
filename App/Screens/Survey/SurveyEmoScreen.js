import React, { Component } from 'react';
import { Button, View, ImageBackground } from 'react-native';
import { CheckButton } from '../../Components/Button/CheckButton';
import { HeadingText } from '../../Components/Text/HeadingText';
import { CenterView, Section, PadView, RootView } from '../../Components/Views';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _assets = Theme.Assets;
const _styles = Theme.Styles;


class SurveyEmoScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      happy: true,
      relax: false,
      stress: false,
      curious: true,
    };

    this.surveyPosition = 4;
    this.surveyKey = 'emo';

    this.surveyEmoRef = React.createRef();
    this.state._survey = this.props.navigation.state.params.survey_data;
  }

  getSurveyState = () => {
    let empty = Object.create(null);
    let surveyEmo = {
      happy: this.state.happy,
      relax: this.state.relax,
      stress: this.state.stress,
      curious: this.state.curious,
    };

    let _survey_data = this.state._survey;
    console.log(_survey_data);
    _survey_data.tags = Object.assign(empty, this.state._survey.tags, {
      emo: surveyEmo,
    });
    return _survey_data;
  };

  _setSuveryItemState = (item) => {
    let newState = Object.create(null);
    newState[item.id] = item.checked;
    this.setState(newState);
  };

  _setPreviousSurveyData = (data) => {
    this.setState({ _survey: data });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
    <ImageBackground
      style={_styles.bgImg}
      source={_assets.images.img_bg_lilyflower}
    >
      <View style={{flex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
        <BlackFade />
      </View>
        <RootView>
          <PadView padding={[1, 2]}>
            <CenterView>
              <Section weight={1} expand={true} shrink={true}>
                <HeadingText level={3} style={_styles.survey_desc_title}>
                  {'Describe the sounds you heard'}
                </HeadingText>
              </Section>

              <Section
                weight={3}
                expand={true}
                justify={'flex-start'}
                align={'stretch'}
              >

              <CheckButton
                id={'happy'}
                onchecked={this._setSuveryItemState}
                text={'Make me happy'}
              />
              <CheckButton
                id={'relax'}
                onchecked={this._setSuveryItemState}
                text={'Relax me'}
              />
              <CheckButton
                id={'curious'}
                onchecked={this._setSuveryItemState}
                text={'Make me curious'}
              />
              <CheckButton
                id={'stress'}
                onchecked={this._setSuveryItemState}
                text={'Stress me out'}
              />
              <View style={{
                  height: 10,
                  backgroundColor: _colors.TRANSPARENT,
                }}></View>
              <Button
                title={'Continue '}
                style={_styles.button_default}
                color={_colors.PRIMARY}
                accessibilityLabel="Go to next"
                onPress={() => {
                  let _survey_data = this.getSurveyState();
                  navigate('SurveyGeo', { survey_data: _survey_data });
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

SurveyEmoScreen.navigationOptions = {
  title: 'SurveyEmoScreen',
};

export { SurveyEmoScreen };
