
import { useState,useEffect,useContext,useLayoutEffect,useReducer } from "react";
import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Colors from "../constants/colors";
import IntructionText from "../components/calculateSection/IntructionText";
import PickerZone from "../components/picker/PickerZone"
import PickerSeed from "../components/picker/PickerSeed";
import AreaCalculateView from "../components/calculateSection/AreaCalculateView";
import mathCalculations from "../mathOperations/mCalculate";
//CTX
import { TokenContext } from "../context/TokenContext";
//Axios
import fetchSeeds from "../services/dbOperations/fetchSeeds";
// useReducer
import { resultsReducer,initialState } from "../hooks/resultUseReducer";

function CalculationScreen({navigation}) {

  const {token}=useContext(TokenContext)

  //const dbData= ([{}]) //works!
  const [seedsDb,setSeedsDb]= useState()

  //useReducer
  const [stateResults, dispatch] = useReducer(resultsReducer,initialState);

  const [isBtnDisabled,setIsBtnDisabled]=useState(true)
  const [btnOpacity,setBtnOpacity]=useState(0.2)

  const [isPickerZoneDisabled,setIsPickerZoneDisabled]=useState(true)
  const [isPickerSeedDisabled,setIsPickerSeedDisabled]=useState(true)

  const [pickerZoneOpacity,setPickerZoneOpacity]=useState(0.3)
  const [pickerSeedOpacity,setPickerSeedOpacity]=useState(0.3)

  const [operationCode,setOperationCode]=useState(0);
  

  const [selectedZone,setSelectedZone]= useState("No Zone Selected");
  const [seedWeightSquareMeter,setSeedWeightSquareMeter] = useState(0)

  useLayoutEffect(() => {
    getSeedsDb();
  }, [token]) //Fix rendering problem!

  useEffect(() => {
    const resultTotalSeeds = mathCalculations.calculateTotalSeeds(stateResults.resultArea,seedWeightSquareMeter);
    dispatch({type:'ADD_TOTAL_WEIGHT', payload: resultTotalSeeds})
    enablePrimaryBtn();
  }, [stateResults.resultArea,seedWeightSquareMeter,stateResults.productSelected]) //Fix rendering problem!

  async function getSeedsDb(){ //fix problem inconsistent object 
    const data = await fetchSeeds(token) //fix problem inconsistent returned object 
    setSeedsDb(data) 
  } 

  const enablePrimaryBtn = () =>{
    if(stateResults.productSelected != "No Seeds" && selectedZone != "No Zone" && stateResults.resultArea != 0){
      setIsBtnDisabled(false)
      setBtnOpacity(1)
    }else{
      setIsBtnDisabled(true)
      setBtnOpacity(0.5)
    }
  }
  /*  Callback Function:
    Status User Operations Codes:
    0 = restart area calculation / restart Hooks
    1 = Area Calculation is ready
    2 = Selection Of Growing zone is ready
    3 = All User operations are ready
  */
  const changeUserOperationCode = (currentStatusCode,selectedData,seedWeightData) =>{
    switch(currentStatusCode){
      case 0:  
        dispatch({type:'ADD_TOTAL_AREA', payload: 0})

        setIsPickerZoneDisabled(true) //fix problem!
        setPickerZoneOpacity(0.3)
        setIsPickerSeedDisabled(true) //can be active!
        setPickerSeedOpacity(0.3)
        break;
      case 1: 
        setOperationCode(currentStatusCode);
        dispatch({type:'ADD_TOTAL_AREA', payload: selectedData})
        
        setIsPickerZoneDisabled(false)
        setPickerZoneOpacity(1)

        setIsPickerSeedDisabled(false)
        setPickerSeedOpacity(1)
      break;
      case 2: 
        setOperationCode(currentStatusCode)
        setSelectedZone(selectedData)

        dispatch({type:'ADD_PRODUCT_SELECTED', payload: "No Product Selected"}) //fix problem
        
        setIsPickerSeedDisabled(false)
        setPickerSeedOpacity(1)
      break;
      case 3:
        setOperationCode(currentStatusCode)
        dispatch({type:'ADD_PRODUCT_SELECTED', payload: selectedData})

        setSeedWeightSquareMeter(seedWeightData)
      break;
      default: console.log("No operation code");
      };
  };
  
  function onPrimaryBtnHandler(){
    //using Route params
    navigation.navigate('ResultSC',{stateResults});
  }

  return(
    <View style={styles.rootContainer}>
      <AreaCalculateView onChangeCurrentOperationCode={changeUserOperationCode}/>
        <View style={styles.selectionZoneContainer}>
          <IntructionText title={"Choose The Right Grass"} />
            {/*Callback functions */}
            <PickerZone
              onChangeCurrentOperationCode={changeUserOperationCode}

              isPickerZoneDisabled={isPickerZoneDisabled}
              //onChangePickerDisabled={onChangePickerDisabled}

              style={{opacity:pickerZoneOpacity}} //Overriding styles
            />
        </View> 
        <View style={styles.selectionSeedContainer}>
          <IntructionText title={"Find Products"} />
            <PickerSeed 
              selectedZone={selectedZone} // A very Nested Prop. problem fixed!
              onChangeCurrentOperationCode={changeUserOperationCode}

              seedDb={seedsDb}// A very Nested Prop. problem fixed!

              isPickerSeedDisabled={isPickerSeedDisabled}
              style={{opacity:pickerSeedOpacity}} //Overriding styles
            />             
        </View>
        <PrimaryButton
          onPress={onPrimaryBtnHandler}
          disabled={isBtnDisabled}
          style= {{opacity:btnOpacity}} //Overriding style. fix problem!
        > Calculate</PrimaryButton>
    </View>
  );    
}
export default CalculationScreen;

const styles=StyleSheet.create({
  rootContainer:{
    margin:10
  },
  selectionZoneContainer:{
    backgroundColor: Colors.primaryGreen3,
    marginVertical:10,
    alignItems:'center'
  },
  selectionSeedContainer:{
    backgroundColor: Colors.primaryGreen3,
    marginVertical:10,
    alignItems:'center'
  },
})