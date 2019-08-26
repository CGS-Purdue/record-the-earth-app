import { Dimensions } from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;


const device_pixelratio = PixelRatio.get();
// PixelRatio.roundToNearestPixel


// only implemented on Android
const device_fontscale = getFontScale();

// getPixelSizeForLayoutSize()

const Layout = {
  WIDTH: device_width,
  HEIGHT: device_height,
  WINDOW_DIMENSIONS: { device_width, device_height },
  isSmallDevice: device_width < 375,
}

//// -----------
/// Layout Props
/// ------------
/// alignContent
/// alignItems
/// alignSelf
/// aspectRatio
/// borderBottomWidth
/// borderEndWidth
/// borderLeftWidth
/// borderRightWidth
/// borderStartWidth
/// borderTopWidth
/// borderWidth
/// bottom
/// direction
/// display
/// end
/// flex
/// flexBasis
/// flexDirection
/// flexGrow
/// flexShrink
/// flexWrap
/// height
/// justifyContent
/// left
/// margin
/// marginBottom
/// marginEnd
/// marginHorizontal
/// marginLeft
/// marginRight
/// marginStart
/// marginTop
/// marginVertical
/// maxHeight
/// maxWidth
/// minHeight
/// minWidth
/// overflow
/// padding
/// paddingBottom
/// paddingEnd
/// paddingHorizontal
/// paddingLeft
/// paddingRight
/// paddingStart
/// paddingTop
/// paddingVertical
/// position
/// right
/// start
/// top
/// width
/// zIndex






export { Layout };
