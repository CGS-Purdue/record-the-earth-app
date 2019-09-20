import React, { Component } from 'react';
import { Button,ImageBackground, StyleSheet, Text, View } from 'react-native';
import { AnimatedSpring, ProgressCircle } from '../../Components/Animated/ProgressCircle';
// import * as WebBrowser from 'expo-web-browser';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _assets = Theme.Assets;

export default class LinksScreen extends Component {
  state = {
    progressValue : 0,
    syncing: false,
  }

  _handlePressButton = () => {
    if (this.state.syncing) {return false;}
    this.setState({ syncing: true });
    try {
      this.setState({progressValue: ((this.state.progressValue + 0.13) % 1)});
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ syncing: false });
  };

  _handleLongDelay = (e) => {
    this.longPressDelayTimeout = null;
      var curState = this.state.touchable.touchState;
     if (curState !== States.RESPONDER_ACTIVE_PRESS_IN &&
         curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
      console.error('Attempted to transition from state `' + curState + '` to `' +
          States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' +
         'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
    } else {
       this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
    }
  }

  render() {
    return (
      <ImageBackground style={_styles.bgImg} source={_assets.images.img_background}>
      <View>
        <Text style={LinksScreenStyles.optionsTitleText}>Test Area</Text>
        <ProgressCircle
          value={this.state.progressValue}
        />
        <AnimatedSpring
          value={this.state.progressValue}
        />
        <Button
          title={'button'}
          _handleLongDelay={this._handleLongDelay}
          onPress={this._handlePressButton}
          onPressIn ={()=>{
            console.log('TouchableOpacity onPressIn');
            console.log(Date.now());
          }}
          onLongPress ={(e)=>{
           console.log(' onLongPress');
           console.log(Date.now());
           console.log(e.type);
          }}
        />
      </View>
      </ImageBackground>
    );
  }
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


export { LinksScreen };
