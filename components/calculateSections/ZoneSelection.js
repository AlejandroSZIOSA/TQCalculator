import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "../ui/IntructionText";

function ZoneSelection({title}){
    return(
        <View style={styles.container}>
            <IntructionText title="Select A Growing Zone"/>
            <SecondaryButton>Reset</SecondaryButton>
        </View>
    )
}
export default ZoneSelection;

const styles= StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryGreen3

    }

})
