import { Dimensions } from 'react-native';

const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;

const Layout = {
  WIDTH: device_width,
  HEIGHT: device_height,
  WINDOW_DIMENSIONS: { device_width, device_height },
  isSmallDevice: device_width < 375,
}

export { Layout };
