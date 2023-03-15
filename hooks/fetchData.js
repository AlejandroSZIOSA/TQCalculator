import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [dbData, setDbData] = useState([{}]) //App no more crashes now! default values
  //const [error, setError] = useState(null)

  const fetchData = async () => {
    //todo: Validation errors 

    const res = await fetch(url)
    const data = await res.json()
    console.log("Succeed Fetched data from db!")    
    setDbData(data.seeds); //works!
    
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => setSeedDbData(data.seeds))
    //   .catch((error) => {setError(error)})
    //   .finally(() => console.log(error))

  }
  useEffect(() => {
    fetchData()
  }, []);
  return {dbData};
}
export default useFetch