import { StyleSheet,View } from "react-native";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

import mathCalculations from "../mathOperations/mCalculate";

import { useEffect } from "react";

function ResultScreen({route}){
  //route params
  const {stateResults} = route.params;//destructive Obj
  const [converted,unit] = mathCalculations.convertTotalSeeds(stateResults.weightResult);//destructive array

  
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