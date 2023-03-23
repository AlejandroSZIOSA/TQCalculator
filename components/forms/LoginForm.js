import { TextInput } from "react-native";
import { Formik,useFormikContext } from "formik";
import * as Yup from 'yup';

import PrimaryButton from "../buttons/PrimaryButton";

function  LoginForm () {

  const {handleChange, submitForm, values} = useFormikContext();
  return(
    <>
      <TextInput 
        //onblur={handleBlur('email')}
        //style={styles.textInput}
        onChangeText={handleChange('email')}
        value={values.email}
        //maxLength={20}
        placeholder="E-Mail" 
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