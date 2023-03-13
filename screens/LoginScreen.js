import { useEffect, useLayoutEffect, useState } from "react";
import { TextInput, View,StyleSheet, Button,Image } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";


import useFetch from "../hooks/fetchData";

function LoginScreen({navigation}){

  //Custom Hook Fetch Data from DB
  const {dbData} = useFetch('http://localhost:8080/seed/seeds')

  const [isPrimaryBtnDisabled, setIsPrimaryBtnDisabled] = useState(false);
  const [opacityPrimaryBtn, setOpacityPrimaryBtn] = useState(1);
  
  // function checkDbConnection(){
  //   console.log(error)
  //   if(error!= null){
  //     setIsPrimaryBtnDisabled(true)
  //     setOpacityPrimaryBtn(0.3)
  //   }
  // }
  
  function pressHandler(){
    // if(!dbData?.length){
    //   console.log("esta vacia");
    // }
    navigation.navigate('CalculateSC',{seedDbData:dbData});
  }

  return(
    <View style={styles.rootContainer}>
      <View style={styles.userImageContainer}>
        <Image
          source={require('../assets/userIcon3.png')}
        />
      </View>
      
      <View style={styles.inputsContainer} >
        <TextInput 
          style={styles.textInput}
          maxLength={20}
          placeholder="UserName" 
        />
        <TextInput 
          style={styles.textInput} 
          maxLength={20}
          placeholder="Password" 
        />
      </View> 

      <View style={styles.btnLogInContainer}>
        <PrimaryButton 
          onPress={pressHandler}
          disabled={isPrimaryBtnDisabled}
          style= {{opacity:opacityPrimaryBtn}} //overriding Style
          >Login</PrimaryButton> 
      </View>    

      <View style={styles.btnSignUpContainer}>
          <Button  title="SignUp"/>
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
    paddingVertical:20
  },
  userImageInnerContainer:{
    width:30,height:30
  },
  inputsContainer:{
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