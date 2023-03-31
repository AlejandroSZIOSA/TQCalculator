import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

// authenticate Axios Login
const onLoginBtnHandler = async (userKey,logIn) =>{
  const url= 'http://localhost:8080/auth/login'
  try{
    const res = await axios.post(url,userKey);
    logIn(res.data.token) //Callback function to CTX (Trigger Switch between Navigators)
  }
  catch (error){
    console.log(error);
    console.warn("Something was wrong!")
  }
}
export default onLoginBtnHandler;