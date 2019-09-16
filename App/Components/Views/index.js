import { BoxX } from './BoxX';
import { BoxY} from './BoxY';
import { CenterBox } from './CenterBox';
import { CenterColView, CenterRowView,CenterView } from './CenterView';
import { ImgBox } from './ImgBox';
import { PadView } from './PadView';
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
  BoxX,
  BoxY,
  CenterBox,
  CenterColView,
  CenterRowView,
  CenterView,
  ImgBox,
  PadView,
  RootView,
};
