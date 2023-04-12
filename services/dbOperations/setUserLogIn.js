import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// Authenticate Axios User Login
const onLoginBtnHandler = async (userKey,logIn,setToken) =>{
  try{
  const res = await axios.post(ENDPOINTS.POST_USER,userKey)
    .then((res) =>{
      const token = res.data.token // TODO: testa await 
      logIn(true) //Callback function to CTX (Trigger Switch between Navigators)
      setToken(token) //callBack function
      console.log("LogIn request successful");
    })
  }
  catch (error){
    console.log(error);
    console.warn("LogIn request Failed!")
  }
  finally{
    console.log("LogIn operation successful");
  }
}
export default onLoginBtnHandler;