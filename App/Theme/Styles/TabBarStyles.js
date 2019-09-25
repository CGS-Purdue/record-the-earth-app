import { Platform } from 'react-native';
import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';


// # IOS
// Prop	Description	Default
// iconName - Name of the default icon (similar to TabBarIOS.Item icon)	None
// selectedIconName - Name of the selected icon (similar to TabBarIOS.Item selectedIcon).	iconName
// iconSize - Size of the icon.	30
// iconColor - Color of the icon.	None
// selectedIconColor - Color of the selected icon.	iconColor
// Note: using iconColor and selectedIconColor requires the attribute renderAsOriginal to be set to true on Icon.TabBarItemIOS.



const TAB_BAR_SIZE = Layout.TEXT_SIZE * 3;
const TAB_BAR_TEXT_SIZE = (TAB_BAR_SIZE * 1) / 5;
const TAB_BAR_ICON_SIZE = (TAB_BAR_SIZE * 2) / 5;
const TAB_BAR_PADDING = (TAB_BAR_SIZE * 1) / 5;


// TabBarBottom - Main TabNav Component
const TabBarBottom = {
  marginTop: 1,
  marginBottom: 0,
  paddingBottom: 0,
  height: TAB_BAR_SIZE,
  backgroundColor: ThemeColors.TAB_BAR_BG,
};

// TabBarIcon Applied to TabBarIcon element
const TabBarIcon = {
  paddingTop: TAB_BAR_PADDING,
  fontSize: TAB_BAR_ICON_SIZE,
  backgroundColor: ThemeColors.TRANSPARENT,
};

const TabBarLabel = {
  fontSize: TAB_BAR_TEXT_SIZE,
  paddingTop: TAB_BAR_PADDING / 2,
  paddingBottom: TAB_BAR_PADDING / 2,
};

// Applied at "TabComponent"
// TouchableWithoutFeedbackWrapper
const TabBarTab = {
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
};



const TabBarStyles = {
  tabbar: TabBarBottom,
  tabbar_icon: TabBarIcon,
  tabbar_tab: TabBarTab,
  tabbar_label: TabBarLabel,
};

export { TabBarStyles };
