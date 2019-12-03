import React, { createRef, Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Platform, Text, TouchableOpacity, View } from 'react-native';

import { Theme } from '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _layout = Theme.Layout;
// const touchableRef = createRef();

class CheckButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.activeOpacity = .5;
    this.defautOpacity = 1;
  }

  _toggleCheckedState = () => {
    let newState = !this.state.checked;
    this.setState({ checked: newState });
    if (this.props.onchecked) {
      this.props.onchecked({
        id: this.props.id,
        checked: newState,
      });
    }
  };

  _highlightTouchStart = () => {
    // console.log('touch start', this, this.activeOpacity);
    this.refs['touchableRef'].setOpacityTo(.20, 90);
  };

  _highlightTouchStop = () => {
    // this.refs['touchableRef'].setOpacityTo(100, 129);

  };

  render() {
    return (
      <TouchableOpacity
        ref={"touchableRef"}
        style={_styles.checkbtn_touchable}
        onPressIn={this._highlightTouchStart}
        onPressOut={this._highlightTouchStop}
        onPress={this._toggleCheckedState}
      >
        <View
          backgroundColor={_colors.CHECKBTN_INNER_CONTAINER_BG}
          style={_styles.checkbtn_container_inner}
        >
          <Ionicons
            name={
              Platform.OS === 'ios'
                ? `ios-checkmark${this.props.focused ? '' : '-outline'}`
                : 'md-checkmark'
            }
            size={_layout.TEXT_SIZE_5}
            iconStyle={_styles.CheckButtonIconStyle}
            style={_styles.CheckButtonIconContainer}
            color={
              this.state.checked
                ? _colors.CHECKBTN_ICON_COLOR_ACTIVE
                : _colors.CHECKBTN_ICON_COLOR
            }
          />
          <Text style={_styles.checkbtn_text}>{this.props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export { CheckButton };
