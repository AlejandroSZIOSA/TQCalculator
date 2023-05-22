import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

//Fetch Seeds + Token Authentication Axios
const fetchSeeds = async (token) => {
  let seedsDb;
  const headers = {'Authorization':'Bearer ' + token}
  try{
    await axios.get(ENDPOINTS.GET_SEEDS,{headers})
      .then((res)=>{
        seedsDb = res.data.seeds; //Fix problem! Inconsistent object await
      })
    console.warn("Fetch data Success!")
    return seedsDb;
  }
  catch (error){
    console.log(error);
    return ([{}]); //Works! App do not crash
  }
  finally{
    console.log("Fetch request operation Success!")
  }
}
export default fetchSeeds;