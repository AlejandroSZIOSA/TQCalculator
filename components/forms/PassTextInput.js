import { TextInput,Text } from "react-native";

import { useField } from "formik"; // permite acceder a props tipo formik

function PassTextInput ({fieldName,...props}){
  const[field, meta] = useField(fieldName); //destructuring Props.. :)
  // meta ?

  return (
  <>  
    <TextInput 
        onblur={field.onBlur(fieldName)}
        //style={styles.textInput}
        onChangeText={field.onChange('password')}
        value={field.value}
        maxLength={20}
        placeholder="Enter your Password" 
        {...props}
      />
      {meta.error && meta.touched&& (
        <Text style={{color:'red'}}> {meta.error} </Text>
      )}
  </>
  )
  
}
export default PassTextInput;