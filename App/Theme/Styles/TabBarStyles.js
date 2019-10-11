import { Platform } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';

// # IOS
// Prop  Description  Default
// iconName - Name of the default icon (similar to TabBarIOS.Item icon)  None
// selectedIconName - Name of the selected icon (similar to TabBarIOS.Item selectedIcon).  iconName
// iconSize - Size of the icon.  30
// iconColor - Color of the icon.  None
// selectedIconColor - Color of the selected icon.  iconColor
// Note: using iconColor and selectedIconColor requires the attribute renderAsOriginal to be set to true on Icon.TabBarItemIOS.

const TAB_BAR_SIZE = ThemeLayout.TEXT_SIZE * 2.5;
const TAB_BAR_TEXT_SIZE = (TAB_BAR_SIZE * 1) / 5;
const TAB_BAR_ICON_SIZE = (TAB_BAR_SIZE * 2) / 5;
const TAB_BAR_PADDING = (TAB_BAR_SIZE * 1) / 5;

// TabBarBottom - Main TabNav Component
const TabBarBottom = {
  marginTop: 1,
  marginBottom: 1,
  borderBottomWidth: 4,
  borderBottomColor: ThemeColors.TAB_BAR_BG,
  paddingBottom: TAB_BAR_PADDING,
  height: TAB_BAR_SIZE,
  flex: 1,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

// TabBarIcon Applied to TabBarIcon element
const TabBarIcon = {
  paddingTop: TAB_BAR_PADDING / 3,
  fontSize: TAB_BAR_ICON_SIZE,
  flex: 1,
  height: TAB_BAR_ICON_SIZE,
  justifyContent: 'center',
  textAlign: 'center',
};

const TabBarLabel = {
  // backgroundColor: ThemeColors.TRANSPARENT,
  flex: 1,
  // alignItems: 'stretch',
  width: '100%',
  // fontSize: TAB_BAR_TEXT_SIZE,
  paddingTop: TAB_BAR_PADDING / 3,
  paddingBottom: (TAB_BAR_PADDING / 2) * 1.2,
};

const TabBarTab = {
  display: 'flex',
  padding: 0,
  margin: 0,
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-end',
  paddingBottom: 0,
  marginBottom: 0,
  width: 'auto',
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
};

const MaterialTabBarBottom = {
  marginTop: 1,
  marginBottom: 1,
  backgroundColor: ThemeColors.SHADE_DARKER_50,
};

const MaterialTabBarIcon = {
  fontSize: TAB_BAR_ICON_SIZE,
  justifyContent: 'center',
  textAlign: 'center',
};

const MaterialTabBarLabel = {
  width: '100%',
  textAlign: 'center',
  padding: 0,
  margin: 0,
  fontSize: TAB_BAR_TEXT_SIZE,
};

const MaterialTabBarTab = {
  flex: 1,
  borderTopColor: 'orange',
  borderTopWidth: 1,
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
};

const TabBarStyles = {
  tabbar: TabBarBottom,
  material_tabbar: MaterialTabBarBottom,
  tabbar_tab: TabBarTab,
  material_tabbar_tab: MaterialTabBarTab,
  tabbar_icon: TabBarIcon,
  material_tabbar_icon: MaterialTabBarIcon,
  tabbar_label: TabBarLabel,
  material_tabbar_label: MaterialTabBarLabel,
};

export { TabBarStyles };
