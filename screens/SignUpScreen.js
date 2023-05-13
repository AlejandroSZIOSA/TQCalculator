import { StyleSheet,View } from "react-native";
//Formik + Yup
import { Formik } from "formik";
import * as Yup from 'yup'
//Custom Components
import SignUpForm from "../components/forms/SignUpForm";
import setUserSignUp from "../services/dbOperations/setUserSignUp";
import { Image } from "react-native";

function SignUpScreen() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/userSignUpIcon.png')}
          style={styles.userSignUpImage}
        />
      </View>

      <View>
        <Formik
          onSubmit={newUser => setUserSignUp(newUser)}
          validationSchema={
            Yup.object({
              email:Yup.string()
                .max(20)
                .email('Invalid')
                .required('Required'),
              password:Yup.string()
                .required('required'),
              confirm:Yup.string()
                .required('required')
                .oneOf([Yup.ref("password"), null], "Passwords don't match")
            })
          }
          initialValues={{email:'',password:'',confirm:''}}
        >
          <SignUpForm/>
        </Formik>
      </View>
    </View>
  )
}
export default SignUpScreen;

const styles= StyleSheet.create({
  rootContainer: {
    //flex: 1,
    justifyContent: 'center',
  },
  imageContainer:{
    padding: 40,
    alignItems: 'center'
  },
  userSignUpImage:{
    width: 220,
    height:220,
    //backgroundColor:'black'
  },

  inputPostContainer:{
    marginHorizontal:5, //take left and right space
    marginTop:130,
    padding:10,
    paddingBottom:105,
  },
  inputsPasswordContainer:{
    marginHorizontal:5, //take left and right space
    padding:10,
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