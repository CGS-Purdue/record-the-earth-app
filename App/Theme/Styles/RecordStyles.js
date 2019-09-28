import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { TouchButtonHighlightStyles } from './ButtonStyles';

const RecordButton = TouchButtonHighlightStyles;

const RecordButtonIcon = {
  width: 100,
  height: 100,
  resizeMode: 'contain',
  margin: 5,
};

const RecordContainer = {
  borderColor: 'blue',
  borderWidth: 1,
  borderStyle: 'solid',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};

const RecordStatusText = {
  color: ThemeColors.WHITE,
  fontSize: ThemeLayout.TEXT_SIZE_3,
  textAlign: 'center',
};

const RecordStatusTimestamp = {
  color: ThemeColors.WHITE,
  fontSize: ThemeLayout.TEXT_SIZE_3,
  textAlign: 'center',
};

const RecordStyles = StyleSheet.create({
  record_button: RecordButton,
  record_buttonicon: RecordButtonIcon,
  record_container: RecordContainer,
  record_statustxt: RecordStatusText,
  record_timestamp: RecordStatusTimestamp,
});

export { RecordStyles };
