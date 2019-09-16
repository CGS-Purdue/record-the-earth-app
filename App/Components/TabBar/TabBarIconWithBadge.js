import React, { Component }  from 'react';
import { Text,View } from 'react-native';

// import { Theme } from '../../Theme';
import { TabBarIcon } from './TabBarIcon';

// const _colors = Theme.Colors;
// const _layout = Theme.Layout;
// const _styles = Theme.Styles;

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


// EXAMPLE
const TabBarNotificationIcon  = (props) => {
  const notifications = 1;
  return <TabBarIconWithBadge {...props} badgeCount={notifications} />;
};


export { TabBarIconWithBadge };
