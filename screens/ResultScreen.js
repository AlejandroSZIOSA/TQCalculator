import { StyleSheet,View } from "react-native";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

function ResultScreen({navigation,route}){
  //route params
  const {areaTotal,seedTotal, seedType}=route.params; 

  function pressRestartHandler(){
    navigation.navigate('CalculateSC')
  }

  return(
    <View style={styles.rootContainer}>
      <AreaResultView areaTotal={areaTotal}/>
      <SeedResultView seedTotal={seedTotal}/>
      <SeedTypeView seedType={seedType}/>
    </View>
  )
}
export default ResultScreen;

const styles = StyleSheet.create({
  rootContainer:{
    //alignContent:'center',
    margin:10,
  },
})