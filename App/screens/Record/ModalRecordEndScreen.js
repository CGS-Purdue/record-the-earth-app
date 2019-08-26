import React, {Component} from 'react';
import { Button, Text, View } from "react-native";
import { NavigationScreenProp } from 'react-navigation';
import Modal from "react-native-modal";

import { CenterView, CenterColView } from '../../Views/CenterView';
import { RootView } from '../../Views/RootView';

class ModalRecordEndScreen extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
    <RootView>
      <CenterView>
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          onBackdropPress={() => this.setState({ isVisible: false })}
          isVisible={this.state.isModalVisiUtilities/Filesystemble}
          backdropTransitionOutTiming={0}
        >
         <View style={{ flex: 1 }}>
         <Text>Hello!</Text>
         <Button title="Hide modal" onPress={this.toggleModal}/>
         </View>


        </Modal>
      </View>
      </CenterView>
    </RootView>
    );
  }
}



ModalRecordEndScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export { ModalRecordEndScreen }
