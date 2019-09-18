import { BoxX } from './BoxX';
import { BoxY} from './BoxY';
import { CenterBox } from './CenterBox';
import { CenterColView, CenterRowView,CenterView } from './CenterView';
import { ImgBox } from './ImgBox';
import { ImgBgView } from './ImgBgView';
import { ImgBgFill } from './ImgBgFill';
import { PadView } from './PadView';
import { Section } from './Section';
import { RootView } from './RootView';

const UtilityViews = {
  CenterBox: CenterBox,
  RootView: RootView,
  ImgBox: ImgBox,
  PadView: PadView,
  BoxX: BoxX,
  BoxY: BoxY,
};

export default UtilityViews;

export {
  Section,
  BoxX,
  BoxY,
  CenterBox,
  CenterColView,
  CenterRowView,
  CenterView,
  ImgBgFill,
  ImgBgView,
  ImgBox,
  PadView,
  RootView,
};
