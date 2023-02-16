import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaView from "../components/calculateSection/AreaView";
import SelectionView from "../components/calculateSection/SelectionView";

import { ZONE } from "../data/dummy-data";
function CalculationScreen({navigation}){
    //console.log(ZONE)

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    // picker data here as Prop
    // Nested Components 
    return(
        <View style={styles.rootContainer}>
            <AreaView/>
            <SelectionView title="Select a Growing Zone" />       
            <SelectionView title="Select Seed Type"/> 
            <PrimaryButton onPress={pressHandler}> Calculate</PrimaryButton>
        </View>
    );    
}
export default CalculationScreen;

const styles=StyleSheet.create({
    rootContainer:{
        margin:10
    }
})