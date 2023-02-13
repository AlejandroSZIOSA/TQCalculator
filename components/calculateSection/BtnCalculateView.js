import { View,StyleSheet } from "react-native";
import PrimaryButton from "../buttons/PrimaryButton";

function BtnCalculateView({onpress}){
    return(
        <View style={styles.container}>
            <PrimaryButton onPress={onpress}> Calculate </PrimaryButton>
        </View>
    )
}
export default BtnCalculateView;
const styles= StyleSheet.create({
    container:{
        flexDirection:'row-reverse',
        alignContent:'center',
        backgroundColor:'white'
    },
    innerContainer:{
        
    }
})