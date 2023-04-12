import AsyncStorage from "@react-native-async-storage/async-storage";
import KEYS from "../../constants/storageKeys";

export const getUserKey = (setDefaultUser) => {
  try {
    AsyncStorage.getItem(KEYS.USER_STORAGE)
      .then((user) =>{
        if(user!= null){
          var obj = JSON.parse(user); //solution!
          setDefaultUser({email:obj.email, password:obj.password});
        }
      })
  }
  catch(error){
    console.log(error);
  }
}