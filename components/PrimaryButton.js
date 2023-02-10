import { View,Text, Pressable,StyleSheet } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({children}){
    function pressHandler(){
        console.log("pressed")
    }
    return (
    <Pressable onPress={pressHandler}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{children}</Text>
        </View>
    </Pressable>
    )
}
export default PrimaryButton;

const styles=StyleSheet.create({
    buttonContainer: {
        backgroundColor:Colors.primaryLightBlue,
        borderRadius:15,
        paddingVertical:15,
        paddingHorizontal:16,
        marginHorizontal:100 //fix problem with button size
    },
    buttonText:{
        fontSize:20,
        color: Colors.primaryWhite,
        textAlign:'center'
    }
})