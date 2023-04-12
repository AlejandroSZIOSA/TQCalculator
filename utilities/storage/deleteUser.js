import AsyncStorage from '@react-native-async-storage/async-storage';
import KEYS from '../constants/storageKeys';

const deleteUser = async () => {
  
  try {
    await AsyncStorage.removeItem(KEYS.USER_STORAGE)
    console.log("removed")
  } catch (error) {
    console.log("not removed")
  }
}
export default deleteUser;