import { createContext,useState } from "react"

//TODO: CHECK THIS!
export const TokenContext = createContext({token:"", changeToken:()=>{}})

export default TokenProvider = ({children}) =>{
    const [token,setToken] = useState("")
    const value = {
      token,
      changeToken:(t)=> setToken(t)
    }
    return(
      <TokenContext.TokenProvider value = {value}>
        {children}
      </TokenContext.TokenProvider>)
  }