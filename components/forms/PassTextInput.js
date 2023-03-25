import { TextInput,Text,StyleSheet,View } from "react-native";

import { useField } from "formik"; // permite acceder a props tipo formik

function PassTextInput ({fieldName,...props}){
  const[field, meta] = useField(fieldName); //destructuring Props.. :)
  // meta ?

  return (
  <>  
    <TextInput 
        onblur={field.onBlur(fieldName)}
        onChangeText={field.onChange('password')}
        value={field.value}
        maxLength={21}
        {...props}
    />
    {meta.error && meta.touched&& (
      <View style={styles.validationTextContainer}>
        <Text style={styles.validationText}> {meta.error} </Text>
      </View>
    )}
  </>
  )
}
export default PassTextInput;

const styles = StyleSheet.create({
  validationTextContainer:{
    alignItems: 'center',
  },
  validationText:{
    fontSize:22,
    color:'yellow'
  }
})