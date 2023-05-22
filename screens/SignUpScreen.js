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
                .required('Required'),
              confirm:Yup.string()
                .required('Required')
                .oneOf([Yup.ref("password"), null], "Password doesn't match") //fix problem!
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
    justifyContent: 'center',
  },
  imageContainer:{
    padding: 40,
    alignItems: 'center'
  },
  userSignUpImage:{
    width: 220,
    height:220,
  },
})