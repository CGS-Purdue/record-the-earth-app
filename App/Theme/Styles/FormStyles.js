import { StyleSheet } from 'react-native';

import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';

const FormStyles = StyleSheet.create({
  form_text_input: {
    flex: 1,
    width: '100%',
    height: Layout.SPACING_UNIT_2 + Layout.SPACING_UNIT_2 + Layout.TEXT_SIZE,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.BLU_200,
    fontSize: Layout.TEXT_SIZE,
    lineHeight: Layout.LINE_HEIGHT_1,
    marginLeft: Layout.SPACING_UNIT_1,
    marginTop: Layout.SPACING_UNIT_2,
    marginBottom: Layout.SPACING_UNIT_2,
    marginRight: Layout.SPACING_UNIT_1,
    paddingLeft: 0,
    paddingRight: Layout.SPACING_UNIT_2,
    paddingTop: Layout.SPACING_UNIT_2,
    paddingBottom: Layout.SPACING_UNIT_2,
  },
  form_input_multiline_text_2: {
    flex: 1,
    width: '100%',
    height:
      Layout.SPACING_UNIT_2 +
      Layout.SPACING_UNIT_2 +
      Layout.TEXT_SIZE +
      Layout.TEXT_SIZE,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.BLU_200,
    fontSize: Layout.TEXT_SIZE,
    lineHeight: Layout.LINE_HEIGHT_1,
    marginLeft: Layout.SPACING_UNIT_1,
    marginTop: Layout.SPACING_UNIT_2,
    marginBottom: Layout.SPACING_UNIT_2,
    marginRight: Layout.SPACING_UNIT_1,
    paddingLeft: 0,
    paddingRight: Layout.SPACING_UNIT_2,
    paddingTop: Layout.SPACING_UNIT_2,
    paddingBottom: Layout.SPACING_UNIT_2,
  },
  form_text_input_container: {
    flex: 1,
    height: Layout.SPACING_UNIT_2 + Layout.SPACING_UNIT_2 + Layout.TEXT_SIZE,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },

  // THREE LINE TEXT INPUT BOX
  form_input_multiline_text_3: {
    flex: 1,
    width: '100%',
    height:
    Layout.SPACING_UNIT_2 +
    Layout.SPACING_UNIT_2 +
    Layout.TEXT_SIZE +
    Layout.TEXT_SIZE +
    Layout.TEXT_SIZE,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.BLU_200,
    fontSize: Layout.TEXT_SIZE,
    textAlignVertical: 'top',
    lineHeight: Layout.LINE_HEIGHT_1,
    marginLeft: Layout.SPACING_UNIT_1,
    marginTop: Layout.SPACING_UNIT_2,
    marginBottom: Layout.SPACING_UNIT_2,
    marginRight: Layout.SPACING_UNIT_1,
    paddingLeft: Layout.SPACING_UNIT_1,
    paddingRight: Layout.SPACING_UNIT_2,
    paddingTop: Layout.SPACING_UNIT_2,
    paddingBottom: Layout.SPACING_UNIT_2,
  },

  // THREE LINE TEXT INPUT CONTAINER
  // PROVIDES BORDER, BACKGROUND_COLOR, SIZE
  form_textarea_input_container_3: {
    flex: 1,
    backgroundColor: ThemeColors.SHADE_LIGHTER_50,
    width: Layout.PERCENT_100,
    height:
      Layout.SPACING_UNIT_2 +
      Layout.SPACING_UNIT_2 +
      Layout.TEXT_SIZE +
      Layout.TEXT_SIZE +
      Layout.TEXT_SIZE,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export { FormStyles };
