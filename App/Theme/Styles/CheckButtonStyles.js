import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';
import { Platform, StatusBar, View } from 'react-native';
// if (!Platform.OS === 'web'){
// }

const Empty = Object.create(null);
const CheckButtonOuter = Object.assign(
  Empty, {
    backgroundColor: ThemeColors.CHECKBTN_CONTAINER_BG,
    position: 'relative',
    flex: 0,
    borderWidth: 1,
    borderColor : ThemeColors.CHECKBTN_CONTAINER_BORDER,
    borderStyle:'solid',
});


const CheckButtonTouchable = {
  borderWidth: 1,
  borderColor : ThemeColors.CHECKBTN_CONTAINER_INNER_BORDER,
  borderStyle:'solid',
  backgroundColor: ThemeColors.PRIMARY
  // opacity: 1
}

const CheckButtonInner = Object.assign(
  Empty, {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    width: Layout.PERCENT_100,
    height:Layout.TEXT_SIZE_5,
    marginTop: Layout.SPACING_UNIT_1,
    marginBottom: Layout.SPACING_UNIT_1,
    paddingLeft: Layout.SPACING_UNIT_3,
    paddingRight: Layout.SPACING_UNIT_3,
    paddingTop: (Layout.SPACING_UNIT_2 * 2),
    paddingBottom: (Layout.SPACING_UNIT_2 * 2),
    borderWidth: 1,
    borderColor : ThemeColors.CHECKBTN_CONTAINER_INNER_BORDER,
    borderStyle:'solid',
    alignItems: 'center',
    justifyContent: 'flex-start',
});


const CheckButtonIcon = Object.assign(
  Empty, {
    flexGrow: 0,
    flexShrink: 1,
    backgroundColor: ThemeColors.CHECKBTN_ICON_BG_COLOR,
    width: Layout.TEXT_SIZE_5,
    height: Layout.TEXT_SIZE_5,
});

const CheckButtonText = Object.assign(
  Empty, {
  flex: 1,
  textAlign: 'left',
  marginLeft: Layout.SPACING_UNIT_1,
  fontSize: Layout.TEXT_SIZE_3,
});

const CheckBtnStyles = {
  checkbtn_container_outer: CheckButtonOuter,
  checkbtn_container_inner: CheckButtonInner,
  checkbtn_icon: CheckButtonIcon,
  checkbtn_touchable: CheckButtonTouchable,
  checkbtn_text: CheckButtonText,
};

export { CheckBtnStyles };
