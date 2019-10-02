import { StyleSheet } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { UtilityStyles } from './UtilityStyles';
import { br, m, p } from './LayoutStyles';


const SoundscapeStyles = {
  soundscape_inner_wrap: {
    display: 'flex',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  soundscape_bg: {
    flex: 1,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    borderColor: 'yellow',
    borderWidth: 1,
    backgroundColor: ThemeColors.TRANSPARENT,
  },
  soundscape_safearearoot: {
    display: 'flex',
    flex: 1,
  },
  soundscape_rootview: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    position: 'relative',
    backgroundColor: ThemeColors.APP_CONTAINER_BGCOLOR, //'rgba(29,36,38,1)',
  },
  soundscape_bgimg: {
    width: '100%',
    height: '100%',
    left: 0,
    position: 'absolute',
    display: 'flex',
    flex: 1,
  },
  soundscape_bgimg_wrap: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    top: 0,
    flexBasis: '100%',
    backgroundColor: ThemeColors.TRANSPARENT,
    flex: 1,
  },
  soundscape_bgimgbg_fill: {
    backgroundColor: 'rgba(299,0,30,.4)',
    position: 'absolute',
    height: '100%',
    left: 0,
    top: 0,
    width: '100%',
    flex: 1,
  },
};






export { SoundscapeStyles };
