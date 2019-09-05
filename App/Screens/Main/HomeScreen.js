import React, { Component } from 'react';
import { Image, Text, Platform, ImageBackground, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProp, SwitchActions, NavigationActions } from 'react-navigation';
import { CenterColView, RootView, PadView } from '../../Components/Views';
import { Theme } from '../../Theme';
import { Log } from '../../Utilities/Log';


const _assets = Theme.Assets;
const _styles = Theme.Styles;

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
    Log._info('HomeScreen');
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
      <RootView>
         <PadView padding={(2, 3)}>
           <CenterColView>
             <View style={_styles.BtnContainer}>
               <TouchableOpacity
                 style={_styles.BtnBox}
                 onPress={() => navigate({ routeName: 'Survey', params: { name: 'Test' } })}
               >
                 <View>
                   <Text style={_styles.BtnTxt}>Try Suvery</Text>
                   <Image style={_styles.BtnImg} source={_assets.icons.icon_list} />
                 </View>
               </TouchableOpacity>
             </View>
             <View style={_styles.BtnContainer}>
               <TouchableOpacity
                 style={_styles.BtnBox}
                 onPress={() => navigate({ routeName: 'Record', params: { name: 'Test' } })}
               >
                 <View>
                   <Text style={_styles.BtnTxt}>Record Test</Text>
                   <Image style={_styles.BtnImg} source={_assets.icons.icon_record} />
                 </View>
               </TouchableOpacity>
             </View>
           </CenterColView>
           </PadView>
      </RootView>
      </ImageBackground>
    );
  }
}

export { HomeScreen }
