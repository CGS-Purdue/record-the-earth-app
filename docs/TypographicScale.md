 = require('react-native')
import { Dimensions, PixelRatio } from 'react-native'

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
  if (PIXEL_RATIO === 2) {
    // iphone 5s
    if (width < 360) {                         return size * 0.95; }
    // iphone 5
    if (height < 667) {                        return size * 1.00;  }
    // iphone 6/6s
    else if (height >= 667 && height <= 735) { return size * 1.15; }
    // phablets
    else {                                     return size * 1.25; }
  }
  if (PIXEL_RATIO === 3) {
    //ratio 3 - fontscale ~ 3:3
    if (width <= 360) {                       return size * 1.00; }
    // other width sizings
    if (height < 667) {                       return size * 1.15; }
    // mid size / large fontscale
    if (height >= 667 && height <= 735) {     return size * 1.20; }
    // iphone 6s plus / 7 plus
    else {                                    return size * 1.27; }
  }
  if (PIXEL_RATIO === 3.5) {
    // RATIO 3.5 - fontscale ~ 3:3
    if (width <= 360) {                       return size * 1.00; }
    // smaller height devices
    if (height < 667) {                       return size * 1.20;  }
    //  large fontscale
    if (height >= 667 && height <= 735) {     return size * 1.25; }
    // larger phablet devices
    else {                                    return size * 1.40;  }
  }

  // PIX_RATIO !== 2 || 3 || 3.5
  return size;
};


// getPixelSizeForLayoutSize()

function isSmallDevice (width) {
  return width < 375;
}

function relative_units () {

}




// INCREMENTAL MODULAR SCALED TYPOGRAPHY SYSTEM

// Sizes generated at http://www.modularscale.com

// TYPOGRPHIC SCALES

  const scale_map = {

    // Minor Third Scale 1.2 Ratio

     minorthird: {

    // Decreasing -----------------

      fs_m6 : 0.493,     //   7.892 (px)  
      fs_m5 : 0.555,     //   8.879 (px)  
      fs_m4 : 0.624,     //   9.989 (px)  
      fs_m3 : 0.702,     //  11.237 (px)  
      fs_m2 : 0.791,     //  12.642 (px)  
      fs_m1 : 0.889,     //  14.222 (px)  
      fs_m0 : 1.000,     //  16.000 (px)  

    // Increasing   ----------------

     fs_00 : 1.000,   //  16.000 (px)
     fs_01 : 1.125,   //  18.000 (px)
     fs_02 : 1.266,   //  20.250 (px)
     fs_03 : 1.424,   //  22.781 (px)
     fs_04 : 1.602,   //  25.629 (px)
     fs_05 : 1.802,   //  28.833 (px)
     fs_06 : 2.027,   //  32.437 (px)
     fs_07 : 2.281,   //  36.491 (px)
     fs_08 : 2.566,   //  41.053 (px)
     fs_09 : 2.887,   //  46.184 (px)
     fs_10 : 3.247,   //  51.957 (px)
     fs_11 : 3.653,   //  58.452 (px)
     fs_12 : 4.110,   //  65.758 (px)
     fs_13 : 4.624,   //  73.978 (px)
     fs_14 : 5.202,   //  83.225 (px)
     fs_15 : 5.852,   //  93.628 (px)
      // ----------------------------
    },

// ==================================================================

    century16 : {    //     #    16th century scale ----------------------- //

      body : 16,     //     body -   16.00   |   16  x  1.000   = 16px     //

      h1 : 2.250,    //     h1   -   2.250   |   16  x  2.250   = 36px     //
      h2 : 1.500,    //     h2   -   1.500   |   16  x  1.500   = 24px     //
      h3 : 1.125,    //     h3   -   1.125   |   16  x  1.125   = 18px     //
      h4 : 0.875,    //     h4   -   0.875   |   16  x  0.875   = 14px     //
       p : 0.750,    //     p    -   0.750   |   16  x  0.750   = 12px     //

    }, // =======    // --------------------------------------------------  //

    fibonacci : {    //     #    Fibonacci Sequence ----------------------  //

      body : 16,     //     body -      16   |   16  x  1.9     = 16px     //

      h1 :  4.0,     //     h1   -     4.0   |   16  x  4.0     = 64px     //
      h2 :  2.5,     //     h2   -     2.5   |   16  x  2.5     = 40px     //
      h3 :  1.5,     //     h3   -     1.5   |   16  x  1.5     = 24px     //
       p :  1.0,     //     p    -     1.0   |   16  x  1.9     = 16px     //

    }, // =======    //     ----------------------------------------------  //

    glolden : {      //     #    Golden Ratio (in Base 10) ---------------- //

      body : 10,     //     body -  10       |   10  x  1.6000  = 16px      //

      h1 :  6.7773,   //    h2   -  4.1887   |   10  x  4.1887  = 41.8px   //
      h2 :  4.1887,   //    h1   -  6.7773   |   10  x  6.7773  = 67.7px   //
      h3 :  2.5888,   //    h3   -  2.5888   |   10  x  2.5888  = 25.8px   //
       p :  1.6000,   //    p    -  1.6000   |   10  x  1.6000  = 16.0px   //

    }, // =======     //     ---------------------------------------------   //


//==== ==============================================================

  };

  return scale_map[key]
}
