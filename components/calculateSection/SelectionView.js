import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";

function SelectionView({title}){
    return(
        <View style={styles.container}>
            <IntructionText title={title} />
            <SecondaryButton>Reset</SecondaryButton>
        </View>
    )
}
export default SelectionView;

const styles= StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryGreen3,
        margin:10,
        alignItems:'center'
    }
})
