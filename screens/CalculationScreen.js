import { StyleSheet, View,Text } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import Area from "../components/calculateSections/Area";
import Selection from "../components/calculateSections/Selection";

function CalculationScreen({navigation}){

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    return(
        <View>
            <Area/>
            <Selection title="Select a Growing Zone"/>
            <Selection title="Select Seed Type"/>
            <PrimaryButton onPress={pressHandler}> Calculate </PrimaryButton>
        </View>
    );    
}
export default CalculationScreen;

const style = StyleSheet.create({

})