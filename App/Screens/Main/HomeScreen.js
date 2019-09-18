import React, { Component } from 'react';
import { Image, Text, ImageBackground, TouchableOpacity, View } from 'react-native';
import { CenterColView, Section, CenterView, PadView,RootView } from '../../Components/Views';
import { SvgRecord } from '../../Components/Asset/SvgRecord';
import { Theme } from '../../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;

const LogoStyles = {
  flex: 1,
  width: 300,
  height: '20%',
  top: '10%',
  position: 'absolute',
  resizeMode: 'contain',
};


class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }


  handleSurveyButtonPress() {
    console.log('handling survey button');
    console.log(this);
  }

  // componentWillMount()
  // componentDidMount()
  // componentWillReceiveProps(nextProps)
  // shouldComponentUpdate(nextProps, nextState) -> boolean
  // componentDidUpdate(prevProps, prevState)

  render() {
    const { navigate } = this.props.navigation;

    return (
        <ImageBackground
           style={_styles.bgImg}
           source={_assets.images.img_background}>
          <RootView>
            <PadView padding={(2, 3)}>
            <CenterView>

            <Section>
              <Image
                 source={_assets.logos.logo_large}
                 style={_styles.logo_main}
              />
            </Section>

            <Section>
              <SvgRecord/>
            </Section>

            <Section>
              <View style={_styles.BtnContainer}>
              <TouchableOpacity style={_styles.BtnBox} onPress={
                () => navigate({ routeName: 'Survey', params: { name: 'Test' } })
              }>
              <View>
              <Text style={_styles.BtnTxt}>Try Suvery</Text>
              <Image style={_styles.BtnImg} source={_assets.icons.icon_list} />
              </View>
              </TouchableOpacity>
              </View>
              <View style={_styles.BtnContainer}>
                <TouchableOpacity style={_styles.BtnBox} onPress={
                  () => navigate({ routeName: 'Record', params: { name: 'Test' }}
                )}>
                 <View>
                  <Text style={_styles.BtnTxt}>Record Test</Text>
                  <Image style={_styles.BtnImg} source={_assets.icons.icon_record} />
                  </View>
                </TouchableOpacity>
               </View>
            </Section>

            </CenterView>
          </PadView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { HomeScreen };
