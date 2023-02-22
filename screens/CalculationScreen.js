
import { useState } from "react";
import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

import SelectionSeedView from "../components/calculateSection/SelectionSeedView";
import SelectionZoneView from "../components/calculateSection/SelectionZoneView";


import AreaView from "../components/calculateSection/AreaView";

function CalculationScreen({navigation}){
    //Area calculation Section
   
 
    //selection sections
    const [isPickerZoneDisabled,setIsPickerZoneDisabled]=useState(false)
    const [isPickerSeedDisabled,setIsPickerSeedDisabled]=useState(false)
    
    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    // picker data here as Prop
    // Nested Components
    
    return(
        <View style={styles.rootContainer}>
            <AreaView/>
            <SelectionZoneView title="Select a Growing Zone" isPickerDisabled={isPickerZoneDisabled} /> 
            <SelectionSeedView title="Select Seed Type" isPickerDisabled={isPickerSeedDisabled}/> 
            
            <PrimaryButton onPress={pressHandler}> Calculate</PrimaryButton>
        </View>
    );    
}
export default CalculationScreen;

const styles=StyleSheet.create({
    rootContainer:{
        margin:10
    },
})