import axios from "axios";

function useAuth(obj){
  
  var token = false;
  const url= 'http://localhost:8080/auth/login'

  const getUserAuth = async () => {
    try{
      const res = await axios.post(url,obj)
      console.log(res.data.token);
      token = true;
      } catch (error) {
        console.log(error);
      }
    }    
    return token;
}
export default useAuth;