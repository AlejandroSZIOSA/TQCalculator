import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// Fetch Seeds + Token Authentication Axios
const fetchSeeds = async (token) => {
  let seedsDb;
  const headers = {'Authorization':'Bearer ' + token}
  try{
    await axios.get(ENDPOINTS.GET_SEEDS,{headers})
      //then fix problem with await!
      .then((res)=>{
        seedsDb = res.data.seeds; //fix problem! Inconsistent object await
      })
    console.warn("Fetch data Success")
    return seedsDb;
  }
  catch (error){
    console.log(error);
    return ([{}]); // Works! App do not crash with errors in array with object is not load!
  }
  finally{
    console.log("Fetch request operation Success!")
  }
}
export default fetchSeeds;