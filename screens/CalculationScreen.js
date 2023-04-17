
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
import { resultsReducer,initialStateResults } from "../reducers/calculationSC/finalResults";
import { uiReducer,initialStateUi} from "../reducers/calculationSC/ui";


function CalculationScreen({navigation}) {

  const {token}=useContext(TokenContext)

  //const dbData= ([{}]) //works!
  const [seedsDb,setSeedsDb]= useState()

  //useReducer
  const [stateResults, dispatchResults] = useReducer(resultsReducer,initialStateResults);
  const [stateUi,dispatchUi] = useReducer(uiReducer,initialStateUi);

  //const [isBtnDisabled,setIsBtnDisabled]=useState(true)
  //const [btnOpacity,setBtnOpacity]=useState(0.2)
  //const [isPickerZoneDisabled,setIsPickerZoneDisabled]=useState(true)

  //const [isPickerSeedDisabled,setIsPickerSeedDisabled]=useState(true)

  //const [pickerZoneOpacity,setPickerZoneOpacity]=useState(0.3)
  //const [pickerSeedOpacity,setPickerSeedOpacity]=useState(0.3)

  //const [operationCode,setOperationCode]=useState(0);
  
  const [selectedZone,setSelectedZone]= useState("No Zone Selected"); //TODO
  const [seedWeightSquareMeter,setSeedWeightSquareMeter] = useState(0)

  useLayoutEffect(() => {
    getSeedsDb();
  }, [token]) //Fix rendering problem!

  useEffect(() => {
    const resultTotalSeeds = mathCalculations.calculateTotalSeeds(stateResults.resultArea,seedWeightSquareMeter);
    dispatchResults({type:'ADD_TOTAL_WEIGHT', payload: resultTotalSeeds})
    enablePrimaryBtn();
  }, [stateResults.resultArea,seedWeightSquareMeter,stateResults.productSelected]) //Fix rendering problem!

  async function getSeedsDb(){ //fix problem inconsistent object 
    const data = await fetchSeeds(token) //fix problem inconsistent returned object 
    setSeedsDb(data) 
  } 

  const enablePrimaryBtn = () =>{
    if(stateResults.productSelected != "No Seeds" && selectedZone != "No Zone" && stateResults.resultArea != 0){

      dispatchUi({type:'DISABLED_PRIMARY_BTN', payload:false})
      //setIsBtnDisabled(false)
      dispatchUi({type:'CHANGE_PRIMARY_BTN_OPACITY', payload:1})

      //setBtnOpacity(1)
    }else{
      dispatchUi({type:'DISABLED_PRIMARY_BTN', payload:true})

      //setIsBtnDisabled(true)
      //setBtnOpacity(0.5)
      dispatchUi({type:'CHANGE_PRIMARY_BTN_OPACITY', payload:0.5})
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
        dispatchResults({type:'ADD_TOTAL_AREA', payload: 0})
        dispatchUi({type:'DISABLED_PICKER_CATEGORIES', payload: true})

        //setIsPickerZoneDisabled(true) //fix problem!
        
        dispatchUi({type:'CHANGE_PICKER_CATEGORIES_OPACITY', payload: 0.3})
        //setPickerZoneOpacity(0.3)

        dispatchUi({type:'DISABLED_PICKER_SEEDS', payload: true})
        //setIsPickerSeedDisabled(true) //can be active!

        dispatchUi({type:'CHANGE_PICKER_SEEDS_OPACITY', payload: 0.3})
        //setPickerSeedOpacity(0.3)
        break;
      case 1: 
        //setOperationCode(currentStatusCode);

        dispatchResults({type:'ADD_TOTAL_AREA', payload: selectedData})
        dispatchUi({type:'DISABLED_PICKER_CATEGORIES', payload: false})
        
        //setIsPickerZoneDisabled(false)
        
        dispatchUi({type:'CHANGE_PICKER_CATEGORIES_OPACITY', payload: 1})
        //setPickerZoneOpacity(1)

        dispatchUi({type:'DISABLED_PICKER_SEEDS', payload: false})
        //setIsPickerSeedDisabled(false)

        dispatchUi({type:'CHANGE_PICKER_SEEDS_OPACITY', payload: 1})
        //setPickerSeedOpacity(1)
      break;
      case 2: 
        //setOperationCode(currentStatusCode)
        setSelectedZone(selectedData)
        
        dispatchResults({type:'ADD_PRODUCT_SELECTED', payload: "No Product Selected"}) //fix problem

        dispatchUi({type:'DISABLED_PICKER_SEEDS', payload: false})
        //setIsPickerSeedDisabled(false)
        dispatchUi({type:'CHANGE_PICKER_SEEDS_OPACITY', payload: 1})
        //setPickerSeedOpacity(1)
      break;
      case 3:
        //setOperationCode(currentStatusCode)
        dispatchResults({type:'ADD_PRODUCT_SELECTED', payload: selectedData})

        setSeedWeightSquareMeter(seedWeightData)
      break;
      default: console.log("No operation code");
      };
  };
  
  function onPrimaryBtnHandler(){
    navigation.navigate('ResultSC',{stateResults}); //using Route params
  }

  return(
    <View style={styles.rootContainer}>
      <AreaCalculateView onChangeCurrentOperationCode={changeUserOperationCode}/>
        <View style={styles.selectionZoneContainer}>
          <IntructionText title={"Choose The Right Grass"} />
            {/*Callback functions */}
            <PickerZone
              onChangeCurrentOperationCode={changeUserOperationCode}

              isPickerZoneDisabled={stateUi.isPickerCategoriesDisabled} // TODO
              //onChangePickerDisabled={onChangePickerDisabled}
              style={{opacity:stateUi.pickerCategoriesOpacity}} //Overriding styles
            />
        </View> 
        <View style={styles.selectionSeedContainer}>
          <IntructionText title={"Find Products"} />
            <PickerSeed 
              selectedZone={selectedZone} // A very Nested Prop. problem fixed!
              onChangeCurrentOperationCode={changeUserOperationCode}
              seedDb={seedsDb}// A very Nested Prop. problem fixed!

              isPickerSeedDisabled={stateUi.isPickerSeedDisabled}

              style={{opacity:stateUi.pickerSeedOpacity}} //Overriding styles
            />             
        </View>
        <PrimaryButton
          onPress={onPrimaryBtnHandler}

          disabled={stateUi.isBtnDisabled}

          style= {{opacity:stateUi.btnOpacity}} //Overriding style. fix problem!
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