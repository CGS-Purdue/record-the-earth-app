import { Layout } from '../Layout';
import { m, p } from './LayoutStyles';
import { FontVariables } from '../Fonts';

const _font_vars = FontVariables;
const _layout = Layout;

const SizeVariables = {
  TEXT_SIZE: _layout.TEXT_SIZE,
  TEXT_SIZE_1: _layout.TEXT_SIZE_1,
  TEXT_SIZE_2: _layout.TEXT_SIZE_2,
  TEXT_SIZE_3: _layout.TEXT_SIZE_3,
  TEXT_SIZE_4: _layout.TEXT_SIZE_4,
  TEXT_SIZE_5: _layout.TEXT_SIZE_5,
  LINE_HEIGHT_1: _layout.LINE_HEIGHT_1,
  LINE_HEIGHT_2: _layout.LINE_HEIGHT_2,
  LINE_HEIGHT_3: _layout.LINE_HEIGHT_3,
  LINE_HEIGHT_4: _layout.LINE_HEIGHT_4,
  LINE_HEIGHT_5: _layout.LINE_HEIGHT_5,
  SPACING_UNIT_1: _layout.SPACING_UNIT_1,
  SPACING_UNIT_2: _layout.SPACING_UNIT_2,
  SPACING_UNIT_3: _layout.SPACING_UNIT_3,
};

const fs = {
  fs_0: { fontSize: _layout.TEXT_SIZE },
  fs_1: { fontSize: _layout.TEXT_SIZE_1 },
  fs_2: { fontSize: _layout.TEXT_SIZE_2 },
  fs_3: { fontSize: _layout.TEXT_SIZE_3 },
  fs_4: { fontSize: _layout.TEXT_SIZE_4 },
  fs_5: { fontSize: _layout.TEXT_SIZE_5 },
};

const lh = {
  lh_0: { lineHeight: _layout.LINE_HEIGHT_1 },
  lh_1: { lineHeight: _layout.LINE_HEIGHT_1 },
  lh_2: { lineHeight: _layout.LINE_HEIGHT_2 },
  lh_3: { lineHeight: _layout.LINE_HEIGHT_3 },
  lh_4: { lineHeight: _layout.LINE_HEIGHT_4 },
  lh_5: { lineHeight: _layout.LINE_HEIGHT_5 },
};

const fw = {
  fw_thin: { fontWeight: _font_vars.weights.thin },
  fw_extralight: { fontWeight: _font_vars.weights.extralight },
  fw_light: { fontWeight: _font_vars.weights.light },
  fw_regular: { fontWeight: _font_vars.weights.regular },
  fw_medium: { fontWeight: _font_vars.weights.medium },
  fw_semibold: { fontWeight: _font_vars.weights.semibold },
  fw_bold: { fontWeight: _font_vars.weights.bold },
  fw_extrabold: { fontWeight: _font_vars.weights.extrabold },
  fw_superbold: { fontWeight: _font_vars.weights.superbold },
};

const font = {
  font_body: { fontFamily: _font_vars.type.TITLE_FONT }, // 'spacemono-regular',
  font_link: { fontFamily: _font_vars.type.HEADING_FONT }, // 'spacemono-regular',
  font_mono: { fontFamily: _font_vars.type.BODY_FONT }, // 'cutive-mono-regular',
  font_title: { fontFamily: _font_vars.type.SANS_FONT }, // 'opensans-regular-webfont',
  font_button: { fontFamily: _font_vars.type.SANS_LIGHT_FONT }, // 'opensans-light-webfont',
  font_icon: { fontFamily: _font_vars.type.ICON_FONT }, // 'ionicons',
};

function mergeStyles(styleArray) {
  return Object.assign(Object.create(null), ...styleArray);
}

const Empty = Object.create(null);
const FontClasses = Empty;

FontClasses.fs = fs;
FontClasses.lh = lh;
FontClasses.fw = fw;
FontClasses.font = font;
// const FontStyles = StyleSheet.create(FontClasses);

const TextClasses = Empty;
TextClasses.BODY = mergeStyles([lh.lh_0, fs.fs_0, p.y10, m.x10]);
TextClasses.H1 = mergeStyles([lh.lh_5, fs.fs_5, p.y35, m.x10]);
TextClasses.H2 = mergeStyles([lh.lh_4, fs.fs_4, p.y30, m.x10]);
TextClasses.H3 = mergeStyles([lh.lh_3, fs.fs_3, p.y25, m.x10]);
TextClasses.H4 = mergeStyles([lh.lh_2, fs.fs_2, p.y20, m.x10]);
TextClasses.H5 = mergeStyles([lh.lh_1, fs.fs_1, p.y15, m.x10]);

// const TypographyStylesheet = {
// body:  TextClasses.BODY,
// head1: TextClasses.H1,
// head2: TextClasses.H2,
// head3: TextClasses.H3,
// head4: TextClasses.H4,
// head5: TextClasses.H5,
// TextAppearance: {
//   fontStyle: 'normal',
//   borderColor: ThemeColors.INPUT_BORDER,
//   backgroundColor: ThemeColors.INPUT_BG,
//   color: ThemeColors.INPUT_TEXTCOLOR,
// }
// };

export { TextClasses, FontClasses };
