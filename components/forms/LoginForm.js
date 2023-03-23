import { StyleSheet, TextInput } from "react-native";
import { Formik,useFormikContext } from "formik";
import * as Yup from 'yup';


import PrimaryButton from "../buttons/PrimaryButton";
import EmailTextInput from "./EmailTextInput";

function  LoginForm () {

  const {handleChange, submitForm, values} = useFormikContext();
  return(
    <>
      <EmailTextInput 
        fieldName="email"
      />
      <PrimaryButton 
        onPress={submitForm}
        //disabled={isPrimaryBtnDisabled}
        //style= {{opacity:opacityPrimaryBtn}} //overriding Style
      >Login</PrimaryButton> 
    </>
  )
}
export default LoginForm;

const styles = StyleSheet.create({
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