import { StyleSheet,View } from "react-native";
import { useState,useEffect } from "react";
import { useFormikContext } from "formik"; //Formik Hook
import PrimaryButton from "../buttons/PrimaryButton";
import UserTextInput from "./UserTextInput";
import checkStorage from "../../utilities/storage/checkStorage";

function LoginForm(){
  const {submitForm} = useFormikContext();
  const [opacityTextInputs,setOpacityTextInputs]= useState();
  const [editableTextInputs,setEditableTextInput] = useState();

  //Comment this if you want Log in with another User Credentials.
  
  useEffect(() => {
    const isEmpty = checkStorage();
      if(!isEmpty){
        setOpacityTextInputs(1)
        setEditableTextInput(true)
      }
        else{
          setOpacityTextInputs(0.5)
          setEditableTextInput(false)
        }
  },[])
  
  return(
    <View style={styles.inputsContainer}>
      <UserTextInput 
        style={[styles.textInput,{opacity:opacityTextInputs}]} //Overriding styles
        fieldName="email" //Passing as Prop
        placeholder="Enter your Email"
        editable={editableTextInputs}
      />
      <UserTextInput
        style={[styles.textInput,{opacity:opacityTextInputs}]} //Overriding styles
        fieldName="password"
        placeholder="Enter your Password" 
        editable={editableTextInputs}
      />
      <View style={styles.logInBtnContainer}>
        <PrimaryButton 
          onPress={submitForm}
        >Login</PrimaryButton> 
      </View>
    </View>
  )
}
export default LoginForm;

const styles = StyleSheet.create({
  inputsContainer:{
    marginHorizontal:5, //take left and right space
    padding:10,
  },
  textInput:{
    height:48, 
    fontSize:30,
    borderBottomColor:'black',
    borderBottomWidth:2,
    fontWeight:'semi-bold',
    textAlign:'center',
    backgroundColor:'white',
    marginVertical: 8, //take top and bottom space
  },
  logInBtnContainer:{
    paddingTop:12,
  }
})