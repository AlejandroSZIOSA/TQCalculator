import { View,Text,TextInput,StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";
import calculateArea from "../../operations/calculateArea";

function AreaCalculateView({onChangeStatusCode}){    
  const [lengthEntry, setLengthEntry] = useState("")
  const [heightEntry, setHeightEntry] = useState("")
  const [totalArea,setTotalArea] = useState(0);

  const [isTextInputEnabled,setIsTextInputEnabled]= useState(true)
  const [isSetBtnDisabled, setIsSetBtnDisabled]= useState(false)
  
  function setButtonHandler(){
    const length = parseInt(lengthEntry,10)
    const height = parseInt(heightEntry,10)
    const areaResult=calculateArea(length,height)

    setTotalArea(areaResult)
    setIsSetBtnDisabled(true)
    setIsTextInputEnabled(false)
    onChangeStatusCode(1,areaResult)
    //console.log(areaResult)
  }
  function resetButtonHandler(){
    setLengthEntry("")
    setHeightEntry("")
    setTotalArea(0)
    setIsSetBtnDisabled(false)
    setIsTextInputEnabled(true)
    onChangeStatusCode(0,"No data")
  }

  //todo: Validate text inputs .... "Test useRef" in Text inputs
  return(
    <View style={styles.container}>
      <IntructionText title ="Area"/> 
      <View style={styles.innerContainer}>
        <TextInput
          editable={isTextInputEnabled}
          style={styles.textInput}
          placeholder="Length(m)"
          maxLength={3}
          value={lengthEntry}
          onChangeText={(value)=>{setLengthEntry(value)}}
          keyboardType="numeric"
        />
        <IntructionText title ="x"/>
        <TextInput
          editable={isTextInputEnabled}
          style={styles.textInput}
          placeholder="Height(m)" 
          maxLength={3}
          value={heightEntry}
          onChangeText={(value)=>{setHeightEntry(value)}}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.innerContainer2}>
        <IntructionText title = "="/>
        <View>
          <Text style={styles.textResult}> {totalArea}</Text>
        </View>
        <View>
          <IntructionText title = "m²"/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.innerButtonContainer}>
          <SecondaryButton 
            onPress={resetButtonHandler}
          >
          Reset</SecondaryButton>
        </View>
      <View style={styles.innerButtonContainer}>
        <SecondaryButton 
          disabled={isSetBtnDisabled}
          onPress={setButtonHandler}
        >Set</SecondaryButton>
      </View>
        </View>
    </View>
  )
}
export default AreaCalculateView;
const styles= StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:Colors.primaryDarkBlue,
    padding:10,
    marginBottom:10 // fix a problem!
  },
  innerContainer:{
    flexDirection:'row',
  },
  innerContainer2:{
    flexDirection:'row',
    padding:10,
    width:'65%',
    justifyContent:'center'
  },
  textResult:{
    fontSize:30,
    //backgroundColor: Colors.primaryGreen4,
  },
  textInput:{
    fontSize:28,
    backgroundColor:'white',
    borderRadius:5,
    margin:10,
    width: '35%', //fix! problem with Text Input size
  },
  buttonContainer:{
    flexDirection:'row',
    padding:10,
  },
  innerButtonContainer:{
    marginHorizontal:10 //fix! separation buttons problem
  }
})