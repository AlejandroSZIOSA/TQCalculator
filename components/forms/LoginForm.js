import { StyleSheet,View } from "react-native";
import { useFormikContext } from "formik"; //Formik Hook

import PrimaryButton from "../buttons/PrimaryButton";
import UserTextInput from "./UserTextInput";

function LoginForm(){
  const {handleChange, submitForm, values} = useFormikContext();

  return(
    <View style={styles.inputsContainer}>
      <UserTextInput 
        style={styles.textInput}
        fieldName="email" //Passing as Prop
        placeholder="Enter your Email"
      />
      <UserTextInput
        style={styles.textInput}
        fieldName="password"
        placeholder="Enter your Password" 
      />
      <PrimaryButton 
        onPress={submitForm}
        //disabled={isPrimaryBtnDisabled}
        //style= {{opacity:opacityPrimaryBtn}} //overriding Style
      >Login</PrimaryButton> 
    </View>
  )
}
export default LoginForm;

const styles = StyleSheet.create({
  inputsContainer:{
    marginHorizontal:5, //take left and right space
    padding:10,
    //backgroundColor:'yellow'
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