import { useState,useContext, useEffect} from "react";
import { View,StyleSheet, Button,Image } from "react-native";
// Formik + Yup
import { Formik } from "formik";
import * as Yup from 'yup'
//Custom components
import LoginForm from "../components/forms/LoginForm";
import onLoginBtnHandler from "../services/dbOperations/setUserLogIn";
//CTX
import { AuthContext } from "../context/AuthContext";
import { TokenContext } from "../context/TokenContext";
// Async Storage
import { getUserKey } from "../utilities/storage/getUserKey";

function LoginScreen({navigation}){
  const {setToken} = useContext(TokenContext); // CTX Function
  const {logIn} = useContext(AuthContext) // CTX Callback Function

  const [defaultUser, setDefaultUser] = useState({email:"", password:""})
  //initialValues={{email:'phoenix@sidius.com', password:'password'}}

  useEffect(() => {
    getUserKey(setDefaultUser);
  },[])

  return(
    <View style={styles.rootContainer}>
      <View style={styles.userImageContainer}>
        <Image
          source={require('../assets/userLoginIcon.png')}
        />
      </View>
      <View >
        <Formik 
          onSubmit={userKey => onLoginBtnHandler(userKey,logIn,setToken)} // Can change here
          validationSchema={
            Yup.object({
              email: Yup.string()
                .max(20)
                .email('Invalid')
                .required('Required'),
              password: Yup.string()
                .required('Required')
                .max(20)
            })
          }
          initialValues={defaultUser} enableReinitialize //fix problem! update useState :)
        >
          <LoginForm />   
        </Formik>  
      </View> 
      <View style={styles.btnSignUpContainer}>
          <Button  title="SignUp" onPress={() =>navigation.navigate('SignUpSc')}/>
      </View>
    </View>
  )
}
export default LoginScreen;
const styles= StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'top', //fix problem!
  },
  userImageContainer:{
    alignItems:'center',
    paddingVertical:40
  },
  userImageInnerContainer:{
    width:30,height:30
  },
  btnSignUpContainer:{
    alignItems:'center',
    marginHorizontal:10,
  },
  btnLogInContainer:{
    paddingBottom:15
  }
})