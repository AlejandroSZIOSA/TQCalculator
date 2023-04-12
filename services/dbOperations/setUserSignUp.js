import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

import saveUserKey from "../../utilities/storage/saveUserKey";

// Create a new User
const setUserSignUp = async (newUser) =>{
  try{
    await axios.put(ENDPOINTS.PUT_USER,newUser) 
    saveUserKey(newUser); //testing
    console.warn("A new User has been created successfully");
    console.warn("RESTART THE APP");
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