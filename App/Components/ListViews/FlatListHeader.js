import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  head: {
    flex: 1,
    width: '100%',
    backgroundColor: '#444444',
    display: 'flex',
  }
});

class FlatListHeader extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: '#444444',
          display: 'flex',
        }}
      >
        <Text style={styles.item}>{'Files'}</Text>
      </View>
    )
  }
}

export { FlatListHeader };
