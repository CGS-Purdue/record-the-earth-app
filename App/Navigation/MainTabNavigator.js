import React, { Component } from 'react';
import { Platform } from 'react-native';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import { TabBarBottom } from 'react-navigation';

import { TabBarIcon } from '../Components/Icon/TabBarIcon';
import { AppHomeScreen } from '../Screens/Main/AppHomeScreen';
import { AppHomeAnimatedScreen } from '../Screens/Main/AppHomeAnimatedScreen';
// import { AudioPlayerScreen } from '../Screens/Main/AudioPlayerScreen';
import { HttpUploadScreen } from '../Screens/Main/HttpUploadScreen';
import { FaqScreen } from '../Screens/Main/FaqScreen';
import { SoundscapeLibraryStack } from './SoundscapeLibraryStack';
import { LinksScreen } from '../Screens/Main/LinksScreen';
import { Theme } from '../Theme';
const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _layout = Theme.Layout;
const PLATFORM_OS = Platform.OS;

const DefaultTabBarOptions = {
  // style: _styles.tabbar,
  // tabStyle: _styles.tabbar_tab,
  // labelStyle: _styles.tabbar_label,
  inactiveBackgroundColor: _colors.TAB_BAR_BG,
  activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
  inactiveTintColor: _colors.TAB_BAR_COLOR,
  activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
  showIcon: true,
  showLabel: true,
  keyboardHidesTabBar: true,
  indicatorStyle: {
    backgroundColor: 'transparent',
  }
};

// radio, settings, share,share-alt, stats,
// thumbs-up, locate,, trash, Ionicons, mail,
// pause, play,, stop, main-open, mail-unread,
//  thumbs-down,scanner
const NavIconNames = {
  list: 'list',
  play: 'play',
  home: 'home',
  link: 'link',
  globe: 'globe',
  map: 'map',
  menu: 'menu',
  pulse: 'pulse',
};

const MaterialTabBarOptions = {
  // style: _styles.tabbar,
  // tabStyle: _styles.tabbar_tab,
  // labelStyle: _styles.tabbar_label,
  inactiveBackgroundColor: _colors.TAB_BAR_BG,
  activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
  inactiveTintColor: _colors.TAB_BAR_COLOR,
  activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
  showIcon: true,
  showLabel: true,
  keyboardHidesTabBar: true,
  indicatorStyle: {
    backgroundColor: 'transparent',
  },
};

// const MainTabNavigator = createBottomTabNavigator(
  const MainTabNavigator = createMaterialTopTabNavigator({
    HomeTab: {
      screen: AppHomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
            return (<TabBarIcon name={'home'} focused={focused} color={tintColor}/>);
        }
      }
    },
    LibraryTab: {
      screen: SoundscapeLibraryStack,
      navigationOptions: {
        title: 'Library',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
            return (<TabBarIcon name={'list'} focused={focused} color={tintColor}/>);
        }
      }
    },
    UploadTab: {
      screen: HttpUploadScreen,
      navigationOptions: {
        title: 'Upload',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
            return (<TabBarIcon name={'globe'} focused={focused} color={tintColor}/>);
        }
      }
    },
    LinksTab: {
      screen: LinksScreen,
      navigationOptions: {
        title: 'Map',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
          return (<TabBarIcon name={'map'} focused={focused} color={tintColor}/>);
        }
      }
    },
    AnimatedHomeTab: {
      screen: AppHomeAnimatedScreen,
      navigationOptions: {
        title: 'Extra',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
          return (<TabBarIcon name={'pulse'} focused={focused} color={tintColor}/>);
        }
      }
    },
    FaqScreen: FaqScreen,
    // FilesTab: { screen: FileListScreen, },
  }, {
    navigationOptions: {
      initialRouteName: 'HomeTab',
      allowFontScaling: true,
    },
    defaultNavigationOptions : {
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return (<TabBarIcon name={'home'} focused={focused} color={tintColor}/>);
      }
    },
    tabBarComponent: MaterialTopTabBar,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: _styles.material_tabbar,
      tabStyle: _styles.material_tabbar_tab,
      labelStyle: _styles.material_tabbar_label,
      // inactiveBackgroundColor: _colors.TAB_BAR_BG,
      activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
      inactiveTintColor: _colors.TAB_BAR_COLOR,
      activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
      showIcon: true,
      showLabel: true,
      // keyboardHidesTabBar: true,
      // indicatorStyle: {
      //   backgroundColor:_colors.transparent,
      // },
    },
    animationEnabled: true,
    swipeEnabled: true,
  }
);


