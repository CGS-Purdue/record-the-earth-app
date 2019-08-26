import { Colors } from '../Colors';

//// --------------------------------------------------------------------------
/// # View Style Props
/// ---------------------------------------------------------------------------
///  - Layout Props
///  - Shadow Props
///  - Transforms
///  - borderWidth    [borderLeftWidth borderBottomWidth
///                    borderRightWidth borderTopWidth]
///  - borderColor    [borderRightColor borderBottomColor borderEndColor
///                    borderLeftColor borderStartColor borderTopColor]
///  - borderRadius   [borderTopEndRadius borderTopLeftRadius
///                    borderTopRightRadius borderTopStartRadius
///                    borderBottomEndRadius borderBottomLeftRadius
///                    borderBottomRightRadius borderBottomStartRadius]
///  - elevation
///  - borderStyle
///  - opacity
///  - backgroundColor
///  - backfaceVisibility
///
export default style = {
  centered_outer: {
    backgroundColor: Colors.TRANSPARENT,
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centered_inner: {
    backgroundColor: Colors.TRANSPARENT,
    flexBasis: '100%',
    flexGrow: 1,
    flexShrink: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  center_row: {
    backgroundColor: Colors.TRANSPARENT,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center_col: {
    backgroundColor: Colors.TRANSPARENT,
    flexBasis: '100%',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

}
