import { TextInput,Text } from "react-native";

import { useField } from "formik"; // permite acceder a props tipo formik

function EmailTextInput ({fieldName,...props}){
  const[field, meta] = useField(fieldName); //destructuring

  return (
  <>  
    <TextInput 
        onblur={field.onBlur(fieldName)}
        //style={styles.textInput}
        onChangeText={field.onChange('email')}
        value={field.value}
        //maxLength={20}
        //placeholder="E-Mail" 
        {...props}
      />
      {meta.error && meta.touched&& (
        <Text style={{color:'red'}}> {meta.error} </Text>
      )}
  </>
  )
  
}
export default EmailTextInput;