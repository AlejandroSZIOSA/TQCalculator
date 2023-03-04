import { View, Text,Pressable,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

//Reset - Set / Secondary Buttons

function SecondaryButton({children,onPress,disabled,style}){
  return(
    <View style={[styles.buttonContainer,style]}>
      <Pressable onPress={onPress} disabled={disabled}>
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
    opacity:1,
  },
  buttonText:{
    //color:{disabled:false ? 'red' : 'blue'},
    color:'white',
    fontSize:24
  }
})