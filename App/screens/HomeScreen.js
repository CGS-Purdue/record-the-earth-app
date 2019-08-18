import * as WebBrowser from 'expo-web-browser';
import React, {Component} from 'react';
import { NavigationScreenProp, SwitchActions, NavigationActions } from 'react-navigation';
import { Image, Button, Text, Dimensions, TouchableOpacity, View, } from 'react-native';
import { HomeStylesheet } from './HomeStylesheet';
import { ThemeIcons } from '../Theme/Icons';


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
    <View style={HomeStylesheet.container}>
      <View style={HomeStylesheet.welcomeContainer}>

        <Text style={HomeStylesheet.getStartedText}>Suvery</Text>
        <TouchableOpacity style={HomeStylesheet.helpLink} onPress={() => navigate({routeName: 'Survey', params:{name:'Test'}})}>
           <Image style={HomeStylesheet.welcomeImage} source={ThemeIcons.record.module} />
        </TouchableOpacity>
      </View>

      <View style={HomeStylesheet.welcomeContainer}>
        <Text style={HomeStylesheet.getStartedText}>ModalRecord</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Record')}
          style={HomeStylesheet.helpLink}>
           <Image style={HomeStylesheet.welcomeImage} source={ThemeIcons.record.module} />
        </TouchableOpacity>
      </View>
    </View>
   );
  }
}
HomeScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

function handlerRecordPress() {
  WebBrowser.openBrowserAsync();
}


export { HomeScreen }
