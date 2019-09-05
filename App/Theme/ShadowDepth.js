
/*
/// HOVER DEPTH Mixin
/// @see {mixin} z_depth
/// @link http://materializecss.com/shadow.html
*/
function hover() {
  transition: box-shadow 225ms;

  &:hover {
    box-shadow: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19);
  }
}

/*
/// ---
/// ## SCRIM OVERLAY
/// https://css-tricks.com/easing-linear-gradients/
///
/// EASING LINEAR GRADIENTS FOR BETTER READABILITY
*/

function scrim_overlay() {
  // APPROX: EASE-IN-OUT
  $scrim_gradient: linear-gradient(
    hsl(0, 0%, 0%) 0%,
    hsla(0, 0%, 0%, 0.738) 19%,
    hsla(0, 0%, 0%, 0.541) 34%,
    hsla(0, 0%, 0%, 0.382) 47%,
    hsla(0, 0%, 0%, 0.278) 56.5%,
    hsla(0, 0%, 0%, 0.194) 65%,
    hsla(0, 0%, 0%, 0.126) 73%,
    hsla(0, 0%, 0%, 0.075) 80.2%,
    hsla(0, 0%, 0%, 0.042) 86.1%,
    hsla(0, 0%, 0%, 0.021) 91%,
    hsla(0, 0%, 0%, 0.008) 95.2%,
    hsla(0, 0%, 0%, 0.002) 98.2%,
    hsla(0, 0%, 0%, 0) 100%
  );

  background: $scrim_gradient;
}


/*
/// ---
/// # OVERLAY
/// overlay ($shade: 'light', $strength:5% )
*/

function _overlay($shade:'light', $strength:5%) {
  $bgcolor: red;

  @if ($shade == 'light'){
    $bgcolor: rgba(255,255,255,$strength);
  }

  @else if ($shade == 'dark'){
    $bgcolor: rgba(0,0,0,(1 * $strength));
  }

 @else {
    $bgcolor: $shade;
  }

  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    margin: 0 0 0 0;
    padding: 0;
    background-color: $bgcolor;
    top: 0 ;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 2;
  }
}

/*
/// ---
/// # BOX SHADOW
///
/// `shadow` ( $x, $y, $blur, $spread, $rgba )
///
*/
function shadow($x: 4px, $y:5px, $blur:14px, $spread:0 ,$rgba:rgba(24,24,24,.4)) {
  box-shadow: $x $y $blur $spread $rgba;
}



/*
/// Depth Mixin
/// @param {string} $depth [depth_1] - Height of the shadow
/// @requires {function} get_z_depth_map
/// @link http://materializecss.com/shadow.html
*/
function depth( $depth:"2", $hover: false ) {
  $shadow: depth_map($depth);

  box-shadow: $shadow;
}


////
/// @group effects
////

/*
///  -----------------------------
///  Material Design Shadow Effect
///  DEPTH PLACEHOLDERS BORROWED FROM THE MATERIALIZE LIBRARY
///  TO ADD DEPTH TO AN ELEMENT
///   1. EXTEND A PLACEHOLDER IN SASS
///   2. ADD A CLASS DIRECTLY IN HTML
/// @example
///    <div class="box__outer .z-depth-1">
///      <div class="box__inner">
///        <h3 class="box__title">CONTENT</h3>
///      </div>
///    </div>
///
/// @name get_depth_map
/// @param {variable} $depth
/// @property {string} z0  [none !important]
/// @property {string} z1  [0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)]
/// @property {string} z1p [0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2)]
/// @property {string} z2  [0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3)]
/// @property {string} z3  [0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px  px -1px rgba(0, 0, 0, 0.3)]
/// @property {string} z4  [0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px  5px -3px rgba(0, 0, 0, 0.3)]
/// @property {string} z5  [0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)]
/// @returns {string} css style for box-shadow for given z_depth
*/

function depth_map($depth) {

  $color14: rgba(0,0,0,.14);
  $color12: rgba(0,0,0,.12);
   $color2: rgba(0,0,0,.2);
   $color3: rgba(0,0,0,.3);

  $depth_map: (
     "0":"none !important",
     "1":`0  2px  2px 0   ${color14}, 0 1px  5px 0   ${color12}, 0 3px  1px -2px ${color2}`,
     "2":`0  3px  3px 0   ${color14}, 0 1px  7px 0   ${color12}, 0 3px  1px -1px ${color2}`,
     "3":`0  4px  5px 0   ${color14}, 0 1px 10px 0   ${color12}, 0 2px  4px -1px ${color3}`,
     "4":`0  6px 10px 0   ${color14}, 0 1px 18px 0   ${color12}, 0 3px  5px -1px ${color3}`,
     "5":`0  8px 10px 1px ${color14}, 0 3px 14px 2px ${color12}, 0 5px  5px -3px ${color3}`,
     "6":`0 16px 24px 2px ${color14}, 0 6px 30px 5px ${color12}, 0 8px 10px -5px ${color3}`,
  );

  $depth_str: map-get($depth_map, $depth);

  @return unquote(#{$depth_str});
}



.overlay
  .light {
    include_overlay('light', .15)
  }
  .dark {
    include_overlay('dark', .15)
  }





/*
/// ---
/// title: Depth
/// section: Effects
/// ---
///
/// DROP SHADOW AND DEPTH
///
/// - depth-0
/// - depth-1
/// - depth-2
/// - depth-3
/// - depth-4
/// - depth-5
/// - depth-6
.depth-0 { @include depth("0"); }
.depth-1 { @include depth("1"); }
.depth-2 { @include depth("2"); }
.depth-3 { @include depth("3"); }
.depth-4 { @include depth("4"); }
.depth-5 { @include depth("5"); }
.depth-6 { @include depth("6"); }
// HOVER EFFECT
.hover { @include hover(); }
