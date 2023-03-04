
import { useState,useEffect } from "react";
import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

import Colors from "../constants/colors";
import IntructionText from "../components/calculateSection/IntructionText";

import PickerZone from "../components/picker/PickerZone"
import PickerSeed from "../components/picker/PickerSeed";

import AreaCalculateView from "../components/calculateSection/AreaCalculateView";
import mathCalculations from "../operations/mathCalculations";

//All these Variables will be passed as Route.params to the "Result Screen" 

function CalculationScreen({navigation}){

  const [isBtnDisabled,setIsBtnDisabled]=useState(true)
  const [btnOpacity,setBtnOpacity]=useState(0.5)

  const [operationStatus,setOperationStatus]=useState(0);
  const [selectedZone,setSelectedZone]= useState("No Zone");
  const [resultArea,setResultArea]= useState(0)
  const [resultSeeds,setResultSeeds]= useState(0)
  const [selectedSeed,setSelectedSeed] = useState("No Seeds")
  const [seedWeightSquareMeter,setSeedWeightSquareMeter] = useState(0)

  useEffect(() => {
    const data = mathCalculations.calculateTotalSeeds(resultArea,seedWeightSquareMeter);
    setResultSeeds(data);
    //setSelectedSeed("No Seeds")
    activePrimaryBtn();
  }, [resultArea,seedWeightSquareMeter,selectedSeed])

  const activePrimaryBtn = () =>{
    if(selectedSeed != "No Seeds" && selectedZone != "No Zone" && resultArea != 0){
      //console.log("no");
      setIsBtnDisabled(false)
      setBtnOpacity(1)
    }else{
      setIsBtnDisabled(true)
      setBtnOpacity(0.5)
    }
  }

  /*  Callback Function:
    Status Operations Codes:
    0 = restart area calculation
    1 = Area Calculation is ready
    2 = Selection Of Growing zone is ready
    3 = All User operations are ready
  */
  const onChangeStatusCode = (currentStatusCode,selectedData,seedWeightData) =>{
    switch(currentStatusCode){
      case 0:
        setResultArea(0)
        //console.log(`Operation code (${currentStatusCode}) + ${selectedData}`);
        break;
      case 1: 
        setOperationStatus(currentStatusCode);
        setResultArea(selectedData)
        //console.log(`Operation Area status: ${currentStatusCode}`);
        //console.log(resultArea);
      break;
      case 2: 
        setOperationStatus(currentStatusCode)
        setSelectedZone(selectedData)
        setSelectedSeed("No Seeds") //fix problem
        //console.log(`Operation Zone status: ${currentStatusCode}`);
        //console.log(selectedZone);
      break;
      case 3:
        setOperationStatus(currentStatusCode)
        setSelectedSeed(selectedData)
        setSeedWeightSquareMeter(seedWeightData)
        
        //console.log(`Operation Seed status: ${currentStatusCode}`);
        //console.log(selectedData);
        //console.log(seedWeightSquareMeter);
        //console.log(resultSeeds);
        //console.log(resultArea);
        //console.log(selectedSeed);
      break;
      default: console.log("No operation code");
      };
  };

  //console.log(operationStatus)
  
  function onPrimaryBtnHandler(){
    navigation.navigate('ResultSC',{
      areaTotal: resultArea,
      seedTotal: resultSeeds, //Total seeds need it.
      seedType: selectedSeed,
    });
  }

  return(
    <View style={styles.rootContainer}>
      <AreaCalculateView onChangeStatusCode={onChangeStatusCode}/>
        <View style={styles.selectionZoneContainer}>
          <IntructionText title={"Select a Growing Zone"} />
            <PickerZone
              //isPickerDisabled={isPickerZoneDisabled}
              onChangeStatusCode={onChangeStatusCode}
            />
        </View> 
        <View style={styles.selectionSeedContainer}>
          <IntructionText title={"Select a Seed Type"} />
            <PickerSeed 
              selectedZone={selectedZone} // A very Nested Prop. fix problem!
              onChangeStatusCode={onChangeStatusCode}
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