import axios from "axios";

// Fetch + Token Axios
const fetchSeeds = async (token) =>{
  const URL = 'http://localhost:8080/seed/seeds'
  var seedsDb;
  const headers= {'Authorization':'Bearer ' + token}
  
  try{
    const res = await axios.get(URL,{headers})
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