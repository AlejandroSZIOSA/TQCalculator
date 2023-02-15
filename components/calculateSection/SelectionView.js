import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import Picker from "../picker/Picker";
import IntructionText from "./IntructionText";

function SelectionView({title}){
    return(
        <View style={styles.container}>
            {/*component inside a component */}
            <IntructionText title={title} />
            <Picker/>
            <SecondaryButton>Reset</SecondaryButton>
        </View>
    )
}
export default SelectionView;

const styles= StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryGreen3,
        marginVertical:10,
        alignItems:'center'
    }
})
