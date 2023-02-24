
import { useState } from "react";
import { View,StyleSheet} from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

import Colors from "../constants/colors";
import IntructionText from "../components/calculateSection/IntructionText";

import PickerZone from "../components/picker/PickerZone"
import PickerSeed from "../components/picker/PickerSeed";

import AreaView from "../components/calculateSection/AreaView";

function CalculationScreen({navigation}){
   
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
        console.log(`Operation status: ${currentStatusCode}`)
    };

    function pressHandler(){
        navigation.navigate('ResultSC');
    }
    
    return(
        <View style={styles.rootContainer}>
            <AreaView onChangeStatusCode={onChangeStatusCode}/>
            
            <View style={styles.selectionZoneContainer}>
            {/*Nested Components */}
            <IntructionText title={"Select a Growing Zone"} />
                <PickerZone
                isPickerDisabled={isPickerZoneDisabled}
                selectedZone={"Select a Growing Zone"}
                />
            </View> 

            <View style={styles.selectionSeedContainer}>
            <IntructionText title={"Select a Seed Type"} />
            <PickerSeed 
                isPickerDisabled={isPickerSeedDisabled}
                selectedZone="Select a Seed Type"
                />             
            </View>
            
            <PrimaryButton onPress={pressHandler} disabled={isBtnDisabled}> Calculate</PrimaryButton>
        </View>
    );    
}
export default CalculationScreen;

const styles=StyleSheet.create({
    rootContainer:{
        margin:10
    },
    selectionZoneContainer:{
        backgroundColor: Colors.primaryGreen3,
        marginVertical:10,
        alignItems:'center'
    },
    selectionSeedContainer:{
        backgroundColor: Colors.primaryGreen3,
        marginVertical:10,
        alignItems:'center'
    }
})