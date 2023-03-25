import { View,TextInput,StyleSheet } from "react-native";

import { Formik,useFormikContext } from "formik";
//import * as Yup from 'yup';

import EmailTextInput from "./EmailTextInput";
import PrimaryButton from "../buttons/PrimaryButton";
import PassTextInput from "./PassTextInput";
import ConfirmPassTextInput from "./ConfirmPassTextInput";

function SignUpForm(){

  const {handleChange, submitForm, values} = useFormikContext();

  return(
    <View >
      <View style={styles.emailInputContainer}>
        <EmailTextInput
          style={styles.textInput}
          fieldName="email" //Passing as Prop
          placeholder="Enter your email"
        />        
      </View>

      <View style={styles.inputsPasswordContainer}>
        <PassTextInput
          style={styles.textInput}
          fieldName="password" //Passing as Prop
          maxLength={20}
          placeholder="New Password" 
        />
        <ConfirmPassTextInput 
          style={styles.textInput} 
          maxLength={20}
          fieldName="confirm" //Passing as Prop
          placeholder="Confirm Password" 
        />
        <View >
          <PrimaryButton 
            onPress={submitForm}
            //disabled={isPrimaryBtnDisabled}
            //overriding Style
          >Confirm</PrimaryButton> 
        </View>    
      </View>      
    </View>
  )
}
export default SignUpForm;

const styles= StyleSheet.create({
  emailInputContainer:{
    marginHorizontal:5, //take left and right space
    //marginTop:100,
    padding:10,
    //paddingBottom:105,
    //backgroundColor:'red'
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
  inputsPasswordContainer:{
    marginHorizontal:5, //take left and right space
    padding:10,
    //backgroundColor:'yellow'
  },
})