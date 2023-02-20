import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaView from "../components/calculateSection/AreaView";
import SelectionSeedView from "../components/calculateSection/SelectionSeedView";
import SelectionZoneView from "../components/calculateSection/SelectionZoneView";

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
            <SelectionSeedView title="Select Seed Type"/> 
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