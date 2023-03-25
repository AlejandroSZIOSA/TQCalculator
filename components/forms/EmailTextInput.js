import { TextInput,Text,StyleSheet, View } from "react-native";
import { useField } from "formik"; //Hooks get access to props type Formik

function EmailTextInput ({fieldName,...props}){
  const[field, meta] = useField(fieldName); //destructuring.. :)

  return (
  <>  
    <TextInput 
        onblur={field.onBlur(fieldName)}
        onChangeText={field.onChange('email')}
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
export default EmailTextInput;

const styles = StyleSheet.create({
  validationTextContainer:{
    alignItems: 'center',
  },
  validationText:{
    fontSize:22,
    color:'yellow'
  }
})