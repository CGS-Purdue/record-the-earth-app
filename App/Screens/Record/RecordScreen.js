import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { CenterView, RootView } from '../../Components/Views';
import { filterFalse } from '../../Utilities/Functions';
import { getLocationAsync } from '../../Utilities/LocationFunctions';
import { AudioRecord } from '../../Components/AudioRecorder/AudioRecord';
import { Theme } from '../../Theme';
import { SoundscapeSchema } from '../../Components/Database/SurveyModel/SurveySchema3';

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
      location: '0,0',
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let location = await getLocationAsync();
    this.setState({ location });
  };

  navigateToStackChild(data) {
    this.props.navigation.navigate({
      routeName: 'Survey',
      action: NavigationActions.navigate({
        routeName: 'SoundscapeSurveyDescription',
        params: data,
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
              onCompleted={(_soundfile) => {
                let soundscapeData = initSoundscape();
                let location = this.state.location;
                let _LatLong = [
                  location.coords.latitude,
                  location.coords.latitude,
                ].join(',');

                // if mocked is true then do not add the data to the db
                let locationIsMocked = location.mocked;
                if (!locationIsMocked){
                  soundscapeData.LatLong = _LatLong;
                }
                soundscapeData.filename = _soundfile,
                this.navigateToStackChild({ soundscape_data: soundscapeData });
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
