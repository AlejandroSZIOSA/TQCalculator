import { StyleSheet,View } from "react-native";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

import mathCalculations from "../mathOperations/mCalculate";


function ResultScreen({route}){
  //route params
  const {stateResults} = route.params; //Destructive Obj
  const [converted,unit] = mathCalculations.convertTotalSeeds(stateResults.weightResult); //Destructive array

  
  return(
    <View style={styles.rootContainer}>
      <AreaResultView areaTotal={stateResults.resultArea}/>
      <SeedResultView 
        seedTotal={converted}
        unit={unit}
      />
      <SeedTypeView seedType={stateResults.productSelected}/>
    </View>
  )
}
export default ResultScreen;

const styles = StyleSheet.create({
  rootContainer:{
    margin:10,
  },
})