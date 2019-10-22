import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator, MaterialTopTabBar } from 'react-navigation-tabs';
import { TabBarIcon } from '../Components/Icon/TabBarIcon';
import { AppHomeScreen } from '../Screens/Main/AppHomeScreen';
import { AppHomeAnimatedScreen } from '../Screens/Main/AppHomeAnimatedScreen';
import { SurveyDescScreen } from '../Screens/Survey/SurveyDescScreen';
import { InfoPageLoader } from '../Screens/InfoPages/InfoPageLoader';
import { LibraryStack } from './LibraryStack';
import { Theme } from '../Theme';
const _colors = Theme.Colors;
const _styles = Theme.Styles;
const PLATFORM_OS = Platform.OS;


// radio, settings, share,share-alt, stats,
// thumbs-up, locate,, trash, Ionicons, mail,
// pause, play,, stop, main-open, mail-unread,
//  thumbs-down,scannerll
//
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

// style: _styles.tabbar,
// tabStyle: _styles.tabbar_tab,
// labelStyle: _styles.tabbar_label,
const DefaultTabBarOptions = {
  inactiveBackgroundColor: _colors.TAB_BAR_BG,
  activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
  inactiveTintColor: _colors.TAB_BAR_COLOR,
  activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
  showLabel: true,
  showIcon: true,
  keyboardHidesTabBar: true,
  indicatorStyle: { backgroundColor: 'transparent' },
};

// style: _styles.tabbar,
// tabStyle: _styles.tabbar_tab,
// labelStyle: _styles.tabbar_label,
const MaterialTabBarOptions = {
  inactiveBackgroundColor: _colors.TAB_BAR_BG,
  activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
  inactiveTintColor: _colors.TAB_BAR_COLOR,
  activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
  showIcon: true,
  showLabel: true,
  keyboardHidesTabBar: true,
  indicatorStyle: { backgroundColor: 'transparent' },
};

// const MainTabNavigator = createBottomTabNavigator(
const MainTabNavigator = createMaterialTopTabNavigator(
  { HomeTab: {
    screen: AppHomeScreen,
    navigationOptions: {
      title: 'Home',
      showLabel: false,
      tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
        return (<TabBarIcon name={'home'} focused={focused} color={tintColor} />);
      },
    },
  },

  LibraryTab: {
    screen: LibraryStack,
    navigationOptions: {
      title: 'Library',
      tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
        return (<TabBarIcon name={'list'} focused={focused} color={tintColor} />)},
      },
    },

  SoundscapesTab: {
    screen: SurveyDescScreen,
    navigationOptions: {
      title: 'Soundscapes',
      showLabel: false,
      tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
        return (<TabBarIcon name={'globe'} focused={focused} color={tintColor} />)},
      },
  },

  AnimatedHomeTab: {
    screen: AppHomeAnimatedScreen,
      navigationOptions: {
        title: 'Extra',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
          return (<TabBarIcon name={'pulse'} focused={focused} color={tintColor} />);
        },
      },
  },

  InfoPageLoader: {
    screen: InfoPageLoader,
      navigationOptions: {
        title: 'About',
        tabBarIcon: ({ focused, horizontal, tintColor, ...rest }) => {
          return (<TabBarIcon name={'book'} focused={focused} color={tintColor} />);
        },
      },
    },
  }, {
  navigationOptions: {
    initialRouteName: 'HomeTab',
    allowFontScaling: true,
  },
  defaultNavigationOptions: {
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <TabBarIcon name={'home'} focused={focused} color={tintColor} />;
    },
  },
  tabBarComponent: MaterialTopTabBar,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: _styles.material_tabbar,
    tabStyle: _styles.material_tabbar_tab,
    labelStyle: _styles.material_tabbar_label,
    activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
    inactiveTintColor: _colors.TAB_BAR_COLOR,
    activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
    showIcon: true,
    showLabel: true,
    keyboardHidesTabBar: true,
      // indicatorStyle: { backgroundColor:_colors.transparent },
    },
    animationEnabled: PLATFORM_OS === 'web' ? false : true,
    swipeEnabled: PLATFORM_OS === 'web' ? false : true,
  }
);

export { MainTabNavigator };
