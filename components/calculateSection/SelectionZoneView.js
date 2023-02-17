import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import Picker from "../picker/Picker";
import IntructionText from "./IntructionText";

//Picker data as Prop here
function SelectionZoneView({title}){
    //console.log(title)
    // if title is growing zone
    return(
        <View style={styles.container}>
            {/*Nested Components */}
            <IntructionText title={title} />
                <Picker selectedZone={title}/>
            <SecondaryButton>Reset</SecondaryButton>
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
