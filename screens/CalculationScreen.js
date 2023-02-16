import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaView from "../components/calculateSection/AreaView";
import SelectionView from "../components/calculateSection/SelectionView";
function CalculationScreen({navigation}){

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    // picker data here as Prop
    //components inside a components
    return(
        <View style={styles.rootContainer}>
            <AreaView/>
            <SelectionView title="Select a Growing Zone"/>       
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