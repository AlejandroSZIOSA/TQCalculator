import { View,StyleSheet } from "react-native";
import { useFormikContext } from "formik"; //Formik Hook

import UserTextInput from "./UserTextInput";
import PrimaryButton from "../buttons/PrimaryButton";

function SignUpForm(){
  const {submitForm} = useFormikContext(); //Callback function
  return(
    <View >
      <View style={styles.emailInputContainer}>
        <UserTextInput
          style={styles.textInput}
          fieldName="email" //Passing as Prop
          placeholder="Enter your email"
        />        
      </View>
      <View style={styles.inputsPasswordContainer}>
        <UserTextInput
          style={styles.textInput}
          fieldName="password" //Passing as Prop
          maxLength={20}
          placeholder="New Password" 
        />
        <UserTextInput
          style={styles.textInput} 
          maxLength={20}
          fieldName="confirm" //Passing as Prop
          placeholder="Confirm Password" 
        />
        <View style={styles.confirmBtnContainer}>
          <PrimaryButton 
            onPress={submitForm}
          >Sign up</PrimaryButton>
        </View>    
      </View>      
    </View>
  )
}
export default SignUpForm;

const styles= StyleSheet.create({
  emailInputContainer:{
    marginHorizontal:5, //Take left and right space
    marginTop:-20,
    padding:10,
  },
  textInput:{
    height:45, 
    fontSize:30,
    borderBottomColor:'black',
    borderBottomWidth:2,
    fontWeight:'semi-bold',
    textAlign:'center',
    backgroundColor:'white',
    marginVertical: 8, //Take top and bottom space
  },
  inputsPasswordContainer:{
    marginHorizontal:5, //Take left and right space
    padding:10,
  },
  confirmBtnContainer:{
    paddingVertical:12,
  }
})