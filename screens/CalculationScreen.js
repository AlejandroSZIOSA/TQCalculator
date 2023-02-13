import { View,StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import AreaView from "../components/calculateSection/AreaView";
import BtnCalculateView from "../components/calculateSection/BtnCalculateView";
import SelectionView from "../components/calculateSection/SelectionView";

function CalculationScreen({navigation}){

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    return(
        <View >
            <AreaView/>
            <SelectionView title="Select a Growing Zone"/>
            <SelectionView title="Select Seed Type"/>
            <PrimaryButton> Clear all</PrimaryButton>
            <PrimaryButton onPress={pressHandler}> Calculate</PrimaryButton>
        </View>
    );    
}
export default CalculationScreen;
const styles= StyleSheet.create({
    container:{
        alignContent:'center',
        //margin:12
    }

})