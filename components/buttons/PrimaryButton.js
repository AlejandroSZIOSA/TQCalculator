import { View,Text, Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function PrimaryButton({children,onPress}){
    return (
        <View style={styles.buttonContainer}>
          <Pressable onPress={onPress}>
            <Text style={styles.buttonText}>{children}</Text>
          </Pressable>
        </View>
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