import React, { Component } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View  } from 'react-native';
import { Section, CenterView, PadView, RootView } from '../../Components/Views';
// import { SvgLogo } from '../../Components/Asset/SvgLogo';
// import { SvgGradLogo } from '../../Components/Asset/SvgLogoGradient';
import RecordButtonSvgXml from '../../Assets/svg/RecordButtonSvgXml';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { FadeInView } from '../../Components/Transition/FadeInOutView';
import { RippleButton } from '../../Components/Button/RippleButton';
import { StackActions } from 'react-navigation';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _fonts = Theme.Fonts;
const _styles = Theme.Styles;

const recIntroTextStyle = Object.assign({},
    _styles.BtnTxt, {
    color: 'rgba(225,225,225,.6)',
    fontSize: 18
  }
);

const LogoStyles = {
  flex: 1,
  width: '70%',
  position: 'absolute',
  resizeMode: 'contain',
};

const GradientFillContainerStyle = {
  flex: 1,
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
   width:'100%',
  height:'100%',
};
const FadeInViewContainerStyles = {
  width: '100%',
  flex: 2,
  alignItems: 'center',
  justifyContent: 'center',
};

const GradLogoSvgStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  width: 150,
  height: 150,
  flex: 0,
}

class AppHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloaded: false
    };

    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    console.log('[AppHomeScreen] did mount');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <RootView>
        <View style={GradientFillContainerStyle}>
          <BlackFade />
        </View>
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
            <PadView padding={[5, 3]}>
              <Text style={recIntroTextStyle}>{'(Press the Rec button to start)'}</Text>
              <RippleButton
                image={_assets.buttons.btn_record_start}
                style={_styles.btn_rec_start}
                onPress={() => { this.props.navigation.navigate({ routeName: 'Record'}) }}
                />
            </PadView>
          </Section>
        </CenterView>
      </RootView>
    );
  }
}

export { AppHomeScreen };
