import axios from "axios";

// authenticate Axios Login
const onLoginBtnHandler = async (userKey,logIn,setToken) =>{
  let token;
  const URL='http://localhost:8080/auth/login'
  try{
  const res = await axios.post(URL,userKey);
    logIn(true) //Callback function to CTX (Trigger Switch between Navigators)
    token=(res.data.token)
  }
  catch (error){
    console.log(error);
    console.warn("Something was wrong!")
  }
  finally{
    console.log("LogIn successful");
    setToken(token)
  }
}
export default onLoginBtnHandler;