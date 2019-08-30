import React, {Component} from 'react';
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

class ModalRecordEndScreen extends Component {
  state = {
    isModalVisible: false
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button title="Show modal" onPress={this.toggleModal} />
        <Modal
          onBackdropPress={() => this.setState({ isVisible: false })}
          isVisible={this.state.isModalVisible}
          backdropTransitionOutTiming={0}
        >
         <View style={{ flex: 1 }}>
         <Text>Hello!</Text>
         <Button title="Hide modal" onPress={this.toggleModal}/>
         </View>
        </Modal>
      </View>
    );
  }
}

export { ModalRecordEndScreen }
