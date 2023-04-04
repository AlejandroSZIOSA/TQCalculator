import axios from "axios";

// authenticate Axios Login
const setUserSignUp = async (newUser) =>{
  
  const URL= 'http://localhost:8080/auth/signup'
  try{
    await axios.put( URL, newUser)  
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