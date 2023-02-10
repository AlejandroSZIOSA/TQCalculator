import { StyleSheet, View,Text } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import CalculateArea from "../components/calculationSections/CalculateArea";

function CalculationScreen({navigation}){

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    return(
        <View>
            <CalculateArea/>
            <PrimaryButton onPress={pressHandler}> Calculate </PrimaryButton>
        </View>
        

    );
    
}
export default CalculationScreen;

const style = StyleSheet.create({

})