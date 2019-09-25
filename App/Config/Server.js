import { Base64 } from '../Utilities/Base64';
// export const UPLOAD_SERVER_URI = "https://www.recordtheearth.org/soundscape-android.php";
// export const UPLOAD_TOKEN = 'AIzaSyCj-xcU7l0a-Ryh4Hqkgam-cqh7qDQSX7Q';
// const FILE_NAME = 'test.mp4';


export default (() => {
  return Base64.encode(JSON.stringify({
    pathname: 'soundscape-android.php',
    hostname: 'recordtheearth.org',
    data: [['cqh7qDQSX7Q'], ['xcU7l0a'], ['AIzaSyCj'], ['Ryh4Hqkgam']],
  }));
})();
