import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';
import { StyleSheet } from 'react-native';

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
    // backgroundColor: ThemeColors.INPUT_BG,
    color: ThemeColors.INPUT_TEXTCOLOR,
    fontSize: Layout.TEXT_SIZE_3 * 1.2,
    width: '100%',
    height: '100%',
    paddingTop: Layout.SPACING_UNIT_3,
    paddingBottom: Layout.SPACING_UNIT_3,
    padding: 5,
    marginTop: 10,
  },
  ripplebtn_container_outer: {
    flex: 1,
    paddingTop: 15,
  },
  ripplebtn_container_inner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    display: 'flex',
    // backgroundColor: 'grey',
  },
  ripplebtn_icon_container: {
    marginRight: 9,
  },
  ripplebtn_image: {
     flex: 1 ,
     marginTop: 1,
     width: '100%',
     height: '100%',
  },
  ripplebtn_text: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  ripplebtn_option: {
    // backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
  },
  ripplebtn_optionText: {
    fontSize: 15,
    marginTop: 1,
    textAlign: 'center'
  },
};



export { ButtonStyles, TouchButtonHighlightStyles,  };
