import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { CenterView, RootView } from '../../Components/Views';
import { getLocationAsync } from '../../Utilities/LocationFunctions';
import { AudioRecord } from '../../Components/AudioRecorder/AudioRecord';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';
import { Theme } from '../../Theme';

const initSoundscape = () => {
  let soundscape = Object.assign({}, SoundscapeSchema);
  let timestamp = new Date();
  soundscape.datetime = timestamp.toISOString();
  return soundscape;
};

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;

class RecordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        coords: {
          latitude: '',
          longitude: '',
          altitude: '',
          accuracy: '',
          altitudeAccuracy: '',
          heading: '',
          speed: '',
        },
        timestamp: 0,
      },
      LatLong: '0,0',
    };
    this.location_data = {};
    this.soundscape_data = {};
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this.soundscape_data = initSoundscape();
    this._getLocationAsync();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  _handleLocationUpdate = async (_location) => {
      let _LatLong;
      if (_location.coords) {
        _LatLong = [
          _location.coords.latitude,
          _location.coords.longitude,
        ].join(',');
      } else {
        _LatLong = '-1,-1';
      }

    this.location_data = {
      location: _location,
      LatLong: _LatLong
    };

    if (this._isMounted) {
      this.setState({
        location: _location,
        LatLong: _LatLong
      })
    }
  }

  _getLocationAsync = async () => {
    let location = await getLocationAsync();
    this._handleLocationUpdate(location);
  }

  updateActivityData(soundData) {
    let soundscapeData = this.soundscape_data;
    soundscapeData.filename = soundData.soundfile;
    soundscapeData.duration = soundData.duration;
    soundscapeData.LatLong = this.state.LatLong;
    this.navigateForward(soundscapeData);
  }

  navigateForward(data) {
    console.log('navigating forward description', data);
    this.props.navigation.navigate({
      routeName: 'Survey',
      action: NavigationActions.navigate({
        routeName: 'SurveyDescScreen',
        params: { soundscape_data: data },
      }),
    });
  }


  navigateToStart() {
    this.props.navigation.navigate('Main');
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  render() {
    return (
      <ImageBackground
        style={_styles.bgImg}
        source={_assets.images.img_background}
      >
        <RootView>
          <CenterView>
            <AudioRecord
              onCompleted={(soundData) => {
                this.updateActivityData(soundData);
              }}
              onCanceled={() => {
                this.navigateToStart();
              }}
            />
          </CenterView>
        </RootView>
      </ImageBackground>
    );
  }
}

export { RecordScreen };
