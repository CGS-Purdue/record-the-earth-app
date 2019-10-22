import React, { Component } from 'react';
import { Image, ImageBackground, View , WebView } from 'react-native';
import { Section, CenterView, PadView, RootView } from '../../Components/Views';
import { RippleButton } from '../../Components/Button/RippleButton';
import { Theme } from '../../Theme';

import { StackActions } from 'react-navigation';
const _assets = Theme.Assets;
const _fonts = Theme.Fonts;
const _styles = Theme.Styles;

class AppHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _isMounted: false,
    };
  }
  componentDidMount() {
    this.setState({ _isMounted: true });
    console.log('[AppHomeScreen] did mount', this.state);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
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
            <PadView padding={[5, 3]}>
              <RippleButton
                image={_assets.buttons.btn_record_start}
                style={_styles.btn_rec_start}
                onPress={() => {
                  this.props.navigation.navigate({ routeName: 'Record'});
                }}
              />
            </PadView>
          </Section>
        </CenterView>
      </RootView>
    );
  }
}

export { AppHomeScreen };
