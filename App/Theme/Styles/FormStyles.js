import { StyleSheet } from 'react-native';

import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';

const FormStyles = StyleSheet.create({
  form_text_input: {
    flex: 1,
    width: '100%',
    height:
      ThemeLayout.SPACING_UNIT_2 +
      ThemeLayout.SPACING_UNIT_2 +
      ThemeLayout.TEXT_SIZE,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.BLU_200,
    fontSize: ThemeLayout.TEXT_SIZE,
    lineHeight: ThemeLayout.LINE_HEIGHT_1,
    marginLeft: ThemeLayout.SPACING_UNIT_1,
    marginTop: ThemeLayout.SPACING_UNIT_2,
    marginBottom: ThemeLayout.SPACING_UNIT_2,
    marginRight: ThemeLayout.SPACING_UNIT_1,
    paddingLeft: 0,
    paddingRight: ThemeLayout.SPACING_UNIT_2,
    paddingTop: ThemeLayout.SPACING_UNIT_2,
    paddingBottom: ThemeLayout.SPACING_UNIT_2,
  },
  form_text_input_container: {
    flex: 1,
    height:
      ThemeLayout.SPACING_UNIT_2 +
      ThemeLayout.SPACING_UNIT_2 +
      ThemeLayout.TEXT_SIZE,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export { FormStyles };
