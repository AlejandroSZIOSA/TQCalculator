import { StyleSheet,Text,View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

function ResultScreen({navigation}){
    function pressRestartHandler(){
        navigation.navigate('CalculateSC')
    }
    return(
        <View>
            <Text> Results </Text>
            <PrimaryButton onPress={pressRestartHandler}>Restart</PrimaryButton>
        </View>
    )

}
export default ResultScreen;

const style = StyleSheet.create({
})