import { useState,useEffect } from "react"
import axios from "axios"

const fetch2 = async(token)=> {
  const [seeds, setSeeds] = useState(null)

  useEffect(() => {
    console.log(token)
    const headers = {'Authorization': token}
    axios.get('http://localhost:8080/seed/seeds',{headers})
        .then(response => setSeeds(response.data))        
  }, [])

  return {seeds}
}
export default fetch2;