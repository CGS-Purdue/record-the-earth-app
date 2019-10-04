import { StyleSheet, Platform } from 'react-native';
import { ThemeColors } from '../Colors';
import { ThemeLayout } from '../Layout';
import { DebugStyles, DebugStyleSettings, addDebugStyles } from './DebugStyles';

//// --------------------------------------------------------------------------
/// # [NAME] StyleSheet
/// ---------------------------------------------------------------------------


const _c = ThemeColors;
const _l = ThemeLayout;


const GroupStyles = Object.assign(
  Object.create(null),
);

/// # OPTIONAL - ADD DEBUG STYLES TO YOUR COMPONENTS BEFORE EXPORTING
/// ---------------------------------------------------------------------------
/// if (DebugStyleSettings.DEBUG_OUTLINE_STYLES_ENABLED) {
///   GroupStyles.class = addDebugStyles( GroupStyles.class, DebugStyles.debug_outline);
/// }
///

export { GroupStyles }
