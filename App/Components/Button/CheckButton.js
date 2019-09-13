import React, { Component } from 'react';
import { View, Button, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from  '../../Theme';

const _styles = Theme.Styles;
const _fonts = Theme.Fonts;
const _colors = Theme.Colors;
const _layout = Theme.Layout;


const _button_container_outer_style = Object.assign(
  Object.create(null), {
    backgroundColor: _colors.TRANSPARENT,
  }
)

const _button_container_inner_style = Object.assign(
  Object.create(null),
  {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    width: '100%',
    height:_layout.TEXT_SIZE_5,
    marginTop: _layout.SPACING_UNIT_1,
    marginBottom: _layout.SPACING_UNIT_1,
    paddingLeft: _layout.SPACING_UNIT_3,
    paddingRight: _layout.SPACING_UNIT_3,
    paddingTop: (_layout.SPACING_UNIT_2 * 2),
    paddingBottom: (_layout.SPACING_UNIT_2 * 2),
    borderWidth: 1,
    borderColor : _colors.SHADE_DARKER_02,
    borderStyle:'solid',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
);


const _button_icon_style = Object.assign(
  Object.create(null),
  {
    flexGrow: 0,
    flexShrink: 1,
    width: _layout.TEXT_SIZE_5,
    height: _layout.TEXT_SIZE_5,
    fontSize: _layout.TEXT_SIZE_5,
  }
);

const _button_text_style = {
  flex: 1,
  textAlign: 'left',
  marginLeft: _layout.SPACING_UNIT_1,
  fontSize: _layout.TEXT_SIZE_3,
};

const checkBtnStyles = {
  _checkbtn_container_outer: _button_container_outer_style,
  _checkbtn_container_inner: _button_container_inner_style,
  _checkbtn_icon: _button_icon_style,
  _checkbtn_text: _button_text_style,
};

class CheckButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
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

  // backgroundColor={_colors.SHADE_DARKER_04}
  render() {
    return (
      <TouchableOpacity onPress={this._toggleCheckedState}>
          <View backgroundColor={_colors.SHADE_LIGHTER_02}
              style={checkBtnStyles._checkbtn_container_inner}
          >
            <Ionicons name={Platform.OS === 'ios' ? `ios-ios-checkmark${focused ? '' : '-outline'}` : 'md-checkmark' }
              size={_layout.TEXT_SIZE_5}
              style={checkBtnStyles._checkbtn_icon}
              color={this.state.checked ? '#00ff00' : _colors.SHADE_DARKER_07}/>
            <Text style={checkBtnStyles._checkbtn_text}>{this.props.text}</Text>
          </View>
        </TouchableOpacity>
    )
  }
}

export { CheckButton }
