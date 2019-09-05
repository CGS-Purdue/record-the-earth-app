import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';

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
const ViewStyles = {
  centered_outer: {
    backgroundColor: ThemeColors.TRANSPARENT,
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  centered_inner: {
    backgroundColor: ThemeColors.TRANSPARENT,
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
    backgroundColor: ThemeColors.TRANSPARENT,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  center_col: {
    backgroundColor: ThemeColors.TRANSPARENT,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: ThemeColors.WHITE,
  },

  appContainer: {
    width: Layout.PERCENT_100,
    height: Layout.PERCENT_100,
    display: 'flex',
    position: 'relative',
    padding: 0,
    margin: 0,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
  },

  rootContainer: {
    width: Layout.PERCENT_100,
    height: Layout.PERCENT_100,
    display: 'flex',
    position: 'relative',
    padding: 0,
    marginTop: 0,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
  },
};

export { ViewStyles };
