import React from 'react';
import { Dimensions, PixelRatio } from 'react-native';


function log_layout_values () {
  console.log('normalizeText pixel_ratio ->', device_pixelratio);
  console.log('normalizeText font_scale ->', device_fontscale);
  console.log('normalizeText device_height ->', device_height);
  console.log('normalizeText device_width ->', device_width);
  console.log('normalizeText layout_size ->', device_layout_size);
}


// const normalize = size => {
function normalizeDeviceLayout (size) {
  let PIXEL_RATIO = PixelRatio.get();
  // iphone 5  iphone 6/6s  iphone 5s  phablets
  if (PIXEL_RATIO === 2) {
    if (width < 360) { return size * 0.95; }
    if (height < 667) { return size * 1.00; }
    else if (height >= 667 && height <= 735) { return size * 1.15; }
    else { return size * 1.25; }
  }

  // mid size / large fontscale  iphone 6s plus / 7 plus
  if (PIXEL_RATIO === 3) {
    if (width <= 360) { return size * 1.00; }
    if (height < 667) { return size * 1.15; }
    if (height >= 667 && height <= 735) { return size * 1.20; }
    else { return size * 1.27; }
  }

  // smaller height devices  larger phablet devices
  if (PIXEL_RATIO === 3.5) {
    if (height < 667) { return size * 1.20; }
    if (height >= 667 && height <= 735) { return size * 1.25; }
    else { return size * 1.40; }
    return size * 1.00;
  }
  return size;
}


// getPixelSizeForLayoutSize()
function isSmallDevice (width) {
  return width < 375;
}

function relative_units () {}

// INCREMENTAL MODULAR SCALED TYPOGRAPHY SYSTEM
// Sizes generated at http://www.modularscale.com
// TYPOGRPHIC SCALES
function getTypographicScales(key) {
  const scale_map = {
    // Minor Third Scale 1.2 Ratio
     minorthird: {
      // Decreasing -----------------
      fs_m6: 0.493, //  7.892 (px) //
      fs_m5: 0.555, //  8.879 (px) //
      fs_m4: 0.624, //  9.989 (px) //
      fs_m3: 0.702, // 11.237 (px) //
      fs_m2: 0.791, // 12.642 (px) //
      fs_m1: 0.889, // 14.222 (px) //
      fs_m0: 1.000, // 16.000 (px) //
      // Increasing -----------------
      fs_00: 1.000, // 16.000 (px) //
      fs_01: 1.125, // 18.000 (px) //
      fs_02: 1.266, // 20.250 (px) //
      fs_03: 1.424, // 22.781 (px) //
      fs_04: 1.602, // 25.629 (px) //
      fs_05: 1.802, // 28.833 (px) //
      fs_06: 2.027, // 32.437 (px) //
      fs_07: 2.281, // 36.491 (px) //
      fs_08: 2.566, // 41.053 (px) //
      fs_09: 2.887, // 46.184 (px) //
      fs_10: 3.247, // 51.957 (px) //
      fs_11: 3.653, // 58.452 (px) //
      fs_12: 4.110, // 65.758 (px) //
      fs_13: 4.624, // 73.978 (px) //
      fs_14: 5.202, // 83.225 (px) //
      fs_15: 5.852, // 93.628 (px) //
      // ----------------------------
    },

    // #  16th century scale ----------------------- //
    century16 : {
      scale_4 : 2.250, // h1   -   2.250   |   16  x  2.250    = 36px   //
      scale_3 : 1.500, // h2   -   1.500   |   16  x  1.500    = 24px   //
      scale_3 : 1.125, // h3   -   1.125   |   16  x  1.125    = 18px   //
      scale_2 : 0.875, // h4   -   0.875   |   16  x  0.875    = 14px   //
      scale_1 : 0.750, // p    -   0.750   |   16  x  0.750    = 12px   //
         size : 16,    // body -   16.00   |   16  x  1.000    = 16px   //
    },

    // #  Fibonacci Sequence ----------------------  //
    fibonacci: {
      scale_4_: 4.0,   // h1   -     4.0   |   16  x  4.0      = 64px   //
      scale_3_: 2.5,   // h2   -     2.5   |   16  x  2.5      = 40px   //
      scale_3_: 1.5,   // h3   -     1.5   |   16  x  1.5      = 24px   //
      scale_2_: 1.0,   // p    -     1.0   |   16  x  1.9      = 16px   //
         size : 12,    // body -    16.0   |   16  x  1.9      = 16px   //
    },

    // #  Golden Ratio (in Base 10) ---------------- //
    glolden: {
      scale_4 : 6.7773, // h2   -  4.1887   |   10  x  4.1887   = 41.8px //
      scale_3 : 4.1887, // h1   -  6.7773   |   10  x  6.7773   = 67.7px //
      scale_3 : 2.5888, // h3   -  2.5888   |   10  x  2.5888   = 25.8px //
      scale_2 : 1.6,    // p    -  1.6000   |   10  x  1.6000   =   16px //
         size : 10,     // body -  10.000   |   10  x  1.6000   =   16px //
    }
  };

  return scale_map[key]
}


