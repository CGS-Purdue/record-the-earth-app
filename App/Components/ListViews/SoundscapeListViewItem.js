import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AudioPlayButton } from '../../Components/AudioPlayer/AudioPlayButton';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _vars = Theme.Variables;

class SoundscapeListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState: false,
    };
    this.id = this.props.id;
    this.filename = this.props.filename;
    this._onSelect = this.props._onSelect;
  }


  _onSelect = (_id) => {
    console.log('id', _id);
    // const newSelected = new Map(selected);
    // newSelected.set(id, !selected.get(id));
    // this.setSelected(newSelected);
  };


  handlePlayButton = () => {
    let _id = this.props.id;
    let _name = this.props.filename;
    let _selected = {
        id: _id,
        filename: _name,
    };

    if (this.state.playState) {
      this._onSelect(false);
    } else {
      this._onSelect(true);
    }

    if (this.props.onSelect) {
      this.props.onSelect(_selected);
    }
  };


  render() {
    return (
      <View style={_styles.listview_soundscape_item}>
        <View style={_styles.listview_soundscape_item_surface}>
          <View style={_styles.listview_sounditem_playbtn_box}>
            <AudioPlayButton
              style={_styles.listview_sounditem_playbtn_icon}
              onPress={this.handlePlayButton}
              size={_vars.LIBRARY_PLAY_BTN_SIZE * 0.7}
              color={_colors.PRIMARY}
              active={this.state.playState}
            />
          </View>

          <TouchableOpacity
            onPress={this._onSelect}
            style={[_styles.listview_item_touchable, {
                backgroundColor: this.props.selected
                  ? _colors.SHADE_LIGHTER_40
                  : _colors.SHADE_LIGHTER_50,
              },
            ]}>
            <View style={_styles.listview_soundscape_item_content_box}>
              <Text style={_styles.listview_item_text}>{`${this.props.datetime}`}</Text>
              <Text style={_styles.listview_item_text}>{`(${this.props.id}) ${this.props.description}`}</Text>
              <Text style={_styles.listview_item_text}>{`latLong=${this.props.latLong}`}</Text>
              <Text style={_styles.listview_item_text}>{`filename=${this.props.filename}`}</Text>
              <Text style={_styles.listview_item_text}>{`tags=${this.props.tags}`}</Text>
              <Text style={_styles.listview_item_text}>{`selected=${this.props.selected}`}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export { SoundscapeListViewItem };
