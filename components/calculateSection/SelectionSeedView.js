
import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

import PickerSeed from "../picker/PickerSeed";

import IntructionText from "./IntructionText";

import { useContext } from "react";
import DataContext from "../../context/DataContext";

import SecondaryButton from "../buttons/SecondaryButton";

//Picker data as Prop here
function SelectionSeedView({title,isPickerDisabled}){
    //console.log(title)
    // if title is growing zone

    //const {data, changeData} = useContext(DataContext); // passingan object :)
    
    //changeData(2)
    //console.log(data)

    //console.log(context)
    //console.log(isPickerEnabled)
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
