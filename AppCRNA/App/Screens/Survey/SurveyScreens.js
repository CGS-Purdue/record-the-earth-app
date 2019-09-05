import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

import { NavigationScreenProp } from 'react-navigation';
import CombinedSurvey from './CombinedSurvey';

const SurveyScreen0 = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>modal</Text>
      <Button
        title="Start"
        onPress={() => navigation.navigate('SurveyStart')}
      />
    </View>
    <Button
      title="Update the title"
      onPress={() => this.props.navigation.setParams({otherParam: 'Updated!'})}
    />
    <View>
      <Text style={{ fontSize: 30 }}>back button</Text>
      <Button style={{ color: 'black' }}
        title="Dismiss"
        onPress={() => navigation.goBack()}
      />
    </View>
  </View>
);
SurveyScreen0.navigationOptions = {
  header: null,
  tabBarVisible: false,
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#ff0000',
  headerTitleStyle: {
    fontWeight: 'bold',
  }
};


const SurveyStartScreen = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CombinedSurvey />
      <Button
        onPress={() => navigation.navigate('SurveyScreen1')}
        title="go 1" />
    </View>
  </View>
);
SurveyStartScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

const SurveyScreen1 = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>survey 1</Text>
      <Button
        onPress={() => navigation.navigate('SurveyScreen2')}
        title="go 2"
      />
    </View>
  </View>
);
SurveyScreen1.navigationOptions = {
  header: null,
  tabBarVisible: false
};

const SurveyScreen2 = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>survey 2</Text>
      <Button
        onPress={() => navigation.navigate('SurveyScreen3')}
        title="go 3"
      />
    </View>
  </View>
);
SurveyScreen2.navigationOptions = {
  header: null,
  tabBarVisible: false
};


const SurveyScreen3 = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>survey 3</Text>
      <Button
        onPress={() => navigation.navigate('SurveyScreen4')}
        title="go 4"
      />
    </View>
  </View>
);
SurveyScreen3.navigationOptions = {
  header: null,
  tabBarVisible: false
};


const SurveyScreen4 = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>survey 4</Text>
      <Button
        onPress={() => navigation.navigate('SurveyMain')}
        title="done"
      />
    </View>
  </View>
);
SurveyScreen4.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export {
  SurveyStartScreen,
  SurveyScreen0,
  SurveyScreen1,
  SurveyScreen2,
  SurveyScreen3,
  SurveyScreen4,
}