import infoEntry from './content/InfoEntry';
import earthSounds from './content/EarthSounds';

const InfoPageContent = (key) =>{
  var PageMap = {
   entry: infoEntry,
   earthSounds: earthSounds,
  };
  if (PageMap[key]) {
    return PageMap[key]
  } else {
    return PageMap;
  }
};



export { InfoPageContent };
