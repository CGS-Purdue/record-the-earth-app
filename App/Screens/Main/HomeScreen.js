import React, { Component } from 'react';
import { Image, ImageBackground, View } from 'react-native';
import { Section, CenterView, PadView, RootView } from '../../Components/Views';
import { RippleButton } from '../../Components/Button/RippleButton';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.surveyPosition = 0;
    this.suveyKey = false;
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground style={_styles.bgImg}>
        <RootView>
          <CenterView>
            <Section weight={4} expand={true}>
              <View>
                <Image
                  source={_assets.logos.logo_large}
                  style={_styles.logo_main}
                />
              </View>
            </Section>
            <Section weight={5} align={'center'}>
              <PadView padding={[5, 3]} styles={{ backgroundColor: 'red' }}>
                <RippleButton
                  image={_assets.buttons.btn_record_start}
                  style={_styles.btn_rec_start}
                  onPress={() => navigate({ routeName: 'Record' })}
                />
              </PadView>
            </Section>
          </CenterView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { HomeScreen };
