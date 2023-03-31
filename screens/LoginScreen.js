import { useState,useContext, useEffect } from "react";
import { TextInput, View,StyleSheet, Button,Image } from "react-native";

import { Formik } from "formik";
import * as Yup from 'yup'

import LoginForm from "../components/forms/LoginForm";

//import PrimaryButton from "../components/buttons/PrimaryButton";

import { AuthContext } from "../context/AuthContext";
import { TokenContext } from "../context/TokenContext";

//import useAuth from "../hooks/useAuth";
import axios from "axios";

import onLoginBtnHandler from "../services/dbOperations/setUserLogIn";

function LoginScreen({navigation}){

  const [isPrimaryBtnDisabled, setIsPrimaryBtnDisabled] = useState(false);
  const [opacityPrimaryBtn, setOpacityPrimaryBtn] = useState(1);
  //const [token,setToken]=useState(false); // Can activate :)
  
  const {logIn} = useContext(AuthContext) //CTX Callback Function
  
  //const [token] = useContext(TokenContext);
  
  //const {setToken} = useContext(TokenContext);


  //console.log(token)

  const {token, setToken} = useContext(TokenContext)


  console.log(token)
  return(
    <View style={styles.rootContainer}>
      <View style={styles.userImageContainer}>
        <Image
          source={require('../assets/userIcon3.png')}
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
          initialValues={{email:'phoenix@sidius.com', password:'password'}}
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
    //alignItems:'center'
  },
  userImageContainer:{
    alignItems:'center',
    //backgroundColor:'white',
    paddingVertical:40
  },
  userImageInnerContainer:{
    width:30,height:30
  },
  btnSignUpContainer:{
    //backgroundColor:'red',
    alignItems:'center',
    marginHorizontal:10,
  },
  btnLogInContainer:{
    //backgroundColor:'white',
    paddingBottom:15
  }
})