import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AudioPlayButton } from '../../Components/AudioPlayer/AudioPlayButton';
import { Theme } from '../../Theme';
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;

class SoundFileListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: false,
    };
  }

  togglePlayState(playing){
    if (typeof playing === 'undefined'){
      console.log('[SoundFileListViewItem] togglePlayState toggle', !this.state.playState);
      this.setState({ playState : !this.state.playState })
    } else {
      console.log('[SoundFileListViewItem] togglePlayState set', playing);
      this.setState({ playState : playing })
    }
  }

  play(){
   this.togglePlayState(true)
  }

  stop(){
   this.togglePlayState(false)
  }

  _onSelect = () => {
    // IF THE PLAYSTATE WAS LEFT IN ACTIVE STATE WHEN SELECTING ANOTHER ITEM
    // SET IT TO PAUSED RATHER THAN PLAYING RIGHT AWAY IF THE ITEM WAS SELECTED
    // USING THE DATA AREA VS. THE PLAY BUTTON.
    if (this.state.playState){
      console.log('[SoundFileListViewItem] onSelect');
      this.togglePlayState(false);
    } else {
      console.log('[SoundFileListViewItem] onSelect');
      this.togglePlayState(false);
    }
    this.props.onSelect({
      id: this.props.id,
      fileUri: this.props.fileUri,
    });
  };

  handlePlayButton = () => {
    console.log('[SoundFileListViewItem] handlePlayButton', this);
    console.log('[SoundFileListViewItem] handlePlayButton', this.props.id, this.props.fileUri);

    if (!this.props.selected){
      console.log('[SoundFileListViewItem] not previusly selected');
      this.props.onSelect({
        id: this.props.id,
        fileUri: this.props.fileUri,
      });
      this.togglePlayState(true);
    } else if (this.props.selected && this.state.playState){
      console.log('[SoundFileListViewItem] is selected');
      this.togglePlayState(false);
    } else if (this.props.selected && !this.state.playState){
      console.log('[SoundFileListViewItem] is selected');
      this.togglePlayState(true);
    } else {
      console.log('[SoundFileListViewItem] is selected');
    }
  };


  render() {
    return (
      <View style={_styles.listview_item}>
        <View style={[
          _styles.listview_item_surface, {
          backgroundColor: this.props.selected ? _colors.SHADE_LIGHTER_30 : _colors.SHADE_LIGHTER_60,
        }]}>
          <View style={_styles.listview_sounditem_playbtn_box}>
            <AudioPlayButton
              style={_styles.listview_sounditem_playbtn_icon}
              onPress={this.handlePlayButton}
              size={_vars.LIBRARY_PLAY_BTN_SIZE * 0.7}
              color={_colors.PRIMARY}
              isPlaying={this.state.playState && this.props.selected}
            />
          </View>
          <TouchableOpacity
            onPress={() => this._onSelect()}
            style={[_styles.listview_item_touchable, {
                backgroundColor: this.props.selected
                ? _colors.SHADE_LIGHTER_30 : _colors.SHADE_LIGHTER_60,
            }]}>
            <View style={_styles.listview_item_text_box}>
              <Text style={_styles.listview_item_text}>{this.props.name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { SoundFileListViewItem };
