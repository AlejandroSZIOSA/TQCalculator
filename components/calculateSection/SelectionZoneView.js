import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";

import PickerZone from "../picker/PickerZone";
import DataContext from "../../context/DataContext";
import { useContext } from "react";

//Picker data as Prop here
function SelectionZoneView({title,isPickerDisabled}){
    
    const ctx = useContext(DataContext);
    console.log(ctx.isZoneSelected)
    return(
        <View style={styles.container}>
            {/*Nested Components */}
            <IntructionText title={title} />
                <PickerZone
                isPickerDisabled={isPickerDisabled}
                selectedZone={title}
                />
        </View>
    )
}
export default SelectionZoneView;

const styles= StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryGreen3,
        marginVertical:10,
        alignItems:'center'
    }
})
