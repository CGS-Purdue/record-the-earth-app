import { AsyncStorage } from 'react-native';

const setKey = async (key, value) => {
  try {
    await AsyncStorage.setItem('key', value);
  } catch (error) {
    console.log(error);
    return error;
  }
};

// getItem(key: string, [callback]: ?(error: ?Error, result: ?string) => void)
const getKey = async (key, _cb) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      console.log(data);
      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};

export { getKey, setKey };
