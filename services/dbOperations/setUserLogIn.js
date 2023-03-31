import { AuthContext } from "../../context/AuthContext";
import { TokenContext } from "../../context/TokenContext";

import axios from "axios";
import { useContext } from "react";

// authenticate Axios Login
const onLoginBtnHandler = async (userKey,logIn,setToken) =>{

  const url= 'http://localhost:8080/auth/login'
  try{
    const res = await axios.post(url,userKey);
    logIn(res.data.token) //Callback function to CTX (Trigger Switch between Navigators)
  }
  catch (error){
    console.log(error);
    console.warn("Something was wrong!")
  }
  finally{
    setToken(3)
  }
}
export default onLoginBtnHandler;