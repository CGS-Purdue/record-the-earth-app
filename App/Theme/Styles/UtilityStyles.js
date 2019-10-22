import { StyleSheet } from 'react-native';

const UtilityStyles = {
  bordered_container: {
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
    borderColor: '#FF0000',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  stretch: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '100%',
    height: '100%',
    width: '100%',
  },
  show: {
    opacity: 1.0,
  },
  hide: {
    opacity: 0.0,
  },
};

export { UtilityStyles };
