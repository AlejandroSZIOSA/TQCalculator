import AsyncStorage from '@react-native-async-storage/async-storage';
import KEYS from '../constants/storageKeys';

const deleteUserKey = async () => {
  
  try {
    await AsyncStorage.removeItem(KEYS.USER_STORAGE)
    console.log("removed")
  } catch (error) {
    console.log("not removed")
  }
}
export default deleteUserKey;