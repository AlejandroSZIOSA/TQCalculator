import { StyleSheet, View,Text } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaSection from "../components/calculateSection/AreaSection";

function CalculationScreen({navigation}){

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    return(
        <View>
            <AreaSection/>
            <PrimaryButton onPress={pressHandler}> Calculate </PrimaryButton>
        </View>
    );
    
}
export default CalculationScreen;

const style = StyleSheet.create({

})