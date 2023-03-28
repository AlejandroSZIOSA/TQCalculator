import { useState,useContext, useEffect } from "react";
import { TextInput, View,StyleSheet, Button,Image } from "react-native";


import { Formik } from "formik";
import * as Yup from 'yup'

import LoginForm from "../components/forms/LoginForm";

//import PrimaryButton from "../components/buttons/PrimaryButton";

import { AuthContext } from "../context/AuthContext";
import useAuth from "../hooks/useAuth";
import axios from "axios";

//import useFetch from "../hooks/fetchData";

function LoginScreen({navigation}){

  //Custom Hook Fetch Data from DB
  //const {dbData} = useFetch('http://localhost:8080/seed/seeds') //change to Calculation Screen

  const [isPrimaryBtnDisabled, setIsPrimaryBtnDisabled] = useState(false);
  const [opacityPrimaryBtn, setOpacityPrimaryBtn] = useState(1);
  //const [token,setToken]=useState(false); // Can activate :)
  
  //Callback Function
  const {logIn} = useContext(AuthContext) //Ctx
  
  // authenticate Axios Login
    const onLoginBtnHandler = async (userData) =>{
      const url= 'http://localhost:8080/auth/login'
      try{
        const res = await axios.post(url,userData);
        logIn(res.data.token) //Callback function to CTX
      }
      catch (error){
        console.log(error);
        console.warn("Something was wrong!")
      }
    }

  return(
    <View style={styles.rootContainer}>
      <View style={styles.userImageContainer}>
        <Image
          source={require('../assets/userIcon3.png')}
        />
      </View>
      <View >
        <Formik 
          onSubmit={x => onLoginBtnHandler(x)}
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
          initialValues={{email:'', password:''}}
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