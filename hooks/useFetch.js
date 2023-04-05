// This CUSTOM HOOK IS NOT WORKING!
//TODO: Custom HOOK can not return and retrieve hooks correctly
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [dbData, setDbData] = useState([{}]) //App no more crashes now! default values
  //const [error, setError] = useState(null)
  
  const fetchData = async () => {
    //todo: Validation errors 
      const res = await fetch(url)
      const data = await res.json()
      console.log("Success Fetched data from db!")    
      setDbData(data.seeds); //works!
  }
  useEffect(() => {
    fetchData()
  }, []);
  
  return {dbData};
}
export default useFetch