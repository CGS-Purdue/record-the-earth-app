import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { DebugStyles, DebugStyleSettings, addDebugStyles } from './DebugStyles';

//// --------------------------------------------------------------------------
/// # Library StyleSheet
/// ---------------------------------------------------------------------------

const _c = ThemeColors;
const _l = ThemeLayout;

const PLAY_BTN_SIZE = _l.LIBRARY_PLAY_BTN_SIZE;

let ListViewHeaderText={
  fontSize: 24,
  paddingVertical: 4,
  margin: 0,
  textAlign: 'center',
  color: '#bbb',
}

let FileListViewHeaderContainer={
  flex: 1,
  width: '100%',
  // backgroundColor: _c.SHADE_DARKER_40,
  backgroundColor: _c.SHADE_LIGHTER_30,
  display: 'flex',
  elevation: 12,
}

let ListViewHeaderContainer={
  flex: 1,
  width: '100%',
  // backgroundColor: _c.SHADE_DARKER_40,
  backgroundColor: _c.TRANSPARENT,
  display: 'flex',
  elevation: 12,
};


const LibraryStyles = Object.assign(
  Object.create(null), {
    listview_header_text: ListViewHeaderText,
    listview_header_container: ListViewHeaderContainer,
    listview_soundheader_container: FileListViewHeaderContainer,
    listview_screen_container: {
      backgroundColor: _c.TRANSPARENT,
      // backgroundColor: _c.SHADE_DARKER_30,
      // backgroundColor: _c.GRA_900,
      // backgroundColor: _c.GRA_800,
      // backgroundColor: '#303030',
      flex: 1,
      width: '100%',
      height: '100%',
      display: 'flex',
      // paddingTop: 20,
      // paddingHorizontal: 10,
      justifyContent: 'center',
    },

    listview_item: {
      flex: 1,
      display: 'flex',
      paddingVertical: 2 ,
      marginTop: _l.HAIRLINE,
      paddingHorizontal: 1,
      borderBottomWidth:  _l.HAIRLINE,
      borderBottomColor: _c.TRANSPARENT,
      // height: 80,
      // marginVertical: 4,
      // backgroundColor: 'rgba(255,255,255,.7)',
      backgroundColor:_c.SHADE_LIGHTER_70,
      // backgroundColor: _c.TRANSPARENT,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 12,
    },

    listview_item_surface: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: _c.TRANSPARENT,
    },

    listview_sounditem_surface: {
      flex: 1,
      width: '100%',
      // backgroundColor: _c.SHADE_DARKER_50,
      display: 'flex',
    },

    listview_sounditem_playbtn_box: {
      // flex: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 5,
      marginVertical: 5,
      marginHorizontal: 5,
      backgroundColor: _c.SHADE_DARKER_05,
      borderRadius: 50,
      overflow: 'hidden',
      height: PLAY_BTN_SIZE,
      width: PLAY_BTN_SIZE,
      borderWidth: 1,
      borderColor: _c.PRIMARY,
    },

    listview_sounditem_playbtn_icon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 5,
      // padding: 0,
      // height: '100%',
      // height: PLAY_BTN_SIZE,
      // width: PLAY_BT_SIZE,
    },

    listview_item_touchable: {
      flex: 1,
      // backgroundColor: 'rgba(255,255,255,.1)',
    },
    listview_item_text_box: {
      flex: 1,
      padding: 8,
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: '#C1C1C1',
    },
    listview_item_text:{
      fontSize: 16,
      marginVertical: 2,
      marginHorizontal: 3,
      padding: 0,

    }
});

// # OPTIONAL - ADD DEBUG STYLES TO YOUR COMPONENTS BEFORE EXPORTING
// ---------------------------------------------------------------------------
 if (DebugStyleSettings.DEBUG_OUTLINE_STYLES_ENABLED) {
  // LibraryStyles.listview_header_text = addDebugStyles( LibraryStyles.listview_header_text, DebugStyles.debug_outline);
  // LibraryStyles.listview_item = addDebugStyles( LibraryStyles.listview_item, DebugStyles.debug_outline);
  // LibraryStyles.listview_item_surface = addDebugStyles( LibraryStyles.listview_item_surface, DebugStyles.debug_outline);
  // LibraryStyles.listview_item_text = addDebugStyles( LibraryStyles.listview_item_text, DebugStyles.debug_outline);
  // LibraryStyles.listview_item_text_box = addDebugStyles( LibraryStyles.listview_item_text_box, DebugStyles.debug_outline);
  // LibraryStyles.listview_item_touchable = addDebugStyles( LibraryStyles.listview_item_touchable, DebugStyles.debug_outline);
  // LibraryStyles.listview_sounditem_playbtn_box = addDebugStyles( LibraryStyles.listview_sounditem_playbtn_box, DebugStyles.debug_outline);
  // LibraryStyles.listview_sounditem_playbtn_icon = addDebugStyles( LibraryStyles.listview_sounditem_playbtn_icon, DebugStyles.debug_outline);
  // LibraryStyles.listview_sounditem_surface = addDebugStyles( LibraryStyles.listview_sounditem_surface, DebugStyles.debug_outline);
}


export { LibraryStyles }
