// =============================================================================
// Fonts
// =============================================================================
//
// Cross-browser support for @font-face. Supports IE,playfair' Gecko, Webkit, Opera.
// * _name is required, arbitrary, and what you will use in font stacks.
// * _font-files is required using font-files('relative/location', 'format').
//   for best results use this order: woff, opentype/truetype, svg
// * _eot is required by IE, and is a relative location of the eot file.
// * _weight shows if the font is bold, defaults to normal
// * _style defaults to normal, might be also italic
// * For android 2.2 Compatiblity, please ensure that your web page has
//   a meta viewport tag.
// * To support iOS < 4.2, an SVG file must be provided
//
// If you need to generate other formats check out the Font Squirrel
// [font generator](http://www.fontsquirrel.com/fontface/generator)
//
//
// In order to refer to a specific style of the font in your stylesheets as
// e.g. "font-style: italic;",  you may add a couple of @font-face includes
// containing the respective font files for each style and specying
// respective the _style parameter.
//
// Order of the includes matters, and it is: normal, bold, italic, bold+italic.
function font-face(
  _name,
  _path,
  _weight: false,
  _style: false,
  _exts: eot woff2 woff ttf svg
) {

  _src: null;

  _extmods: (
    eot: "?",
    svg: "#" + str-replace(_name, " ", "_")
  );

  _formats: (
    otf: "opentype",
    ttf: "truetype"
  );

  @each _ext in _exts {
    _extmod: if(map-has-key(_extmods, _ext), _ext + map-get(_extmods, _ext), _ext);
    _format: if(map-has-key(_formats, _ext), map-get(_formats, _ext), _ext);
    _src: append(_src, url(quote(_path + "." + _extmod)) format(quote(_format)), comma);
  }

  @font-face {
    font-family: quote(_name);
    src: _src;

    @if _weight { font-weight: _weight; }

    @if _style { font-style: _style; }
  }
}

// SET FONT DEFAULTS
function font_style(_font_family, _font_wt, _font_color) {
  color: _font_color;
  font-family: _font_family;
  font-size: _font_size;
  font-weight: _font_wt;
}

function font_family (_font_family:sans-serif) {
  font-family: _font_family, sans-serif;
}

