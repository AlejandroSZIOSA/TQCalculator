import AsyncStorage from "@react-native-async-storage/async-storage";
import KEYS from "../constants/storageKeys";

const checkEmptyStorage = async () => {
  try {
  const value = await AsyncStorage.getItem(KEYS.USER_STORAGE);
  if (value !== null){
    console.log('We have data')
  } 
    else {console.log("no data found")
    //console.log(value)
    }
  } catch (error) {
    console.log(error)
  }
}
export default checkEmptyStorage;