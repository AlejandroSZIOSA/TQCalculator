import { StyleSheet,View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaResultView from "../components/resultSection/AreaResultView";
import SeedResultView from "../components/resultSection/SeedResultView";
import SeedTypeView from "../components/resultSection/SeedTypeView";

function ResultScreen({navigation}){
    function pressRestartHandler(){
        navigation.navigate('CalculateSC')
    }
    return(
        <View style={styles.rootContainer}>
            <AreaResultView/>
            <SeedResultView/>
            <SeedTypeView/>
            <PrimaryButton onPress={pressRestartHandler}>Restart</PrimaryButton>
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