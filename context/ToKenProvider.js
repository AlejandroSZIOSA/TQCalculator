import { useState } from "react";
import { TokenContext } from "./TokenContext";

export const TokenProvider = ({children}) =>{
  const[token,setToken]= useState("")

  const value ={
    token,
    setToken:(x)=>setToken(x)
  }
  
  return(
    <TokenContext.Provider value={value}>
    {children}
    </TokenContext.Provider>
    );
}
