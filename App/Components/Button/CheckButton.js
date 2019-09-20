import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Button, Platform,Text, TouchableOpacity, View } from 'react-native';

import { Theme } from  '../../Theme';

const _styles = Theme.Styles;
const _colors = Theme.Colors;
const _layout = Theme.Layout;

class CheckButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  _toggleCheckedState = () => {
    let newState = !this.state.checked;
    this.setState({checked: newState});
    if (this.props.onchecked) {
      this.props.onchecked({
        id: this.props.id,
        checked: newState,
      });
    }
  };

  render() {
    console.log("button", this.props);
    console.log("_colors.CHECKBTN_ICON_COLOR_ACTIVE : _colors.CHECKBTN_ICON_COLOR", _colors.CHECKBTN_ICON_COLOR_ACTIVE, _colors.CHECKBTN_ICON_COLOR);
    return (
      <TouchableOpacity
        style={_styles.checkbtn_touchable}
        onPress={this._toggleCheckedState}
      >
        <View
          backgroundColor={_colors.CHECKBTN_INNER_CONTAINER_BG}
          style={_styles.checkbtn_container_inner}
        >
          <Ionicons
            name={Platform.OS === 'ios' ? `ios-checkmark${this.props.focused ? '' : '-outline'}` : 'md-checkmark' }
            size={_layout.TEXT_SIZE_5}
            iconStyle={_styles.CheckButtonIconStyle}
            style={_styles.CheckButtonIconContainer}
            color={this.state.checked ? _colors.CHECKBTN_ICON_COLOR_ACTIVE : _colors.CHECKBTN_ICON_COLOR}
          />
          <Text style={_styles.checkbtn_text}>
            {this.props.text}
           </Text>
        </View>
        </TouchableOpacity>
    );
  }
}

export { CheckButton };

// <View style={_styles.checkbtn_container_outer}>
// </View>
