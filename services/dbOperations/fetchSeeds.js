import axios from "axios";
import ENDPOINTS from "../../constants/endPoints";

// Fetch Seeds + Token Authentication Axios
const fetchSeeds = async (token) =>{
  var seedsDb;
  const headers= {'Authorization':'Bearer ' + token}
  try{
    const res = await axios.get(ENDPOINTS.GET_SEEDS,{headers})
      //then fix problem with await!
      .then((res)=>{
        seedsDb = res.data.seeds; //fix problem! Inconsistent object await
      })
    console.warn("Fetch data Success")
    return seedsDb;
  }
  catch (error){
    //console.log(token);
    console.log(error);
    console.warn(error.message)
    return ([{}]); // TODO: must test!
  }
  finally{
    console.log("Fetch request operation Success!")
    //console.log(seedsDb)
    
  }
}
export default fetchSeeds;