function font_smoothing () {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/// ## FONT-WEIGHT
///
/// <p class="font-thin">Lato Thin</p>
/// <p class="font-light">Lato Light</p>
/// <p class="font-regular">Lato Light</p>
/// <p class="font-bold">Lato Light</p>
/// <p class="font-semibold">Lato Regular</p>
/// <p class="font-extrabold">Lato Bold</p>
///
/// <p class="font-thin font-italic">Lato Thin Italic</p>
/// <p class="font-light font-italic">Lato Light Italic</p>
/// <p class="font-regular font-italic">Lato Regular Italic</p>
/// <p class="font-bold font-italic">Lato Bold Italic</p>
/// <p class="font-semibold font-italic">Lato Bold Italic</p>
/// <p class="font-extrabold font-italic">Lato Heavy Italic</p>
const weight = {
  'thin'      : { font-weight: _font_weight_thin; }
  'light'     : { font-weight: _font_weight_light; }
  'regular'   : { font-weight: _font_weight_medium; }
  'bold'      : { font-weight: _font_weight_bold; }
  'semibold'  : { font-weight: _font_weight_semibold; }
  'extrabold' : { font-weight: _font_weight_extrabold; }
  'italic'    : { font-style: italic; }
}

// INCREMENTAL MODULAR SCALED TYPOGRAPHY SYSTEM
// Minor Third Scale - 1.2 ratio
// Sizes generated at http://www.modularscale.com

// FONT SIZE
const fs = {
  // INCREASING SCALE
  fs0   : {'font-size':'1.000em'}, // 16px
  fs1   : {'font-size':'1.125em'}, // 18px
  fs2   : {'font-size':'1.266em'}, // 20.25px
  fs3   : {'font-size':'1.424em'}, // 22.781px
  fs4   : {'font-size':'1.602em'}, // 25.629px
  fs5   : {'font-size':'1.802em'}, // 28.833px
  fs6   : {'font-size':'2.027em'}, // 32.437px
  fs7   : {'font-size':'2.281em'}, // 36.491px
  fs8   : {'font-size':'2.566em'}, // 41.053px
  fs9   : {'font-size':'2.887em'}, // 46.184px
  fs10  : {'font-size':'3.247em'}, // 51.957px
  fs11  : {'font-size':'3.653em'}, // 58.452px
  fs12  : {'font-size':'4.110em'}, // 65.758px
  fs13  : {'font-size':'4.624em'}, // 73.978px
  fs14  : {'font-size':'5.202em'}, // 83.225px
  fs15  : {'font-size':'5.852em'}, // 93.628px
  fs16  : {'font-size':'6.583em'}, // 105.332px

  // DECREASING SCALE (MINUS)
  fsm1 :{'font-size' : '0.889em'},  // 14.222px
  fsm2 :{'font-size' : '0.791em'},  // 12.642px
  fsm3 :{'font-size' : '0.702em'},  // 11.237px
  fsm4 :{'font-size' : '0.624em'},  // 9.989px
  fsm5 :{'font-size' : '0.555em'},  // 8.879px
  fsm6 :{'font-size' : '0.493em'},  // 7.892px
};


// Sizes generated at http://www.modularscale.com
// TYPOGRPHIC SCALES
function _font_scale(_scale) {
  _font_scales:(

    "century16":(       // ## 16th century scale --------------------------
      "h1":"2.250",     // h1 { font-size: 2.250em;  /* 16 x 2.250 = 36 */ }
      "h2":"1.500",     // h2 { font-size: 1.500em;  /* 16 x 1.500 = 24 */ }
      "h3":"1.125",     // h3 { font-size: 1.125em;  /* 16 x 1.125 = 18 */ }
      "h4":"0.875",     // h4 { font-size: 0.875em;  /* 16 x 0.875 = 14 */ }
       "p":"0.750",     // p  { font-size: 0.750em;  /* 16 x 0.750 = 12 */ }
    "body":"16",        // p  { font-size: 0.750em;  /* 16 x 0.750 = 12 */ }
    ),

    "fibonacci":(       // ## Fibonacci Sequence ----------------------
      "h1":"4.0",       // h1 { font-size: 4.0em; /* 16 x 4.0 = 64 */ }
      "h2":"2.5",       // h2 { font-size: 2.5em; /* 16 x 2.5 = 40 */ }
      "h3":"1.5",       // h3 { font-size: 1.5em; /* 16 x 1.5 = 24 */ }
       "p":"1.0",       // p  { font-size: 1.0em; /* 16 x 1.9 = 16 */ }
    "body":"12px"       // p  { font-size: 1.0em; /* 16 x 1.9 = 16 */ }
    ),

    "glolden_ratio":(   // ## Golden Ratio (in Base 10) -----------------------------
      "h1":"6.7773",    // h2   { font-size: 4.1887em; /* 10 x 4.1887em = 41.887 */ }
      "h2":"4.1887",    // h1   { font-size: 6.7773em; /* 10 x 6.7773em = 67.773 */ }
      "h3":"2.5888",    // h3   { font-size: 2.5888em; /* 10 x 2.5888em = 25.888 */ }
       "p":"1.6000",    // p    { font-size: 1.6000em; /* 10 x 1.6 = 16     */ }
    "body":"10px"       // body { font-size: 10px;     /* font-size: 62.5%; */ }
    )
  );

  return map-get(_font_scales, _scale);
}

//Font Weights
function _font_wt(_input) {
  wt_map: (
    "thin":      200,
    "light":     300,
    "regular":   400,
    "medium":    500,
    "semibold":  600,
    "bold":      700,
    "extrabold": 800,
  );

  return wt_map[input];
}

function _font_size(_scale, _tag, _units:"em") {
  _size: map-get(_scale, _tag);

  @if _size == null {
    @return "1em";
  }

  @return #{_size}#{_units};
}

.bigger { font-size: 1.7em; }
.smaller { font-size: 0.8em; }

const Typography = {
  mono_font: 'space-mono',
};



// Sizes generated at http://www.modularscale.com
// TYPOGRPHIC SCALES

_fonts_path: '../assets/fonts';

_default_font_scale: _font_scale("century16");
_default_font_size: 16px !default;

// FONT FAMILY NAMES
_default_font_heading:  _font_family("playfair");
_default_font_body:     _font_family("lato");

//Font Weights
_font_weight_thin:      _font_wt("thin");
_font_weight_light:     _font_wt("light");
_font_weight_regular:   _font_wt("regular");
_font_weight_medium:    _font_wt("medium");
_font_weight_semibold:  _font_wt("semibold");
_font_weight_bold:      _font_wt("bold");
_font_weight_extrabold: _font_wt("extrabold");

_fonts_path: '/assets/fonts';


export { Typography }