// AudioPlayerScreen.navigationOptions = ({ navigation }) => ({
//   title: 'player',
//   headerStyle: { backgroundColor: '#f4511e' },
//   headerTintColor: '#fff',
//   headerTitleStyle: { fontWeight: 'bold' },
//   tabBarLabel: 'player',
//   tabBarVisible: true,
//   tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     let iconPrefix = PLATFORM_OS === 'ios' ? 'ios' : 'md';
//     let iconBaseName = NavIconNames.play;
//     let iconName = `${iconPrefix}-${iconBaseName}`;
//     return (
//       <TabBarIcon
//         name={iconName}
//         size={_layout.TAB_BAR_ICON_SIZE}
//         color={tintColor}
//         focused={focused}
//       />
//     );
//   },
// });
//
// AppHomeScreen.navigationOptions = ({ navigation }) => ({
//   tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     let iconName = `${NavIconNames.home}`;
//     return (
//       <TabBarIcon
//         name={iconName}
//         size={_layout.TAB_BAR_ICON_SIZE}
//         color={tintColor}
//         focused={focused}
//       />
//     );
//   },
//   tabBarLabel: 'Home',
//   tabBarVisible: true,
// });
// AppHomeAnimatedScreen.navigationOptions = AppHomeScreen.navigationOptions;
//
// LinksScreen.navigationOptions = ({ navigation }) => ({
//   tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     let iconName = NavIconNames.list;
//     return (
//       <TabBarIcon
//         style={_styles.tabbar_icon}
//         name={iconName}
//         size={_layout.TAB_BAR_ICON_SIZE}
//         color={tintColor}
//         focused={focused}
//       />
//     );
//   },
//   tabBarLabel: 'Links',
//   tabBarVisible: true,
//   title: 'Links',
// });
// // FileListScreen.navigationOptions = LinksScreen.navigationOptions;
//
// SoundscapeLibraryStack.navigationOptions = ({ navigation }) => ({
//   tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     let iconName = NavIconNames.pulse;
//     return (
//       <TabBarIcon
//         style={_styles.tabbar_icon}
//         name={iconName}
//         size={_layout.TAB_BAR_ICON_SIZE}
//         color={tintColor}
//         focused={focused}
//       />
//     );
//   },
//   tabBarLabel: 'Library',
//   tabBarVisible: true,
//   title: 'Library',
// });
//
// HttpUploadScreen.navigationOptions = ({ navigation }) => ({
//   tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     let iconName = NavIconNames.map;
//     return (
//       <TabBarIcon
//         style={_styles.tabbar_icon}
//         name={iconName}
//         size={_layout.TAB_BAR_ICON_SIZE}
//         color={tintColor}
//         focused={focused}
//       />
//     );
//   },
//   tabBarLabel: 'Library',
//   tabBarVisible: true,
//   title: 'Library',
// });
//
// AppHomeAnimatedScreen.navigationOptions = ({ navigation }) => ({
//   tabBarIcon: ({ focused, horizontal, tintColor }) => {
//     let iconName = NavIconNames.globe;
//     return (
//       <TabBarIcon
//         style={_styles.tabbar_icon}
//         name={iconName}
//         size={_layout.TAB_BAR_ICON_SIZE}
//         color={tintColor}
//         focused={focused}
//       />
//     );
//   },
//   tabBarLabel: 'globe',
//   title: 'globe',
//   showLabel: true,
//   tabBarVisible: true,
// });

// HttpUploadScreen.navigationOptions = AppHomeAnimatedScreen.navigationOptions;

export { MainTabNavigator };
