import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import { CenterColView, PadView,RootView } from '../../Components/Views';
import { SvgLogo } from '../../Components/Asset/SvgLogo';
import { SvgGradLogo } from '../../Components/Asset/SvgLogoGradient';
import { BlackFade } from '../../Components/Effects/LinearGradient';
import { FadeInView } from '../../Components/Animated/FadeInOutView';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;

const LogoStyles = {
  flex: 1,
  width: '70%',
  position: 'absolute',
  resizeMode: 'contain',
};


class TestScreen extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount()
  // componentDidMount()
  // componentWillReceiveProps(nextProps)
  // shouldComponentUpdate(nextProps, nextState) -> boolean
  // componentDidUpdate(prevProps, prevState)

  render() {
    return (
        <ImageBackground
          style={_styles.bgImg}
          source={_assets.images.img_background}>
          <View style={{flex: 1, position: 'absolute', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
            <BlackFade />
          </View>
          <RootView>
            <PadView padding={(2, 3)}>
              <CenterColView>
              <FadeInView style={{ width: '100%', flex: 2, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={_assets.logos.logo_large} style={LogoStyles}/>
              </FadeInView>

                <View style={{ width: '100%', flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                  <View style={_styles.BtnContainer}>
                    <TouchableOpacity style={_styles.BtnBox}>
                      <View style={{
                        flex: 0,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 150,
                      }}>
                        <SvgGradLogo/>
                        <Text style={[{},_styles.BtnTxt]}>Record Test</Text>
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

export { TestScreen };
