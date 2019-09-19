import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Section, CenterView,  RootView } from '../../Components/Views';
import { RippleButton } from '../../Components/Button/RippleButton';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;



class HomeScreenScreen extends Component {
  constructor(props) {
    super(props);

    this.surveyPosition = 0;
    this.suveyKey = false;
  }

  handleSurveyButtonPress() {
    console.log('handling survey button');
    console.log(this);
  }

   handle_submit_description = () => {
     this.props.navigation.navigate('SurveyBio');
     let surveyDescription = this.state.text;
     this.setState({ survey_data: { description: surveyDescription }});
   }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
        <RootView>
          <CenterView>
            <Section weight={5} expand={true}>
              <View>
                <Image
                  source={_assets.logos.logo_large}
                  style={_styles.logo_main}
                />
                </View>
            </Section>

            <Section weight={5} align={'stretch'}>
              <RippleButton
                image={_assets.buttons.btn_record_start}
                style={_styles.btn_rec_start}
                onPress={() => navigate({ routeName: 'Record', params: { name: 'Test'}})}
              />
            </Section>
          </CenterView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { HomeScreenScreen };
