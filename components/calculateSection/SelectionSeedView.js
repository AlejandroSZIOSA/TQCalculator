
import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

import PickerSeed from "../picker/PickerSeed";

import IntructionText from "./IntructionText";

//Picker data as Prop here
function SelectionSeedView({title}){
    //console.log(title)
    // if title is growing zone
    return(
        <View style={styles.container}>
            {/*Nested Components */}
            <IntructionText title={title} />
            <PickerSeed/>
            
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
