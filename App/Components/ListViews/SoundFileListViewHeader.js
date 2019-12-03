import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { HeadingText } from '../../Components/Text/HeadingText';
import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;

class SoundFileListViewHeader extends Component {
  constructor(props) {
    super(props);
    this._onActionButton = this._onActionButton.bind(this);
  }

  getNavigationParams() {
    return this.props.navigation.state.params || {};
  }

  _onActionButton(_id) {
    if (this.props.onActionButton) {
      this.props.onActionButton();
    }
  }

  render() {
    return (
      <View style={_styles.listview_soundheader_container}>
        <HeadingText style={_styles.listview_header_text}>
          {'Files'}
        </HeadingText>
        <Button
          title={'View Soundscapes'}
          onPress={this._onActionButton}
        />
      </View>
    );
  }
}

export { SoundFileListViewHeader };
