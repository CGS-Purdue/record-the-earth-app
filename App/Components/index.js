l
import { RootView } from './RootView';
import { CenterView, CenterColView, CenterRowView } from './CenterView';
import { CenterBox } from './CenterBox';
import { PadView } from './PadView';
import { BoxX } from './BoxX';
import { BoxY} from './BoxY';
import { ImgBox } from './ImgBox';

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
}