const TYPOGRAPHIC_SCALE = getTypographicScales('century16');
const BASE_TEXT_SIZE = TYPOGRAPHIC_SCALE.size;
const device_width = Dimensions.get('window').width;
const device_height = Dimensions.get('window').height;
const device_pixelratio = PixelRatio.get();
const device_fontscale = PixelRatio.getFontScale();
const device_layout_size = PixelRatio.getPixelSizeForLayoutSize(BASE_TEXT_SIZE);

const Layout = {
  LAYOUT_UNITS: 'pts',
  DEVICE_PIXEL_RATIO: device_pixelratio,
  TEXT_SCALING_FACTOR: device_fontscale,
  DEVICE_DIMENSIONS: { device_width, device_height },
  DEVICE_WIDTH: device_width,
  DEVICE_HEIGHT: device_height,
  TEXT_BIGGER: _size => _size * 1.2,
  TEXT_REDUCE: _size => _size / 1.2,
  TEXT_SIZE: BASE_TEXT_SIZE,
  TEXT_SIZE_1: BASE_TEXT_SIZE,
  TEXT_SIZE_2: TYPOGRAPHIC_SCALE.scale_1,
  TEXT_SIZE_3: TYPOGRAPHIC_SCALE.scale_2,
  TEXT_SIZE_4: TYPOGRAPHIC_SCALE.scale_3,
  TEXT_SIZE_6: TYPOGRAPHIC_SCALE.scale_4,
  SPACING_UNIT_1: 1 * (BASE_TEXT_SIZE / 3),
  SPACING_UNIT_2: 2 * (BASE_TEXT_SIZE / 3),
  SPACING_UNIT_3: 3 * (BASE_TEXT_SIZE / 3),
  PERCENT_000: '0%',
  PERCENT_010: '10%',
  PERCENT_020: '20%',
  PERCENT_030: '30%',
  PERCENT_040: '40%',
  PERCENT_050: '50%',
  PERCENT_060: '60%',
  PERCENT_070: '70%',
  PERCENT_080: '80%',
  PERCENT_090: '90%',
  PERCENT_100: '100%',
  WIDTH_000: 0,
  WIDTH_010: (device_width / 10) * 1,
  WIDTH_020: (device_width / 10) * 2,
  WIDTH_030: (device_width / 10) * 3,
  WIDTH_040: (device_width / 10) * 4,
  WIDTH_050: (device_width / 10) * 5,
  WIDTH_060: (device_width / 10) * 6,
  WIDTH_070: (device_width / 10) * 7,
  WIDTH_080: (device_width / 10) * 8,
  WIDTH_090: (device_width / 10) * 9,
  WIDTH_100: (device_width / 10) * 10,
  HEIGHT_000: 0,
  HEIGHT_010: (device_height / 10) * 1,
  HEIGHT_020: (device_height / 10) * 2,
  HEIGHT_030: (device_height / 10) * 3,
  HEIGHT_040: (device_height / 10) * 4,
  HEIGHT_050: (device_height / 10) * 5,
  HEIGHT_060: (device_height / 10) * 6,
  HEIGHT_070: (device_height / 10) * 7,
  HEIGHT_080: (device_height / 10) * 8,
  HEIGHT_090: (device_height / 10) * 9,
  HEIGHT_100: (device_height / 10) * 10,
  ASPECT_RATIO_16x09: { width: '100%', height: 0, paddingBottom: '56.25%' },
  ASPECT_RATIO_01x01: { width: '100%', height: 0, paddingBottom: '100.00%' },
  ASPECT_RATIO_02x01: { width: '100%', height: 0, paddingBottom: '50.00%' },
  ASPECT_RATIO_03x01: { width: '100%', height: 0, paddingBottom: '33.33%' },
  ASPECT_RATIO_03x04: { width: '100%', height: 0, paddingBottom: '133.33%' },
  ASPECT_RATIO_04x01: { width: '100%', height: 0, paddingBottom: '25.00%' },
  ASPECT_RATIO_04x03: { width: '100%', height: 0, paddingBottom: '75.00%' },
  ASPECT_RATIO_04x06: { width: '100%', height: 0, paddingBottom: '150.00%' },
  ASPECT_RATIO_05x01: { width: '100%', height: 0, paddingBottom: '20.00%' },
  ASPECT_RATIO_05x07: { width: '100%', height: 0, paddingBottom: '140.00%' },
  ASPECT_RATIO_05x08: { width: '100%', height: 0, paddingBottom: '160.00%' },
  ASPECT_RATIO_06x04: { width: '100%', height: 0, paddingBottom: '66.60%' },
  ASPECT_RATIO_07x05: { width: '100%', height: 0, paddingBottom: '71.42%' },
  ASPECT_RATIO_08x05: { width: '100%', height: 0, paddingBottom: '62.50%' },
  ASPECT_RATIO_09x16: { width: '100%', height: 0, paddingBottom: '177.77%' },
  ASPECT_RATIO_RECT: { width: '100%', height: 0, paddingBottom: '66.66%' }
};


export { Layout };
