import React, { createRef } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { TabBarIcon } from '../../Components/TabBar/TabBarIcon';
import { SurveyEndScreen } from '../Survey/SurveyEndScreenDev';
import { HomeScreen } from './HomeScreen';
import { LinksScreen } from './LinksScreen';
import { ConfigScreen } from './ConfigScreen';
import { Theme } from '../../Theme';

const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _layout = Theme.Layout;

const TAB_BAR_SIZE = (_layout.TEXT_SIZE_3 * 3);
const TAB_BAR_TEXT_SIZE = (TAB_BAR_SIZE * 1 / 3);
const TAB_BAR_ICON_SIZE = (TAB_BAR_SIZE * 2 / 4 );

const TabBarStyles = {
  // TabBarBottom - Main TabNav Component
  tabbar: {
    // flex: 1,
    marginBottom: 0,
    height: TAB_BAR_SIZE,
    backgroundColor: _colors.TAB_BAR_BG,
  },

  // TabBarIcon Applied to TabBarIcon element
  tabbar_icon: {
    paddingTop: 6,
    fontSize: TAB_BAR_ICON_SIZE,
    backgroundColor: _colors.TRANSPARENT,
  },

  tabbar_label: {
    fontSize: TAB_BAR_TEXT_SIZE,
  },

  // Applied at "TabComponent"
  // TouchableWithoutFeedbackWrapper
  tabbar_tab: {
    flex: 1,
    paddingBottom: 0,
    marginBottom: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
  },
};


const mainTabRefNav = createRef();

const MainTabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Links: LinksScreen,
    SurveyTab: SurveyEndScreen,
    Config: ConfigScreen,
  }, {
    navigationOptions: {
      initialRouteName: 'Home',
    },
    tabBarOptions: {
      inactiveTintColor: _colors.TAB_BAR_COLOR,
      activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
      inactiveBackgroundColor: _colors.TAB_BAR_BG,
      activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
      allowFontScaling: true,
      showIcon: true,
      showLabel: true,
      labelStyle: TabBarStyles.tabbar_label,
      tabStyle: TabBarStyles.tabbar_tab,
      style: TabBarStyles.tabbar,
    },
});
MainTabNavigator.ref = mainTabRefNav;

HomeScreen.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
    let iconName = `${iconPrefix}-home`;
    return (
      <TabBarIcon
        name={iconName}
        style={TabBarStyles.tabbar_icon}
        size={TAB_BAR_ICON_SIZE}
        color={tintColor}
        focused={focused}
      />
    );
  },
  tabBarLabel: 'Home',
  tabBarVisible: true,
});

SurveyEndScreen.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
    let iconName = `${iconPrefix}-information-circle${focused ? '' : '-outline'}`;
    return (
      <TabBarIcon
        name={iconName}
        style={TabBarStyles.tabbar_icon}
        size={TAB_BAR_ICON_SIZE}
        color={tintColor}
        focused={focused}
      />
    );
  },
  tabBarLabel: 'SurveyTab',
  label: 'SurveyTab',
  tabBarVisible: true,
  title: 'SurveyTab',
});

LinksScreen.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
    let iconName = `${iconPrefix}-information-circle${focused ? '' : '-outline'}`;
    return (
      <TabBarIcon
        name={iconName}
        style={TabBarStyles.tabbar_icon}
        size={TAB_BAR_ICON_SIZE}
        color={tintColor}
        focused={focused}
      />
    );
  },
  tabBarLabel: 'Links',
  label: 'Links',
  tabBarVisible: true,
  title: 'Links',
});

ConfigScreen.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = Platform.OS === 'ios' ? 'ios' : 'md';
    let iconName = `${iconPrefix}-cog`;
    return (
      <TabBarIcon
        name={iconName}
        style={TabBarStyles.tabbar_icon}
        size={TAB_BAR_ICON_SIZE}
        color={tintColor}
        focused={focused}
      />
    );
  },
  tabBarLabel: 'Config',
  title: 'Config',
  showLabel: true,
  tabBarVisible: true,
});


export { MainTabNavigator };
