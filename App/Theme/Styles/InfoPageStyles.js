import { StyleSheet, Platform, Dimensions } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { DebugStyles, DebugStyleSettings, addDebugStyles } from './DebugStyles';

//// --------------------------------------------------------------------------
/// # [NAME] StyleSheet
/// ---------------------------------------------------------------------------

const _c = ThemeColors;
const _l = ThemeLayout;

const colors = {
  transparent: 'rgba(0,0,0,0)',
  background: '#3e243f',
  silver: '#F7F7F7',
  frost: '#D8D8D8',
  windowTint: 'rgba(0, 0, 0, 0.4)',
  panther: '#161616',
  charcoal: '#595959',
  snow: 'white',
  ember: 'rgba(164, 0, 48, 0.5)',
  fire: '#ff3832',
  eggplant: '#251a34',
  border: '#483F53',
  text: '#E0D7E5',
};
let Colors = colors;

const FontType = {
  base: 'opensans-regular',
  bold: 'spacemono',
  emphasis: 'opensans-light',
};
// leave off @2x/@3x
const Images = {};

const FontSize = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const fontStyle = {
  h1: {
    fontFamily: FontType.base,
    fontSize: FontSize.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: FontSize.h2,
  },
  h3: {
    fontFamily: FontType.emphasis,
    fontSize: FontSize.h3,
  },
  h4: {
    fontFamily: FontType.base,
    fontSize: FontSize.h4,
  },
  h5: {
    fontFamily: FontType.base,
    fontSize: FontSize.h5,
  },
  h6: {
    fontFamily: FontType.emphasis,
    fontSize: FontSize.h6,
  },
  normal: {
    fontFamily: FontType.base,
    fontSize: FontSize.regular,
  },
  description: {
    fontFamily: FontType.base,
    fontSize: FontSize.medium,
  },
};

const Fonts = {
  type: FontType,
  size: FontSize,
  style: fontStyle,
};

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  icons: {
    large: 45,
    xl: 50,
  },

  images: {
    logo: 200,
  },
};

let Metrics = metrics;

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: metrics.baseMargin,
      backgroundColor: colors.transparent,
    },
    scrollContent: {
      paddingBottom: 18,
    },

    section: {
      margin: metrics.section,
      padding: metrics.baseMargin,
    },
    sectionText: {
      ...Fonts.normal,
      paddingVertical: metrics.doubleBaseMargin,
      color: colors.snow,
      marginVertical: metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      color: colors.snow,
      padding: metrics.smallMargin,
      marginBottom: metrics.smallMargin,
      marginHorizontal: metrics.smallMargin,
    },
    titleText: {
      ...Fonts.style.h2,
      fontSize: 14,
      color: colors.text,
    },
  },
  darkLabelContainer: {
    padding: metrics.smallMargin,
    paddingBottom: metrics.doubleBaseMargin,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginBottom: metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: colors.snow,
  },
  groupContainer: {
    margin: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
};

const PresentationnStyles = StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginBottom: 36,
    paddingTop: Metrics.section,
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: Metrics.doubleBaseMargin,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  centered: {
    alignItems: 'center',
  },
  componentButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  apiButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  usageButton: {
    borderColor: Colors.border,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  deviceButton: {
    borderColor: Colors.border,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  sectionText: {
    textAlign: 'center',
    fontFamily: Fonts.base,
    fontSize: 14,
    marginHorizontal: Metrics.baseMargin,
    lineHeight: 30,
    marginVertical: Metrics.doubleBaseMargin,
    color: Colors.text,
  },
  banner: {
    position: 'absolute',
    width: Metrics.screenWidth,
    backgroundColor: Colors.banner,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
    height: 36,
  },
  bannerLabel: {
    ...Fonts.style.h5,
    fontSize: 12,
    color: Colors.snow,
  },
});

const AboutStyles = StyleSheet.create({
  ...ApplicationStyles.screen,
  sectionText: {
    ...Fonts.base,
    color: Colors.text,
    fontSize: 12,
    lineHeight: Metrics.doubleBaseMargin + 5,
  },
  mainContainer: {
    paddingHorizontal: Metrics.doubleBaseMargin,
  },
  description: {
    marginVertical: Metrics.doubleSection,
  },
  sectionHeader: {
    ...Fonts.style.h5,
    color: Colors.fire,
  },
  sectionHeaderContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    padding: Metrics.baseMargin,
    marginVertical: 20,
  },
  backButton: {
    position: 'absolute',
    paddingTop: 30,
    paddingHorizontal: 5,
    zIndex: 10,
  },
});

const ButtonBoxStyles = StyleSheet.create({
  buttonbox_container: {
    width: Metrics.screenWidth / 2,
    aspectRatio: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.eggplant,
  },
  buttonbox_image: {
    width: Metrics.icons.xl,
    height: Metrics.icons.xl,
    margin: Metrics.baseMargin,
  },
  buttonbox_label: {
    ...Fonts.style.h2,
    fontSize: 14,
    color: Colors.text,
  },
});

const InfoPageStyles = Object.assign(
  Object.create(null),
  { AboutStyles },
  { PresentationnStyles },
  ButtonBoxStyles
);

/// # OPTIONAL - ADD DEBUG STYLES TO YOUR COMPONENTS BEFORE EXPORTING
/// ---------------------------------------------------------------------------
/// if (DebugStyleSettings.DEBUG_OUTLINE_STYLES_ENABLED) {
///   InfoPageStyles.class = addDebugStyles( InfoPageStyles.class, DebugStyles.debug_outline);
/// }
///

export { InfoPageStyles };
