

import { Dimensions, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
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

const Colors = colors;

const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
};

const Type = type;


const size = {
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

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
};

const Fonts = {
  type,
  size,
  style,
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

const Metrics = metrics;

// leave off @2x/@3x
const images = {
  igniteClear: require('../Images/ignite-logo-transparent.png'),
  tileBg: require('../Images/tile_bg.png'),
  background: require('../Images/BG.png'),
  api: require('../Images/icon-api-testing.png'),
  components: require('../Images/icon-components.png'),
  deviceInfo: require('../Images/icon-device-information.png'),
  faq: require('../Images/faq-icon.png'),
  home: require('../Images/icon-home.png'),
  theme: require('../Images/icon-theme.png'),
  usageExamples: require('../Images/icon-usage-examples.png'),
  chevronRight: require('../Images/chevron-right.png'),
  hamburger: require('../Images/hamburger.png'),
  backButton: require('../Images/back-button.png'),
  closeButton: require('../Images/close-button.png'),
};

const Images = images;

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

export { ApplicationStyles, Colors, Fonts, Images, Metrics };
