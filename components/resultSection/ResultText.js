import { Text,StyleSheet } from "react-native";

function ResultText({title}){
    return <Text style={styles.textTitle}>{title} </Text>
}
export default ResultText;

const styles = StyleSheet.create({
    textTitle:{
        fontSize:36,
        fontWeight:'bold',
        color:'white'
    }
})