import React, { Component } from 'react';
import { AsyncStorage, StyleSheet,Text, View } from 'react-native';

import Input from './Input';

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE';

// API
// The AsyncStorage API is promise-based. All getting and setting of key-value pairs is asynchronous. Thanks to the new async/await, interacting with the API isn't much more difficult than if it were synchronous.
// await getItem(key) => ?string  Get the value stored at key. This will return a string, or null if no data has been stored yet for that key. Don't forget to call JSON.parse(value) if you're storing your data in JSON format.
// await setItem(key, value) Store value at key. Don't forget to call JSON.stringify(value) if you're storing your data in JSON format.
// await clear()  Clear all stored data.
// ---
// removeItem(key)
// mergeItem(key, value)
// getAllKeys() => Array(string)
// flushGetRequests()
// multiGet(keys) => Array(Array(string))
// multiSet(keyValuePairs)
// multiRemove(keys)
// multiMerge(keyValuePairs)
// ----
// Don't forget, all of these functions (including getItem and setItem)
//  can throw errors upon failure which you'll want to handle!

export default class StorageManager extends Component {
  state = {name: 'World'}
  componentWillMount() {
    this.load();

    this.retrieveItem(goalCategory).then((goals) => {
      //this callback is executed when your Promise is resolved
    }).catch((error) => {
      //this callback is executed when your Promise is rejected
      console.log('Promise is rejected with error: ' + error);
    });
  }

_storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
};
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};


  async storeItem(key, item) {
    try {
        //we want to wait for the Promise returned by AsyncStorage.setItem()
        //to be resolved to the actual value before returning the value
        var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
        return jsonOfItem;
    } catch (error) {
      console.log(error.message);
    }
  }

  //the functionality of the retrieveItem is shown below
  async retrieveItem(key) {
      try {
        const retrievedItem =  await AsyncStorage.getItem(key);
        const item = JSON.parse(retrievedItem);
        return item;
      } catch (error) {
        console.log(error.message);
      }
      return;
    }


  load = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY);
      if (name !== null) {
        this.setState({name});
      }
    } catch (e) {
      console.error('Failed to load name.');
    }
  }
  save = async (name) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, name);
      this.setState({name});
    } catch (e) {
      console.error('Failed to save name.');
    }
  }

  render() {
    const {name} = this.state;
    return (
      <View>
        <Input
          placeholder={'Type your name, hit enter, and refresh!'}
          onSubmitEditing={this.save}
        />
        <Text style={styles.text}>
          Hello {name}!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
    backgroundColor: 'skyblue',
  },
});
