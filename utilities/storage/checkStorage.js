import AsyncStorage from "@react-native-async-storage/async-storage";
import KEYS from "../../constants/storageKeys";

const checkStorage = async () => {
  try {
  const isEmpty = await AsyncStorage.getItem(KEYS.USER_STORAGE);
    if (isEmpty !== null){
      console.log('data found')
      return false;
    } 
      else {
        console.log("no data found")
        return true;
      }
  } catch (error) {
    console.log(error)
    return true;
    }
  }
export default checkStorage;