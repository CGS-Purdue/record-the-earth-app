import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _assets = Theme.Assets;

export default class RippleButton extends React.Component {
  render() {
    return (
      <View>
        <Text style={LinksScreenStyles.optionsTitleText}>Ripple</Text>

        <Touchable
          style={LinksScreenStyles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressDocs}>
          <View style={{ flexDirection: 'row' }}>

            <View style={LinksScreenStyles.optionIconContainer}>
              <Image
                source={_assets.icons.icon_list}
                resizeMode="contain"
                fadeDuration={0}
                style={{ width: 20, height: 20, marginTop: 1 }}
              />
            </View>
          </View>

        </Touchable>

        <Touchable
          style={LinksScreenStyles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressForums}>

          <View style={{ flexDirection: 'row' }}>
            <View style={LinksScreenStyles.optionIconContainer}>
              <Ionicons name="ios-chatboxes" size={22} color="#ccc" />
            </View>

            <View style={LinksScreenStyles.optionTextContainer}>
              <Text style={LinksScreenStyles.optionText}>Ask a question on the Expo forums</Text>
            </View>
          </View>
        </Touchable>

      </View>
    );
  }

  _handlePressDocs = () => {
    WebBrowser.openBrowserAsync('http://docs.expo.io');
  };

  _handlePressForums = () => {
    WebBrowser.openBrowserAsync('http://forums.expo.io');
  };
}


const LinksScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  optionIconContainer: {
    marginRight: 9,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
  optionText: {
    fontSize: 15,
    marginTop: 1,
  },
});


export { RippleButton };
