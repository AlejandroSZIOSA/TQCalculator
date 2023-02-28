import { StyleSheet,View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

function ResultScreen({navigation,route}){
  const {areaTotal, seedType}=route.params;

  function pressRestartHandler(){
    console.log(areaTotal);
    console.log(seedType);
    navigation.navigate('CalculateSC')
  }

  return(
    <View style={styles.rootContainer}>
      <AreaResultView/>
      <SeedResultView/>
      <SeedTypeView/>
      <PrimaryButton onPress={pressRestartHandler}>Finish</PrimaryButton>
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