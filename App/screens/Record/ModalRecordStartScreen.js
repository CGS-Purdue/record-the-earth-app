import React from 'react';
import { Button, Text, View, } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

const ModalRecordStartScreen = ({
  navigation
}:{
  navigation: NavigationScreenProp<NavigationState & any>;
}) => (
  <View
     style={{display:'flex', flex:1, justifyContent:'center', flexDirection: 'column'}}>
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>start</Text>
      <Button
        onPress={() => navigation.navigate('RecordEnd')}
        title="go 1"
      />
    </View>
  </View>
);

ModalRecordStartScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export { ModalRecordStartScreen }
