import { View, Text,Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

//Reset - Set Buttons
function SecondaryButton({children}){
    return(
        <View style={styles.buttonContainer}>
          <Pressable>
            <Text style={styles.buttonText}> {children} </Text>
          </Pressable>
        </View>
    )
}
export default SecondaryButton;
const styles = StyleSheet.create({
    buttonContainer:{
      backgroundColor:Colors.primaryLightBlue,
      width:96,
      height:33,
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
      alignItems:'center',
    },
    buttonText:{
      color:'white',
      fontSize:24
    }

})