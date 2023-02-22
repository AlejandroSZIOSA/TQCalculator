
import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

import PickerSeed from "../picker/PickerSeed";

import IntructionText from "./IntructionText";

import SecondaryButton from "../buttons/SecondaryButton";
import { useContext } from "react";

//Picker data as Prop here
function SelectionSeedView({title,isPickerDisabled}){
    

    return(
        <View style={styles.container}>
            {/*Nested Components */}
            <IntructionText title={title} />
            <PickerSeed isPickerDisabled={isPickerDisabled}/>
            <SecondaryButton />
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
