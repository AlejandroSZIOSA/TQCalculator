import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// Create a new User
const setUserSignUp = async (newUser) =>{
  try{
    await axios.put(ENDPOINTS.PUT_USER,newUser)  
  }
  catch (error){
    console.log(error)
    console.warn("Put request Failed")
  }
  finally{
    console.log("A new User has been created");
    console.warn("New user has been created")
  }
}
export default setUserSignUp;