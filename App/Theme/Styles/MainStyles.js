import { ThemeColors } from '../Colors';
import { Layout } from '../Layout';

const MainStyles = {
  user: { flex: 1 },
  image: { flex: 1 },
  name: { flex: 1 },
  padView: {
    backgroundColor: ThemeColors.TRANSPARENT,
    flexBasis: Layout.PERCENT_100,
    width: Layout.PERCENT_100,
    height: Layout.PERCENT_100,
    position: 'absolute',
    display: 'flex',
    flexShrink: 0,
    flexGrow: 1,
    bottom: 0,
    margin: 0,
    right: 0,
    left: 0,
    top: 0,
  },
};


export { MainStyles };
