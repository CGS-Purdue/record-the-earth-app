import { checkAppDirectoriesStatus, getAppStorageContent }  from '../Utilities/Filesystem';
import { Image} from 'react-native';
import { Icon } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Theme } from '../Theme';

const _assets = Theme.Assets;
const _styles = Theme.Styles;
const _colors = Theme.Colors;

// import { StatusDB }  from '../Components/Database/StatusDB';
// class SystemCheck  extends Component {
//   constructor(props) {
//     super(props);
//     checkDB({autoconnect: true})
//   }
//   render() {
//     return (
//       <SystemCheck autoconnect={true}>
//     )
//   }
// }

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function initalAppSetup() {
  let dir_status = checkAppDirectoriesStatus();
  console.log('[InitalAppSetup] dir_status', dir_status);

  console.log('[InitalAppSetup] loading font icons');
  const ionicFont = Font.loadAsync({
    'ionicons':require('../Assets/fonts/ionicons.ttf'),
  });
  console.log('ionicFont', ionicFont);
  // let fsData = getAppStorageContent('/');
  // fsData = getAppStorageContent('/soundfiles');
  // console.log('getAppStorageContent', fsData);


  // const _db_StatusTests == () => {
  // }]
  return true;
}

export { initalAppSetup };
