
import { useState,useEffect,useContext,useLayoutEffect,useReducer } from "react";
import { View,StyleSheet} from "react-native";

import Colors from "../constants/colors";
import IntructionText from "../components/calculateSection/IntructionText";

import PickerCategory from "../components/picker/PickerCategory";
import PickerSeed from "../components/picker/PickerSeed";

import AreaCalculateView from "../components/calculateSection/AreaCalculateView";
import mathCalculations from "../mathOperations/mCalculate";

import PrimaryButton from "../components/buttons/PrimaryButton";
//CTX
import { TokenContext } from "../context/TokenContext";
//Axios
import fetchSeeds from "../services/dbOperations/fetchSeeds";
//Reducers
import { resultsReducer,initialStateResults } from "../reducers/calculationSC/finalResults";
import { uiReducer,initialStateUi} from "../reducers/calculationSC/ui";

function CalculationScreen({navigation}) {
  const {token}=useContext(TokenContext)
  //const dbData= ([{}]) //works!
  const [seedsDb,setSeedsDb]= useState()
  //Reducer
  const [stateResults, dispatchResults] = useReducer(resultsReducer,initialStateResults);
  const [stateUi,dispatchUi] = useReducer(uiReducer,initialStateUi);
  //Hooks
  const [selectedCategory,setSelectedCategory]= useState("No Category Selected");
  const [seedWeightSquareMeter,setSeedWeightSquareMeter] = useState(0)

  useLayoutEffect(() => {
    getSeedsDb();
  },[token]) //Fix rendering problem!

  useEffect(() => {
    const totalSeedsWeight = mathCalculations.calculateTotalSeeds(stateResults.resultArea,seedWeightSquareMeter);
    dispatchResults({type:'ADD_TOTAL_WEIGHT', payload: totalSeedsWeight})
    enablePrimaryBtn();
  }, [stateResults.resultArea,stateResults.productSelected]) //Fix rendering problem!
    
  async function getSeedsDb(){ //fix problem inconsistent object 
    const data = await fetchSeeds(token) //fix problem inconsistent returned object 
    setSeedsDb(data) 
  } 

  const enablePrimaryBtn = () =>{
    //in test!
    if(stateResults.productSelected!=="No Product Selected" && selectedCategory!=="No Category Selected" && stateResults.resultArea!==0){
      dispatchUi({type:'DISABLED_PRIMARY_BTN', payload:false})
      dispatchUi({type:'CHANGE_PRIMARY_BTN_OPACITY', payload:1})
    }else{
      dispatchUi({type:'DISABLED_PRIMARY_BTN', payload:true})
      dispatchUi({type:'CHANGE_PRIMARY_BTN_OPACITY', payload:0.5})
    }
  }

  function onPrimaryBtnHandler(){
    navigation.navigate('ResultSC',{stateResults}); //using Route params
  }

  /*  Callback Function:
    Status User Operations Codes:
    0 = restart area calculation 
    1 = Area Calculation is ready
    2 = Selection Of Category is ready
    3 = Selection Of Product is ready
  */
  const changeUserOperationCode = (currentStatusCode,selectedData,seedWeightData) =>{
    switch(currentStatusCode){
      case 0:  
        dispatchResults({type:'ADD_TOTAL_AREA', payload: 0})
        dispatchUi({type:'DISABLED_PICKER_CATEGORIES', payload: true}) //fix problem!
        dispatchUi({type:'CHANGE_PICKER_CATEGORIES_OPACITY', payload: 0.3})
        dispatchUi({type:'DISABLED_PICKER_SEEDS', payload: true}) //can be active!
        dispatchUi({type:'CHANGE_PICKER_SEEDS_OPACITY', payload: 0.3})
        break;
      case 1:
        dispatchResults({type:'ADD_TOTAL_AREA', payload: selectedData})
        dispatchUi({type:'DISABLED_PICKER_CATEGORIES', payload: false})
        dispatchUi({type:'CHANGE_PICKER_CATEGORIES_OPACITY', payload: 1})
        dispatchUi({type:'DISABLED_PICKER_SEEDS', payload: false})
        dispatchUi({type:'CHANGE_PICKER_SEEDS_OPACITY', payload: 1})
      break;
      case 2: 
        setSelectedCategory(selectedData)
        dispatchResults({type:'ADD_PRODUCT_SELECTED', payload: "No Product Selected"}) //fix problem
        dispatchUi({type:'DISABLED_PICKER_SEEDS', payload: false})
        dispatchUi({type:'CHANGE_PICKER_SEEDS_OPACITY', payload: 1})
      break;
      case 3:
        dispatchResults({type:'ADD_PRODUCT_SELECTED', payload: selectedData})
        setSeedWeightSquareMeter(seedWeightData)
      break;
      default: console.log("No operation code");
      };
  };

  return(
    <View style={styles.rootContainer}>
      <AreaCalculateView onChangeCurrentOperationCode={changeUserOperationCode}/>
        <View style={styles.selectionZoneContainer}>
          <IntructionText title={"Choose The Right Grass"} />
            {/*Callback functions */}
            <PickerCategory //TODO:change name!
              onChangeCurrentOperationCode={changeUserOperationCode}
              isPickerCategoryDisabled={stateUi.isPickerCategoriesDisabled} 
              style={{opacity:stateUi.pickerCategoriesOpacity}} //Overriding styles
            />
        </View> 
        <View style={styles.selectionSeedContainer}>
          <IntructionText title={"Find Products"} />
            <PickerSeed 
              selectedCategory={selectedCategory} // A very Nested Prop. problem fixed!
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