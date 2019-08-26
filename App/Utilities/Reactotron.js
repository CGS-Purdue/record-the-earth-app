import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))

import Reactotron from 'reactotron-react-native'


Reactotron.clear()

Reactotron.log('hello rendering world')


export { Reactotron }
