import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';
import { DebugStyles, DebugStyleSettings, addDebugStyles } from './DebugStyles';

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

const Container = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flex: 1,
};

const FlexContainer = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flex: 1,
  width: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  display: 'flex',
};

const FlexColContainer = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flex: 1,
  width: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  display: 'flex',
  flexDirection: 'column',
};


const CeneretedFlexContainer = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flex: 1,
  width: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
};

const CeneretedFlexColContainer = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flex: 1,
  width: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  flexDirection: 'column',
};

const RootViewContainer = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flexBasis: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  width: Layout.PERCENT_100,
  flexShrink: 0,
  flexGrow: 1,
  padding: 0,
  margin: 0,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  display: 'flex',
};

const Stretch = {
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  width: Layout.PERCENT_100,
};


const PadView = {
  backgroundColor: ThemeColors.TRANSPARENT,
  flexBasis: Layout.PERCENT_100,
  width: Layout.PERCENT_100,
  height: Layout.PERCENT_100,
  position: 'relative',
  display: 'flex',
  flexShrink: 0,
  flexGrow: 1,
  bottom: 0,
  margin: 0,
  right: 0,
  left: 0,
  top: 0,
};

const Section = {
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderTopColor: ThemeColors.GRN_300,
  borderBottomColor: ThemeColors.GRN_300,
};

const ViewStyles = {
  container: Container,
  section: Section,
  stretch: Stretch,
  padded_container: PadView,
  centered_row: CeneretedFlexContainer,
  centered_col: CeneretedFlexColContainer,
  centered_inner: CeneretedFlexContainer,
  centered_outer: CeneretedFlexColContainer,
  flex_container: FlexContainer,
  flexcol_container: FlexColContainer,
  rootview_container: RootViewContainer,
  appview_container: RootViewContainer,
};

console.log(ViewStyles);

if (DebugStyleSettings.DEBUG_OUTLINE_STYLES_ENABLED){
  ViewStyles.container = addDebugStyles(ViewStyles.container, DebugStyles.debug_outline);
  ViewStyles.section = addDebugStyles(ViewStyles.section, DebugStyles.debug_outline);
  ViewStyles.stretch = addDebugStyles(ViewStyles.stretch, DebugStyles.debug_outline);
  ViewStyles.padded_container = addDebugStyles(ViewStyles.padded_container, DebugStyles.debug_outline);
  ViewStyles.centered_row = addDebugStyles(ViewStyles.centered_row, DebugStyles.debug_outline);
  ViewStyles.centered_col = addDebugStyles(ViewStyles.centered_col, DebugStyles.debug_outline);
  ViewStyles.centered_inner = addDebugStyles(ViewStyles.centered_inner, DebugStyles.debug_outline);
  ViewStyles.centered_outer = addDebugStyles(ViewStyles.centered_outer, DebugStyles.debug_outline);
  ViewStyles.flex_container = addDebugStyles(ViewStyles.flex_container, DebugStyles.debug_outline);
  ViewStyles.flexcol_container = addDebugStyles(ViewStyles.flexcol_container, DebugStyles.debug_outline);
  ViewStyles.rootview_container = addDebugStyles(ViewStyles.rootview_container, DebugStyles.debug_outline);
  ViewStyles.appview_container = addDebugStyles(ViewStyles.appview_container, DebugStyles.debug_outline);
}
























export { ViewStyles };
