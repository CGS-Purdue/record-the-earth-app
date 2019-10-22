import categories from './content/categories';
import about from './content/about';
import terms from './content/terms';
import joinus from './content/joinus';
import results from './content/results';

const InfoPageContent = (key) =>{
  var PageMap = {
    about: about,
    categories: categories,
    joinus: joinus,
    results: results,
    terms: terms,
  };
  if (PageMap[key]) {
    return PageMap[key]
  } else {
    return PageMap;
  }
};



export { InfoPageContent };
