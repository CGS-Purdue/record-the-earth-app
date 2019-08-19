import React from 'react';
import { Button, Text, View, } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

const ModalRecordEndScreen = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>finish</Text>
      <Button
        onPress={() => navigation.navigate('RecordMain')}
        title="go back to main"
      />
    </View>
  </View>
);

ModalRecordEndScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export { ModalRecordEndScreen }
