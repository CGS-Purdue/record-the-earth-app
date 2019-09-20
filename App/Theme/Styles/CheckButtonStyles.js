import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';
import { Platform, StatusBar, View } from 'react-native';
import { DebugStyles, DebugStyleSettings, addDebugStyles } from './DebugStyles';

          // backgroundColor={_colors.CHECKBTN_INNER_CONTAINER_BG}
// if (!Platform.OS === 'web'){
// }

const Empty = Object.create(null);

//
// const CheckButtonOuter = Object.assign(
//   Empty, {
//     backgroundColor: ThemeColors.CHECKBTN_CONTAINER_BG,
//     borderColor : ThemeColors.CHECKBTN_CONTAINER_BORDER,
//     borderWidth: 1,
//     borderStyle:'solid',
//     position: 'relative',
//     flex: 1,
//     borderWidth: 1,
// });


const CheckButtonTouchable = {
  width: Layout.PERCENT_100,
  borderWidth: 1,
  borderColor : ThemeColors.CHECKBTN_CONTAINER_INNER_BORDER,
  borderStyle:'solid',
  backgroundColor: ThemeColors.CHECKBTN_CONTAINER_BG,
}

const CheckButtonInner = {
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  flexShrink: 0,
  width: Layout.PERCENT_100,
  height:Layout.TEXT_SIZE_5,
  marginTop: 0,
  marginBottom: 0,
  paddingLeft: Layout.SPACING_UNIT_1,
  paddingRight: Layout.SPACING_UNIT_3,
  paddingTop: (Layout.SPACING_UNIT_2 * 2),
  paddingBottom: (Layout.SPACING_UNIT_2 * 2),
  backgroundColor: ThemeColors.PRIMARY,
  borderColor : ThemeColors.CHECKBTN_CONTAINER_INNER_BORDER,
  borderWidth: 1,
  borderBottomWidth: 2,
  borderBottomColor: ThemeColors.CHECKBTN_CONTAINER_INNER_BORDER,
  borderStyle:'solid',
  alignItems: 'center',
  justifyContent: 'flex-start',
};


const CheckButtonIconContainer = {
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: ThemeColors.CHECKBTN_ICON_BG_COLOR,
    width: Layout.TEXT_SIZE_5 * 1.2,
    height: Layout.TEXT_SIZE_5 * 1.2,
}

const CheckButtonIconStyle = {
    backgroundColor: ThemeColors.CHECKBTN_ICON_BG_COLOR,
    width: Layout.TEXT_SIZE_5 * 1.2,
    height: Layout.TEXT_SIZE_5 * 1.2,
}

const CheckButtonText = {
  flex: 1,
  textAlign: 'left',
  color: ThemeColors.CHECKBTN_TEXT_COLOR,
  marginLeft: Layout.SPACING_UNIT_1,
  fontSize: Layout.TEXT_SIZE_3 * 1.2,
};

const CheckBtnStyles = {
  checkbtn_touchable: CheckButtonTouchable,
  // checkbtn_container_outer: CheckButtonOuter,
  checkbtn_container_inner: CheckButtonInner,
  checkbtn_iconstyle: CheckButtonIconStyle,
  checkbtn_iconcontainer: CheckButtonIconContainer,
  checkbtn_text: CheckButtonText,
};
//
// if (DebugStyleSettings.DEBUG_OUTLINE_STYLES_ENABLED){
//   CheckBtnStyles.checkbtn_container_outer = addDebugStyles(CheckBtnStyles.checkbtn_container_outer, DebugStyles.debug_outline);
//   CheckBtnStyles.checkbtn_container_inner = addDebugStyles(CheckBtnStyles.checkbtn_container_inner, DebugStyles.debug_outline);
//   CheckBtnStyles.checkbtn_iconcontainer = addDebugStyles(CheckBtnStyles.checkbtn_iconcontainer, DebugStyles.debug_outline);
//   CheckBtnStyles.checkbtn_touchable = addDebugStyles(CheckBtnStyles.checkbtn_touchable, DebugStyles.debug_outline);
//   CheckBtnStyles.checkbtn_text = addDebugStyles(CheckBtnStyles.checkbtn_text, DebugStyles.debug_outline);
// }

export { CheckBtnStyles };
