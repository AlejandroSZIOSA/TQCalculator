import { StyleSheet, Text, TextInput,View } from "react-native";
import PrimaryButton from "../components/buttons/PrimaryButton";


function SignUpScreen() {
  return (

    <View style={styles.rootContainer}>

      <View style={styles.inputPostContainer}>
        <TextInput
        style={styles.textInput}
            maxLength={20}
            placeholder="E-Post" 
          />
      </View>

      <View style={styles.inputsPasswordContainer}>
        <TextInput 
          style={styles.textInput}
          maxLength={20}
          placeholder="New Password" 
        />
        <TextInput 
          style={styles.textInput} 
          maxLength={20}
          placeholder="Repeat Password" 
        />
      </View>

      <View >
        <PrimaryButton 
          //onPress={pressHandler}
          //disabled={isPrimaryBtnDisabled}
          //overriding Style
          >Confirm</PrimaryButton> 
      </View>    

    </View>
  )
}
export default SignUpScreen;

const styles= StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'top-center',
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