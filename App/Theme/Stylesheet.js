import { StyleSheet } from 'react-native';
import { Colors } from './Colors';
import ViewStyles from './styles/view';


const MainStyles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundImage: './App/assets/img/bg.jpg',
    // color: '#fff',
  },
  rootContainer:{
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'relative',
    padding: 0,
    margin: 0,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
  },
  absoluteRootContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0 ,
    left: 0,
    padding: 0,
    margin: 0,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
  },
  user: {
      flex: 1,
  },
  image: {
      flex: 1,
  },
  name: {
      flex: 1,
  },
}


const debugStyles = StyleSheet.create({
  highlight: {
    borderColor : '#FF0000',
    borderWidth : 1,
    borderStyle : 'solid',
  }
});

const UtilityStyles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
  listItem: {
    flex: 1,
    fontSize: 16,
    color: 'white',
  },
  selectedListItem: {
    color: 'green',
  },
  separator: {
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  border: {
    borderColor : '#FF0000',
    borderWidth : 1,
    borderStyle : 'solid',
  }

});

let combined = Object.assign(ViewStyles, MainStyles);
const Styles = StyleSheet.create(combined);

export default Styles;

export { UtilityStyles, debugStyles, Styles }
