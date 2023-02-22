
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
    
    const [isBtnDisabled,setIsBtnDisabled]=useState(false)

    const[operationStatus,setOperationStatus]=useState(0);
    
    /*
        StatusCodes:
        0 = nothing yet
        1 = AreaView is ready
        2 = SelectonZoneView is ready
        3 = All User operations are ready

    */

    const onChangeStatusCode = (currentStatusCode) =>{
        setOperationStatus(currentStatusCode)
        //console.log(currentStatusCode)
    };

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    
    return(
        <View style={styles.rootContainer}>
            <AreaView onChangeStatusCode={onChangeStatusCode}/>
            <SelectionZoneView title="Select a Growing Zone" isPickerDisabled={isPickerZoneDisabled} /> 
            <SelectionSeedView title="Select a Seed Type" isPickerDisabled={isPickerSeedDisabled}/> 
            
            <PrimaryButton onPress={pressHandler} disabled={isBtnDisabled}> Calculate</PrimaryButton>
        </View>
    );    
}
export default CalculationScreen;

const styles=StyleSheet.create({
    rootContainer:{
        margin:10
    },
})