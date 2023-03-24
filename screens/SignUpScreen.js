import { StyleSheet, Text, TextInput,View } from "react-native";
//import PrimaryButton from "../components/buttons/PrimaryButton";

import { Formik } from "formik";
import * as Yup from 'yup'

import SignUpForm from "../components/forms/SignUpForm";

function SignUpScreen() {
  return (

    <View style={styles.rootContainer}>
      <Formik
        onSubmit={x => console.log(x)}
        validationSchema={
          Yup.object({
            email:Yup.string()
              //.max(14)
              .email('Invalid')
              .required('Required'),
          })
        }
        initialValues={{email:''}}
      >
        <SignUpForm/>
      </Formik>
    </View>
  )
}
export default SignUpScreen;

const styles= StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputPostContainer:{
    marginHorizontal:5, //take left and right space
    marginTop:130,
    padding:10,
    paddingBottom:105,
    //backgroundColor:'red'
  },
  inputsPasswordContainer:{
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