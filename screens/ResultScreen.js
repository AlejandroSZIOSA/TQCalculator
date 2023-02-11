import { StyleSheet,Text,View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";
import ResultText from "../components/ui/ResultText";

function ResultScreen({navigation}){
    function pressRestartHandler(){
        navigation.navigate('CalculateSC')
    }
    return(
        <View>
            <ResultText title="For"/>
            <PrimaryButton onPress={pressRestartHandler}>Restart</PrimaryButton>
        </View>
    )
}
export default ResultScreen;
const style = StyleSheet.create({
})