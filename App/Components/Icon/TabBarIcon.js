import { Ionicons } from '@expo/vector-icons';
import { View, Platform }  from 'react-native';
import React, { Component }  from 'react';
import * as Font from 'expo-font';
import { Icon } from 'expo';

import { Theme } from '../../Theme';


const PLATFORM_OS = Platform.OS;
const _colors = Theme.Colors;
const _layout = Theme.Layout;
const _styles = Theme.Styles;
const _assets = Theme.Assets;
const _fonts = Theme.Fonts;



// EXAMPLE
// export default function TabBarIcon(props) {
//   return (
//     <Ionicons
//       name={props.name}
//       size={26}
//       style={{ marginBottom: -3 }}
//       color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//     />
//   );
// }





let iconFont = _fonts.FontConfig.ICON_FONT;

const iconPlaceholderStyle = {
  flex: 1,
  flexGrow: 1,
  width: '20%',
  height: 40,
  borderWidth: 1,
};


function getIconPrefix () {
  if (PLATFORM_OS === 'ios'){
    return 'ios';
  } else {
    return 'md';
  }
}

const iconPrefix = getIconPrefix();

class PlaceholderIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontIsLoaded: false,
    };
  }


  render() {
    if (!this.state.fontLoaded) {
      return <View style={iconPlaceholderStyle}/>;
    } else {
      return false;
    }
  }
}

const _icon_with_badge_inner_container_styles = {
  position: 'absolute',
  right: -6,
  top: -3,
  backgroundColor: 'red',
  borderRadius: 6,
  width: 12,
  height: 12,
  justifyContent: 'center',
  alignItems: 'center',
};
const _icon_with_badge_text_styles = {
  color: 'white',
  fontSize: 10,
  fontWeight: 'bold',
};
const _icon_with_badge_container_styles = {
  width: 24,
  height: 26,
  margin: 5,
};



// // EXAMPLE
// const TabBarNotificationIcon  = (props) => {
//   const notifications = 1;
//   return <TabBarIconWithBadge {...props} badgeCount={notifications} />;
// };


class TabBarIconWithBadge extends Component {
  render() {
    const { focused, name, badgeCount } = this.props;
    return (
      <View style={_icon_with_badge_container_styles}>
        <TabBarIcon
          name={name}
          focused={focused}
        />
        {badgeCount > 0 && (
          <View style={_icon_with_badge_inner_container_styles}>
            <Text style={_icon_with_badge_text_styles}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const TabBarIconStyles = _styles.tabbar_icon;
const MaterialTabBarIconStyles = _styles.material_tabbar_icon;

const iconUnfocuseStyles = {
  // backgroundColor: _colors.TAB_BAR_BG,
  // color: _colors.TAB_BAR_ACTIVE_COLOR,
  borderColor: _colors.TRANSPARENT,
};

const iconFocusedStyles = {
  // backgroundColor: _colors.TAB_BAR_ACTIVE_BG,
  color: _colors.TAB_BAR_ACTIVE_COLOR,
  borderColor: _colors.TAB_BAR_ACTIVE_COLOR,
};
const iconDefaultStyle = {
  fontSize: _layout.TEXT_SIZE_4,
  paddingTop: 0,
  flex: 1,
  flexGrow: 1,
  paddingBottom: 0,
};

const _icon_container_styles = {
  width: '100%',
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: _colors.TRANSPARENT,
  alignItems: 'center',
  borderTopWidth: 2,
};

// style={[iconDefaultStyle, style]}
// backgroundColor={focused ?  _colors.TAB_BAR_ACTIVE_BG : _colors.TAB_BAR_BG }

export default class TabBarIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      fontIsLoaded: false,
    };
  }
  render() {
    const {focused, size, name, style, ...rest} = this.props;
    return (
    <View style={[_icon_container_styles, focused ? iconFocusedStyles : iconUnfocuseStyles  ]}>
      <Ionicons
        name={`${iconPrefix}-${name}`}
        size={size ? size : _layout.TEXT_SIZE_4}
        style={{backgroundColor: _colors.TRANSPARENT}}
        iconStyle={MaterialTabBarIconStyles}
        {...rest}
      />
    </View>
    );
  }
}


export { TabBarIcon };
