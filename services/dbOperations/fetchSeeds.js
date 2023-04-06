import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// Fetch Seeds + Token Authentication Axios
const fetchSeeds = async (token) =>{
  var seedsDb;
  const headers= {'Authorization':'Bearer ' + token}
  try{
    const res = await axios.get(ENDPOINTS.GET_SEEDS,{headers})
    seedsDb = await res.data.seeds; //fix problem! Inconsistent object
  }
  catch (error){
    //console.log(token);
    console.log(error);
    console.warn("Fetch request Failed!")
    return ([{}]); // TODO: must test!
  }
  finally{
    console.warn("Fetch request Success!")
    //console.log(seedsDb)
    return seedsDb;
  }
}
export default fetchSeeds;