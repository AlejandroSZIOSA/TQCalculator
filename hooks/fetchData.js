import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [seedDbData, setSeedDbData] = useState()

  const fetchData = async () => {
    const res = await fetch(url)
    const seedDbData = await res.json()
    console.log("Fetch data fom db")    
    setSeedDbData(seedDbData.seeds);
  }
  useEffect(() => {
    fetchData()
  }, [])
  return {seedDbData}
}
export default useFetch