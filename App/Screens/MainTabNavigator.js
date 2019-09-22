import React, { Component } from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import { HomeScreen } from './Main/HomeScreen';
import { TestScreen } from './Main/TestScreen';
import { LinksScreen } from './Main/LinksScreen';
import { SurveyStack } from './Survey/SurveyStack';
import { TabBarIcon } from '../Components/TabBar/TabBarIcon';
import { FileListScreen } from './Main/FileListScreenDev';
import { PlayerScreen } from './Main/AudioPlayerTestScreen';
// import { ConfigScreen } from './Main/ConfigScreen';
// import { AudioListScreen } from './Main/AudioListScreen';
// import { FileListScreen } from './Main/FileListScreen';

import { Theme } from './../Theme';
const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _layout = Theme.ThemeLayout;

const PLATFORM_OS = Platform.OS;

const MainTabNavigator = createBottomTabNavigator({
  HomeTab: HomeScreen,
  PlayerTab: PlayerScreen,
  TestTab: TestScreen,
  // LinksTab: LinksScreen,
  // SurveyTab: SurveyStack,
  SoundFilesTab: FileListScreen,
  }, {
    navigationOptions: {
    initialRouteName: 'HomeTab',
    },
  tabBarOptions: {
    labelStyle: _styles.tabbar_label,
    tabStyle: _styles.tabbar_tab,
    style: _styles.tabbar,
    inactiveTintColor: _colors.TAB_BAR_COLOR,
    activeTintColor: _colors.TAB_BAR_ACTIVE_COLOR,
    inactiveBackgroundColor: _colors.TAB_BAR_BG,
    activeBackgroundColor: _colors.TAB_BAR_ACTIVE_BG,
    allowFontScaling: true,
    showIcon: true,
    showLabel: true,
  },
});


PlayerScreen.navigationOptions = ({ navigation }) => ({
  tabBarLabel: 'player',
  tabBarVisible: true,
});

HomeScreen.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = 'md';
    if (PLATFORM_OS === 'ios'){
      iconPrefix = 'ios';
    }
    let iconName = `${iconPrefix}-home`;
    return (
      <TabBarIcon
        name={iconName}
        style={_styles.tabbar_icon}
        size={_layout.TAB_BAR_ICON_SIZE}
        color={tintColor}
        focused={focused}
      />
    );
  },
  tabBarLabel: 'Home',
  tabBarVisible: true,
});



SurveyStack.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = 'md';
    if (PLATFORM_OS === 'ios'){
      iconPrefix = 'ios';
    }
    let iconName = `${iconPrefix}-information-circle${focused ? '' : '-outline'}`;
    return (
      <TabBarIcon
        name={iconName}
        style={_styles.tabbar_icon}
        size={_layout.TAB_BAR_ICON_SIZE}
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
    let iconPrefix = 'md';
    if (PLATFORM_OS === 'ios'){
      iconPrefix = 'ios';
    }

    let iconName = `${iconPrefix}-information-circle${focused ? '' : '-outline'}`;
    return (
      <TabBarIcon
        name={iconName}
        style={_styles.tabbar_icon}
        size={_layout.TAB_BAR_ICON_SIZE}
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

TestScreen.navigationOptions = ({ navigation }) => ({
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    let iconPrefix = PLATFORM_OS === 'ios' ? 'ios' : 'md';
    let iconName = `${iconPrefix}-cog`;
    return (
      <TabBarIcon
        name={iconName}
        style={_styles.tabbar_icon}
        size={_layout.TAB_BAR_ICON_SIZE}
        color={tintColor}
        focused={focused}
      />
    );
  },
  tabBarLabel: 'Animations',
  title: 'Animations',
  showLabel: true,
  tabBarVisible: true,
});


export { MainTabNavigator };
