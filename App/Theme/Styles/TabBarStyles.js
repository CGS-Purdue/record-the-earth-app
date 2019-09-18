import { Platform } from 'react-native';
import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';

const TAB_BAR_SIZE = Layout.TEXT_SIZE_3 * 3;
const TAB_BAR_TEXT_SIZE = (TAB_BAR_SIZE * 1) / 3;
const TAB_BAR_ICON_SIZE = (TAB_BAR_SIZE * 2) / 4;

// TabBarBottom - Main TabNav Component
const TabBarBottom = {
  marginBottom: 0,
  height: TAB_BAR_SIZE,
  backgroundColor: ThemeColors.TAB_BAR_BG,
};

// TabBarIcon Applied to TabBarIcon element
const TabBarIcon = {
  paddingTop: 6,
  fontSize: TAB_BAR_ICON_SIZE,
  backgroundColor: ThemeColors.TRANSPARENT,
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

const TabBarLabel = {
  fontSize: TAB_BAR_TEXT_SIZE,
};

const TabBarStyles = {
  tabbar: TabBarBottom,
  tabbar_icon: TabBarIcon,
  tabbar_tab: TabBarTab,
  tabbar_label: TabBarLabel,
};

export { TabBarStyles };
