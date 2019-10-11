import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { UtilityStyles } from './UtilityStyles';
import { br, m, p } from './LayoutStyles';

const SurveyDescTitleText = {
  color: ThemeColors.WHITE,
};

// THREE LINE TEXT INPUT BOX
const MultilineTextInput = {
  flex: 1,
  backgroundColor: ThemeColors.SHADE_LIGHTER_50,
  color: ThemeColors.BLU_200,
  fontSize: ThemeLayout.TEXT_SIZE,
  textAlignVertical: 'top',
  lineHeight: ThemeLayout.LINE_HEIGHT_1,
  margin: 0,
  paddingLeft: ThemeLayout.SPACING_UNIT_1,
  paddingRight: ThemeLayout.SPACING_UNIT_1,
  paddingTop: ThemeLayout.SPACING_UNIT_1,
  paddingBottom: ThemeLayout.SPACING_UNIT_1,
  elevation: 10,
};

// THREE LINE TEXT INPUT CONTAINER
// PROVIDES BORDER, BACKGROUND_COLOR, SIZE
const MultilineTextContainer = {
  flex: 1,
  flexShrink: 0,
  borderWidth: 1,
  borderColor: ThemeColors.GRN_600,
  backgroundColor: ThemeColors.SHADE_LIGHTER_20,
  padding: 2,
  elevation: 10,
  width: ThemeLayout.PERCENT_100,
  height:
    ThemeLayout.SPACING_UNIT_2 +
    ThemeLayout.SPACING_UNIT_2 +
    ThemeLayout.TEXT_SIZE +
    ThemeLayout.TEXT_SIZE +
    ThemeLayout.TEXT_SIZE,
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  flexDirection: 'row',
};

const ThreeLineMultiIinputText = {
  flex: 1,
  flexShrink: 0,
  flexGrow: 1,
  width: '100%',
  height:
    ThemeLayout.SPACING_UNIT_2 +
    ThemeLayout.SPACING_UNIT_2 +
    ThemeLayout.TEXT_SIZE +
    ThemeLayout.TEXT_SIZE,
  borderColor: ThemeColors.PRIMARY,
  color: ThemeColors.BLU_200,
  margin: 0,
  backgroundColor: ThemeColors.INPUT_BG,
  fontSize: ThemeLayout.TEXT_SIZE,
  lineHeight: ThemeLayout.LINE_HEIGHT_1,
};

const SurveyDescInputTextContainer = Object.assign(
  {
    marginLeft: 0,
    paddingLeft: 0,
    marginTop: ThemeLayout.SPACING_UNIT_2,
    marginBottom: ThemeLayout.SPACING_UNIT_2,
    marginRight: ThemeLayout.SPACING_UNIT_1,
    paddingRight: ThemeLayout.SPACING_UNIT_2,
    paddingTop: ThemeLayout.SPACING_UNIT_2,
    paddingBottom: ThemeLayout.SPACING_UNIT_2,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flex: 1,
  },
  UtilityStyles.stretch
);

const SurveyStyles = StyleSheet.create({
  form_multiline_text: MultilineTextInput,
  form_multiline_container: MultilineTextContainer,
  survey_screen_title: SurveyDescTitleText,
  survey_desc_title: SurveyDescTitleText,
  survey_desc_textinput: ThreeLineMultiIinputText,
  survey_desc_textinput_container: SurveyDescInputTextContainer,
});

export { SurveyStyles };
