import AsyncStorage from '@react-native-async-storage/async-storage';
import KEYS from '../../constants/storageKeys';

const retrieveUser = async () => {
  try {
    const value = await AsyncStorage.getItem(KEYS.USER_STORAGE);
    if (value !== null) {
      // We have data!!
      console.log(JSON.parse(value));
    }
      else{console.log(value)}
  } catch (error) {
    console.log(error)
  }
};
export default retrieveUser;;