import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// authenticate Axios Login
const onLoginBtnHandler = async (userKey,logIn,setToken) =>{
  let token;
  try{
  const res = await axios.post(ENDPOINTS.POST_USER,userKey);
    logIn(true) //Callback function to CTX (Trigger Switch between Navigators)
    token = res.data.token // TODO: testa await 
  }
  catch (error){
    console.log(error);
    console.warn("LogIn request Failed!")
  }
  finally{
    console.log("LogIn request successful");
    setToken(token)
  }
}
export default onLoginBtnHandler;