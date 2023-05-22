import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

//Authenticate Axios User Login
const onLoginBtnHandler = async (userKey,logIn,setToken) =>{
  try{
    await axios.post(ENDPOINTS.POST_USER,userKey)
      .then((res) =>{
        const token = res.data.token  
        logIn(true) //Callback function to CTX (Trigger Switch between Navigators)
        setToken(token) //CallBack function
        console.log("LogIn request successful");
      })
  }
  catch (error){
    //console.warn(error.message);
    console.warn("LogIn request Failed!")
  }
  finally{
    console.log("LogIn operation successful");
  }
}
export default onLoginBtnHandler;