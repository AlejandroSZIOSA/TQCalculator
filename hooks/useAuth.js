import axios from "axios";
import { useState,useEffect } from "react";

function useAuth(obj){
  //TODO: CHECK THIS!


  const [token,setToken]= useState(false)

  const url= 'http://localhost:8080/auth/login'

  const getUserAuth = async () => {
    try{
      const res = await axios.post(url,obj)
      console.log(res.data.token);
  
      } catch (error) {
        console.log(error);
      }
    }   
    
    useEffect(() => {
      getUserAuth();
    }, [obj]); // execute once only
    
    return {token};
  }
export default useAuth;