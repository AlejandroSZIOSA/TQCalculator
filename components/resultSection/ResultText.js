import { Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function ResultText({title}){
    return <Text style={styles.textTitle}>{title} </Text>
}
export default ResultText;

const styles = StyleSheet.create({
    textTitle:{
        fontSize:36,
        fontWeight:'bold',
        color:Colors.primaryGreen5
    }
})