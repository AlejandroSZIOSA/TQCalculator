import axios from "axios";

// authenticate Axios Login
const setUserSignUp = async (newUser) =>{
  
  const URL= 'http://localhost:8080/auth/signup'
  try{
  const res = await axios.put( URL, newUser)
    //logIn(true) //Callback function to CTX (Trigger Switch between Navigators)
    //token=(res.data.token)
    //console.log(token)
    //await test(res.data.token)
  }
  catch (error){
    //console.log(error);
    console.warn("Something was wrong!-----")
  }
  finally{
    console.log("A new user has been created");
    //console.log(token);
    //setToken(token)
    //test(token)
  }
}
export default setUserSignUp;