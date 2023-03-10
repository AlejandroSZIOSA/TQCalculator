import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState();

  const fetchData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setData=data
  }
  useEffect(() => {
    fetchData()
  }, [])
return data;
}
export default useFetch;