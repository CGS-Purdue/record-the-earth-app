import React, {Component} from 'react';
import { Image, Button, Text, ImageBackground, Dimensions, TouchableOpacity, View } from 'react-native';
import { NavigationScreenProp, SwitchActions, NavigationActions } from 'react-navigation';
import { CenterColView, RootView } from '../../Views';
import { ThemeAssets, ThemeIcons } from '../../Theme';
import { HomeStylesheet } from './HomeStylesheet';


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
   console.log('ThemeAssets.JungleBg', {ThemeAssets});
   const { navigate } = this.props.navigation;

  return (
  <RootView>
    <ImageBackground style={{width:'100%', height:'100%'}} source={ThemeAssets.JungleBg}>

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
