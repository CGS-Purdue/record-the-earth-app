import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import { NavigationScreenProp, SwitchActions, NavigationActions } from 'react-navigation';
import { Image, Button, Text, Dimensions, TouchableOpacity, View, } from 'react-native';
import { HomeStylesheet } from './HomeStylesheet';
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
   const { navigate } = this.props.navigation;

  return (
  <RootView>
    <CenterColView>
      <View style={HomeStylesheet.welcomeContainer}>
        <Text style={HomeStylesheet.getStartedText}>Suvery</Text>
        <TouchableOpacity
            style={HomeStylesheet.helpLink}
            onPress={() => navigate({routeName: 'Survey', params:{name:'Test'}})}>
          <Image style={HomeStylesheet.welcomeImage} source={ThemeIcons.record.module} />
        </TouchableOpacity>
      </View>

      <View style={HomeStylesheet.welcomeContainer}>
        <Text style={HomeStylesheet.getStartedText}>ModalRecord</Text>
        <TouchableOpacity
          style={HomeStylesheet.helpLink}
          onPress={() => navigate({routeName: 'Record', params:{name:'Test'}})}>
           <Image style={HomeStylesheet.welcomeImage} source={ThemeIcons.record.module} />
        </TouchableOpacity>
      </View>
    </CenterColView>
  </RootView>
   );
  }
}
HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};


export { HomeScreen }
