import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

import saveUserKey from "../../utilities/storage/saveUserKey";

//Create a new User
const setUserSignUp = async (newUser) =>{
  try{
    await axios.put(ENDPOINTS.PUT_USER,newUser) 
      .then(() => {
        saveUserKey(newUser); //Async storage
        console.warn("User created successfully");
        console.warn("Please Restart the App");
      })
  }
  catch (error){
    console.log(error)
    console.warn("Put request Failed")
  }
  finally{
    console.log("SignUp Operation Finished");
  }
}
export default setUserSignUp;