import { useState } from "react";
import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import Picker from "../picker/PickerZone";
import IntructionText from "./IntructionText";

//Picker data as Prop here
function SelectionSeedView({title}){
    //console.log(title)
    // if title is growing zone
    return(
        <View style={styles.container}>
            {/*Nested Components */}
            <IntructionText title={title} />
            <SecondaryButton >Reset</SecondaryButton>
        </View>
    )
}
export default SelectionSeedView;

const styles= StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryGreen3,
        marginVertical:10,
        alignItems:'center'
    }
})
