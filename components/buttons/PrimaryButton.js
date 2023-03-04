import { View,Text, Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

// Login - Restart - Calculate / Primary Buttons 

function PrimaryButton({children,onPress,disabled,style}){
  return (
    <View style={ [styles.buttonContainer,style]}>
      <Pressable onPress={onPress} disabled={disabled}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}
export default PrimaryButton;
const styles=StyleSheet.create({
  buttonContainer: {
    backgroundColor:Colors.primaryLightBlue,
    padding:15,
    borderRadius:15,
    paddingVertical:15,
    paddingHorizontal:16,
    marginHorizontal:100, //fix problem with button size
    margin:10, //fix problem with the border area
    opacity:1
  },
  buttonText:{
    fontSize:20,
    color: Colors.primaryWhite,
    textAlign:'center'
  }
})