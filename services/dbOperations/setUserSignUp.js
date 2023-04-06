import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// authenticate Axios Login
const setUserSignUp = async (newUser) =>{
  
  try{
    await axios.put(ENDPOINTS.PUT_USER,newUser)  
  }
  catch (error){
    console.log(error)
    console.warn("Something was wrong!")
  }
  finally{
    console.log("A new User has been created");
  }
}
export default setUserSignUp;