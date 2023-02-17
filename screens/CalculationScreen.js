import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaView from "../components/calculateSection/AreaView";
import SelectionZoneView from "../components/calculateSection/SelectionZoneView";

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
            <SelectionZoneView title="Select a Growing Zone" />       
            <SelectionZoneView title="Select Seed Type"/> 
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