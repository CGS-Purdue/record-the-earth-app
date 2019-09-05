import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';

const FormStyles = StyleSheet.create({
  form_text_input: {
    flex: 1,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.INPUT_TEXTCOLOR,
    fontSize: 24,
    width: '100%',
    height: '100%',
    padding: '5px',
  },
  form_text_input_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    fontSize: 24,
    backgroundColor: ThemeColors.TRANSPARENT,
  },
});

export { FormStyles };
