import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';

const RecordButtonIcon = {
  width: 100,
  height: 100,
  resizeMode: 'contain',
  margin: 5,
};

const RecStartBtn = {
  width: 200,
  height: 200,
  maxWidth: '66%',
  maxHeight: '66%',
  resizeMode: 'contain',
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
  btn_rec_start: RecStartBtn,
  record_buttonicon: RecordButtonIcon,
  record_container: RecordContainer,
  record_statustxt: RecordStatusText,
  record_timestamp: RecordStatusTimestamp,
});

export { RecordStyles };
