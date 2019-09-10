import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';

const ButtonStyles = StyleSheet.create({
  button_default: {
    flex: 1,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.INPUT_TEXTCOLOR,
    fontSize: 24,
    width: '100%',
    height: '100%',
    padding: 5,
  },
});

export { ButtonStyles };
