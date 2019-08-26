import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import { NavigationScreenProp, SwitchActions, NavigationActions } from 'react-navigation';
import {
  Image,
  Button,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import { HomeStylesheet } from './HomeStylesheet';
import { IMAGE_ASSETS } from '../../Theme/Assets';
import { ThemeIcons } from '../../Theme/Icons';
import { CenterColView } from '../../Views/CenterView';
import { RootView } from '../../Views/RootView';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSurveyButtonPress(){
   console.log('handling survey button');
   console.log(this);
  };

 render() {
   console.log('IMAGE_ASSETS.JungleBg', {IMAGE_ASSETS});
   const { navigate } = this.props.navigation;

  return (
  <RootView>
    <ImageBackground style={{width:'100%', height:'100%'}} source={IMAGE_ASSETS.JungleBg}>

    <CenterColView>
      <View style={HomeStylesheet.welcomeContainer}>
        <TouchableOpacity
          style={HomeStylesheet.helpLink}
          onPress={() => navigate({
            routeName:'Survey',
            params:{name:'Test'}
          })}>
          <View>
            <Text style={HomeStylesheet.getStartedText}>Try Suvery</Text>
            <Image style={HomeStylesheet.welcomeImage} source={ThemeIcons.list.module} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={HomeStylesheet.welcomeContainer}>
        <Text style={HomeStylesheet.getStartedText}>Record Test</Text>
        <TouchableOpacity
          style={HomeStylesheet.helpLink}
          onPress={() => navigate({routeName: 'Record', params:{name:'Test'}})}>
           <Image style={HomeStylesheet.welcomeImage} source={ThemeIcons.record.module} />
        </TouchableOpacity>
      </View>
    </CenterColView>
  </ImageBackground>
  </RootView>
   );
  }
}
HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};


export { HomeScreen }
