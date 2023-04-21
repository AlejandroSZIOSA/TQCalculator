import AsyncStorage from "@react-native-async-storage/async-storage";
import KEYS from "../../constants/storageKeys";

const checkStorage = async () => {
  try {
  const isEmpty = await AsyncStorage.getItem(KEYS.USER_STORAGE);
    if (isEmpty !== null){
      console.log('Data found It in Async Storage')
      return false;
    } 
      else {
        console.log("No data found It in Async storage")
        return true;
      }
  } catch (error) {
    console.log(error)
    return true;
    }
  }
export default checkStorage;