
import { useState,useEffect } from "react";
import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Colors from "../constants/colors";
import IntructionText from "../components/calculateSection/IntructionText";
import PickerZone from "../components/picker/PickerZone"
import PickerSeed from "../components/picker/PickerSeed";
import AreaCalculateView from "../components/calculateSection/AreaCalculateView";
import mathCalculations from "../mathOperations/mCalculate";

import useFetch from "../hooks/fetchData";


function CalculationScreen({navigation}) {
  //route params
  //const seedDb = route.params.seedDbData; 

  const {dbData} = useFetch('http://localhost:8080/seed/seeds')

  //console.log(seedDb.seeds[1].name); 

  const [isBtnDisabled,setIsBtnDisabled]=useState(true)
  const [btnOpacity,setBtnOpacity]=useState(0.2)

  const [isPickerZoneDisabled,setIsPickerZoneDisabled]=useState(true)
  const [isPickerSeedDisabled,setIsPickerSeedDisabled]=useState(true)

  const [pickerZoneOpacity,setPickerZoneOpacity]=useState(0.3)
  const [pickerSeedOpacity,setPickerSeedOpacity]=useState(0.3)

  const [operationCode,setOperationCode]=useState(0);

  const [selectedZone,setSelectedZone]= useState("No Zone");
  const [resultArea,setResultArea]= useState(0)
  const [resultSeeds,setResultSeeds]= useState(0)
  const [selectedSeed,setSelectedSeed] = useState("No Seeds")
  const [seedWeightSquareMeter,setSeedWeightSquareMeter] = useState(0)

  useEffect(() => {
    const resultTotalSeeds = mathCalculations.calculateTotalSeeds(resultArea,seedWeightSquareMeter);
    setResultSeeds(resultTotalSeeds);
    enablePrimaryBtn();
  }, [resultArea,seedWeightSquareMeter,selectedSeed])

  const enablePrimaryBtn = () =>{
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
    Status User Operations Codes:
    0 = restart area calculation / restart Hooks
    1 = Area Calculation is ready
    2 = Selection Of Growing zone is ready
    3 = All User operations are ready
  */
  const changeUserOperationCode = (currentStatusCode,selectedData,seedWeightData) =>{
    switch(currentStatusCode){
      case 0:
        setResultArea(0)
        setIsPickerZoneDisabled(true) //fix problem!
        setPickerZoneOpacity(0.3)
        
        setIsPickerSeedDisabled(true) //can be active!
        setPickerSeedOpacity(0.3)
        break;
      case 1: 
        setOperationCode(currentStatusCode);
        setResultArea(selectedData)
        setIsPickerZoneDisabled(false)
        setPickerZoneOpacity(1)

        setIsPickerSeedDisabled(false)
        setPickerSeedOpacity(1)
      break;
      case 2: 
        setOperationCode(currentStatusCode)
        setSelectedZone(selectedData)
        setSelectedSeed("No Seeds") //fix problem
        setIsPickerSeedDisabled(false)
        setPickerSeedOpacity(1)
      break;
      case 3:
        setOperationCode(currentStatusCode)
        setSelectedSeed(selectedData)
        setSeedWeightSquareMeter(seedWeightData)
      break;
      default: console.log("No operation code");
      };
  };
  
  function onPrimaryBtnHandler(){
    //using Route params
    navigation.navigate('ResultSC',{
      areaTotal: resultArea,
      seedTotal: resultSeeds, //Total seeds need it.
      seedType: selectedSeed,
    });
  }

  return(
    <View style={styles.rootContainer}>
      <AreaCalculateView onChangeCurrentOperationCode={changeUserOperationCode}/>
        <View style={styles.selectionZoneContainer}>
          <IntructionText title={"Select a Growing Zone"} />
            {/*Callback functions */}
            <PickerZone
              onChangeCurrentOperationCode={changeUserOperationCode}

              isPickerZoneDisabled={isPickerZoneDisabled}
              //onChangePickerDisabled={onChangePickerDisabled}

              style={{opacity:pickerZoneOpacity}} //Overriding styles
            />
        </View> 
        <View style={styles.selectionSeedContainer}>
          <IntructionText title={"Select a Seed Type"} />
            <PickerSeed 
              selectedZone={selectedZone} // A very Nested Prop. problem fixed!
              onChangeCurrentOperationCode={changeUserOperationCode}

              seedDb={dbData}// A very Nested Prop. problem fixed!

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