import AsyncStorage from '@react-native-async-storage/async-storage';
import KEYS from '../../constants/storageKeys';

const saveUserKey = async (user) => {
  try {
    await AsyncStorage.setItem(KEYS.USER_STORAGE ,JSON.stringify(user));
    console.log("saved")
  } 
  catch (error) {
    console.log(error);
  }
  finally{
    console.log("User has been Saved");
  }
};
export default saveUserKey;