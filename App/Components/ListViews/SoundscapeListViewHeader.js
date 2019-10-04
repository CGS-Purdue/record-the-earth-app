import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { HeadingText } from '../../Components/Text/HeadingText';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

class SoundscapeListViewHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={_styles.listview_header_container}>
        <HeadingText style={_styles.listview_header_text}>{'Soundscapes'}</HeadingText>
      </View>
    );
  }
}

export { SoundscapeListViewHeader };
