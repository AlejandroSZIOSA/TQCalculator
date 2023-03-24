import { useState,useContext } from "react";
import { TextInput, View,StyleSheet, Button,Image } from "react-native";

import { Formik } from "formik";
import * as Yup from 'yup'

import LoginForm from "../components/forms/LoginForm";

//import PrimaryButton from "../components/buttons/PrimaryButton";

import { AuthContext } from "../context/AuthContext";

//import useFetch from "../hooks/fetchData";

function LoginScreen({navigation}){

  //Custom Hook Fetch Data from DB
  //const {dbData} = useFetch('http://localhost:8080/seed/seeds') //change to Calculation Screen

  const [isPrimaryBtnDisabled, setIsPrimaryBtnDisabled] = useState(false);
  const [opacityPrimaryBtn, setOpacityPrimaryBtn] = useState(1);
  
  //Callback Function
  const {signIn} = useContext(AuthContext) //Ctx

  function pressHandler(){
    //signIn() // change this for go to the main app
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
          onSubmit={x => console.log(x)}
          validationSchema={
            Yup.object({
              email: Yup.string()
                .max(14)
                .email('Invalid')
                .required('Required'),
              password: Yup.string()
                .required('Required')
                .max(2)
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
  // inputsContainer:{
  //   marginHorizontal:5, //take left and right space
  //   padding:10,
  //   //backgroundColor:'yellow'
  // },
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