import React, { Component } from 'react';
import { Text, Image, Modal, TouchableHighlight, Alert } from 'react-native';
import { Card, Button  } from 'react-native-elements';
import { NavigationScreenProp } from 'react-navigation';
import { CenterView, RootView } from '../../Components/Views';
import { ThemeColors, Styles } from '../../Theme';

class ModalRecordStartScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  componentDidMount() {
    // this.setState({ modalVisible: false });
  }

  componentWillUnmount() {
    this.setState({ modalVisible: false });
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <RootView>
        <CenterView style={[{ backgroundColor: ThemeColors.GRN_300 }]}>
          <Modal
            animationType="fade"
            transparent={false}
            onDismiss={() => this.props.navigation.navigate('RecordEnd')}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}
          >
            <Card containerStyle={{ display: 'none' }} title="CARD DIVIDER">
              <Image
                style={Styles.image}
                resizeMode="cover"
                source={{
                  uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
                }}
              />
              <Text style={Styles.name}>
                <Text h2>Heading 2</Text>
              </Text>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Button
                  title="Button with icon object"
                  icon={{
                    name: 'arrow-forward',
                    size: 25,
                    raised: true,
                    color: 'green',
                  }}
                />
              </TouchableHighlight>
            </Card>
          </Modal>

          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <Text>Show Modal</Text>
          </TouchableHighlight>
        </CenterView>
      </RootView>
    );
  }
}

ModalRecordStartScreen.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

export { ModalRecordStartScreen };
