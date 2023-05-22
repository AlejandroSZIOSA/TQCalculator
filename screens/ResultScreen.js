import { Image, StyleSheet,View } from "react-native";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

import mathCalculations from "../mathOperations/mCalculate";

function ResultScreen({route}){
  //Route params
  const {stateResults} = route.params; //Destructuring Object
  const [converted,unit] = mathCalculations.convertTotalSeeds(stateResults.weightResult); //Destructuring Array

  return(
    <View style={styles.rootContainer}>
      <AreaResultView areaTotal={stateResults.resultArea}/>
      <SeedResultView 
        seedTotal={converted}
        unit={unit}
      />
      <SeedTypeView seedType={stateResults.productSelected}/>
      <View style={styles.imageProduct}>
        <Image source={require('../assets/productImage.png')} />
      </View>
    </View>
  )
}
export default ResultScreen;

const styles = StyleSheet.create({
  rootContainer:{
    margin:10,
  },
  imageProduct: {
    padding: 35,
    alignItems: 'center',
    opacity:0.5,
  }
})