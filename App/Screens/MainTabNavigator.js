import { Theme } from './.../Theme';

const _colors = Theme.Colors;
const _styles = Theme.Styles;
const _layout = Theme.ThemeLayout;
const PLATFORM_OS = Platform.OS;

const mainTabRefNav = createRef();
const MainTabNavigator = createBottomTabNavigator({
  Home: HomeScreenScreen,
  TestScreen: TestScreen,
  Links: LinksScreen,
  SurveyTab: SurveyEndScreen,
  // FileListScreen: FileListScreen,
  }, {
    navigationOptions: {
    initialRouteName: 'Home',
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
MainTabNavigator.ref = mainTabRefNav;

HomeScreenScreen.navigationOptions = ({ navigation }) => ({
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

SurveyEndScreen.navigationOptions = ({ navigation }) => ({
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

ConfigScreen.navigationOptions = ({ navigation }) => ({
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
  tabBarLabel: 'Config',
  title: 'Config',
  showLabel: true,
  tabBarVisible: true,
});


export { MainTabNavigator };
