import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { AudioPlayButton } from '../../Components/AudioPlayer/AudioPlayButton';
import { Theme } from '../../Theme';
const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;

class FileListViewItem extends Component {
  constructor(props) {
    super(props);
  }

  _onSelect = (id) => {
    console.log('id', id);
    //   const newSelected = new Map(selected);
    //   newSelected.set(id, !selected.get(id));
    //   this.setSelected(newSelected);
    // } depend on anything outside of the data prop, stick it here and treat it immutably.
    // Type	Required
    // any	No
    // [selected],
  }

  render() {
    // ({ id, name, selected, onSelect })
    return (
      <View style={_styles.listview_item}>
        <TouchableOpacity
          onPress={() => this._onSelect(this.props.id)}
          style={[ _styles.listview_item_touchable, {backgroundColor: this.props.selected ? _colors.SHADE_LIGHTER_40 : _colors.SHADE_LIGHTER_50 }]}>
          <View style={_styles.listview_item_text_box}>
            <Text style={_styles.listview_item_text}>{this.props.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



class FileListViewSoundItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: false
    }
  }

  _onSelect = (id) => {
    console.log('id', id);
  }

  handlePlayButton = () => {
    if (this.state.playState) {
      this._onSelect();
    } else {
      this._onSelect();
    }
  }

  render() {
    // ({ id, name, selected, onSelect })
    return (

      <View style={_styles.listview_item}>
        <View style={_styles.listview_item_surface}>

          <View style={_styles.listview_sounditem_playbtn_box}>
            <AudioPlayButton
              style={_styles.listview_sounditem_playbtn_icon}
              onPress={this.handlePlayButton}
              size={_vars.LIBRARY_PLAY_BTN_SIZE*.7}
              color={_colors.PRIMARY}
              active={this.state.playState}
            />
          </View>

          <TouchableOpacity
            onPress={() => this._onSelect(this.props.id)}
            style={[ _styles.listview_item_touchable, {
              backgroundColor: this.props.selected ? _colors.SHADE_LIGHTER_40 : _colors.SHADE_LIGHTER_50
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


export { FileListViewItem, FileListViewSoundItem };
