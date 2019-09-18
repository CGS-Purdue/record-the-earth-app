import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';

const TouchButtonHighlightStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 10,
  margin: 0,
  flex: 1,
};

const ButtonStyles = {
  button_touchbutton: TouchButtonHighlightStyles,
  button_default: {
    flex: 1,
    borderColor: ThemeColors.INPUT_BORDER,
    backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.INPUT_TEXTCOLOR,
    fontSize: Layout.TEXT_SIZE_3,
    width: '100%',
    height: '100%',
    padding: 5,
  },
};

export { ButtonStyles, TouchButtonHighlightStyles };
