import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { HeadingText } from '../../Components/Text/HeadingText';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

class FileListViewHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={_styles.listview_soundheader_container}>
        <HeadingText style={_styles.listview_header_text}>{'Files'}</HeadingText>
      </View>
    );
  }
}

export { FileListViewHeader };
