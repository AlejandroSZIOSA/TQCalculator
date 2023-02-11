import { StyleSheet, View,Text } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Area from "../components/calculateSections/Area";
import ZoneSelection from "../components/calculateSections/ZoneSelection";

function CalculationScreen({navigation}){

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    return(
        <View>
            <Area/>
            <ZoneSelection title="Select a Growing Zone"/>
            <PrimaryButton onPress={pressHandler}> Calculate </PrimaryButton>
        </View>
    );
    
}
export default CalculationScreen;

const style = StyleSheet.create({

})