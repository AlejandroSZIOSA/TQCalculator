import axios from "axios";

// authenticate Axios Login
const onLoginBtnHandler = async (userKey,logIn,setToken) =>{
  let token;
  const url= 'http://localhost:8080/auth/login'
  try{
  const res = await axios.post(url,userKey);
    logIn(true) //Callback function to CTX (Trigger Switch between Navigators)
    token=(res.data.token)
    //console.log(token)
    //await test(res.data.token)
  }
  catch (error){
    //console.log(error);
    console.warn("Something was wrong!")
  }
  finally{
    console.log("finally");
    //console.log(token);
    setToken(token)
    //test(token)
  }
}
export default onLoginBtnHandler;