import { View,Text,TextInput,StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";
import mathCalculations from "../../operations/mathCalculations";

function AreaCalculateView({onChangeStatusCode}){    
  const [lengthEntry, setLengthEntry] = useState("")
  const [heightEntry, setHeightEntry] = useState("")
  const [totalArea,setTotalArea] = useState(0);

  const [isTextInputEnabled,setIsTextInputEnabled]= useState(true)
  
  const [isResetBtnDisabled,setIsResetBtnDisabled]= useState(true)
  const [isSetBtnDisabled, setIsSetBtnDisabled]= useState(false)
  
  const [opacityResetBtn,setOpacityResetBtn]= useState(0.2)
  const [opacitySetBtn,setOpacitySetBtn]= useState(1)
  
  function setButtonHandler(){
    const length = parseInt(lengthEntry,10)
    const height = parseInt(heightEntry,10)
    const areaResult=mathCalculations.calculateArea(length,height)
    //console.log(isSetBtnDisabled); //calling console log made a problem with hook
    setOpacitySetBtn(0.2)
    setTotalArea(areaResult)
    setIsSetBtnDisabled(true)
    setIsTextInputEnabled(false)
    setIsResetBtnDisabled(false)
    setOpacityResetBtn(1)
    onChangeStatusCode(1,areaResult) //Callback Function
  }
  function resetButtonHandler(){
    //console.log("reset2");
    setIsSetBtnDisabled(false)
    setIsResetBtnDisabled(true)
    setOpacityResetBtn(0.2)
    setOpacitySetBtn(1)
  
    setLengthEntry("")
    setHeightEntry("")
    setTotalArea(0)
    
    setIsTextInputEnabled(true)
    onChangeStatusCode(0,"No data") //Callback Function
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
            disabled={isResetBtnDisabled}
            style={{opacity:opacityResetBtn}} //Overriding style. Fix Problem!
            onPress={resetButtonHandler}
          >
          Reset</SecondaryButton>
        </View>
      <View style={styles.innerButtonContainer}>
        <SecondaryButton 
          disabled={isSetBtnDisabled}
          style={{opacity:opacitySetBtn}} //Overriding style. Fix Problem!
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
    color:'white'
    //backgroundColor: Colors.primaryGreen4,
  },
  textInput:{
    fontSize:27,
    backgroundColor:'white',
    borderRadius:5,
    borderColor:'black',
    borderWidth:3,
    margin:10,
    width: '40%', //fix! problem with Text Input size
  },
  buttonContainer:{
    flexDirection:'row',
    padding:10,
  },
  innerButtonContainer:{
    marginHorizontal:10 //fix! separation buttons problem
  }
})