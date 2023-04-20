import { StyleSheet,View } from "react-native";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

function ResultScreen({navigation,route}){
  //route params
  const {stateResults} = route.params

  function pressRestartHandler(){
    navigation.navigate('CalculateSC')
  }

  return(
    <View style={styles.rootContainer}>
      <AreaResultView areaTotal={stateResults.resultArea}/>
      <SeedResultView seedTotal={stateResults.weightResult}/>
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