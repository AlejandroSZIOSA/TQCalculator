import AsyncStorage from "@react-native-async-storage/async-storage";
import KEYS from "../../constants/storageKeys";

export const getUserKey = (setDefaultUser) => {
  try {
    AsyncStorage.getItem(KEYS.USER_STORAGE)
      .then((user) =>{
        if(user!= null){
          var obj = JSON.parse(user); //solution
          var email = obj.email.toLowerCase() // problem must fix it!
          var password = obj.password.toLowerCase() // problem must fix it!
          setDefaultUser({email:email, password:password});
        }
      })
  }
  catch(error){
    console.log(error);
  }
}