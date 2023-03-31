import AsyncStorage from '@react-native-async-storage/async-storage';
import KEYS from '../constants/storageKeys';

const saveUser = async (user) => {
  try {
    await AsyncStorage.setItem(KEYS.USER_STORAGE,JSON.stringify(user));
    console.log("saved")
  } catch (error) {
    console.log(error);
  }
};
export default saveUser;