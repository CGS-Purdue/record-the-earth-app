import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import { CenterColView, PadView, RootView } from '../../Components/Views';
import { SvgLogo } from '../../Components/Asset/SvgLogo';
import { SvgGradLogo } from '../../Components/Asset/SvgLogoGradient';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { FadeInView } from '../../Components/Transition/FadeInOutView';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;

const LogoStyles = {
  flex: 1,
  width: '70%',
  position: 'absolute',
  resizeMode: 'contain',
};

class AppHomeAnimatedScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('[SoundscapeHomeScreen] did mount', this.state);
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_background}
      >
        <View
          style={{
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <BlackFade />
        </View>
        <RootView>
          <PadView padding={(2, 3)}>
            <CenterColView>
              <FadeInView
                style={{
                  width: '100%',
                  flex: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image source={_assets.logos.logo_large} style={LogoStyles} />
              </FadeInView>
              <View
                style={{
                  width: '100%',
                  flex: 3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <View style={_styles.BtnContainer}>
                  <Text
                    style={[
                      _styles.BtnTxt,
                      {
                        color: 'rgba(225,225,225,.6)',
                        fontSize: 18,
                      },
                    ]}
                  >
                    {'(Press the Rec button to start)'}
                  </Text>
                  <TouchableOpacity
                    style={_styles.BtnBox}
                    onPress={() =>
                      navigate({
                        routeName: 'Survey',
                        params: { name: 'Survey' },
                      })
                    }
                  >
                    <View
                      style={{
                        flex: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 150,
                      }}
                    >
                      <SvgGradLogo />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </CenterColView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { AppHomeAnimatedScreen };
