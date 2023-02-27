import { TextInput, View,StyleSheet } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";

function LoginScreen({navigation}){
  function pressHandler(){
    navigation.navigate('CalculateSC');
  }
  
  return(
    <View style={styles.inputContainer} >
      <TextInput 
        style={styles.textInput}
        maxLength={10}
        placeholder="User Name" 
      />
      <TextInput 
        style={styles.textInput} 
        placeholder="Password" 
      /> 
      <View>
        <PrimaryButton onPress={pressHandler}>Login</PrimaryButton> 
        </View>
      </View> 
  )
}
export default LoginScreen;

const styles= StyleSheet.create({
  inputContainer:{
    marginTop:300, //take space from top fix! center the login View
    marginHorizontal:24, //take left and right space
    padding:16, 
  },
  textInput:{
    height:50, 
    fontSize:32,
    borderBottomColor:'black',
    borderBottomWidth:2,
    fontWeight:'semi-bold',
    textAlign:'center',
    backgroundColor:'white',
    marginVertical: 8, //take top and bottom space
  },
})