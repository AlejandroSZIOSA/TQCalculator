import { View,Text,TextInput,StyleSheet } from "react-native";
import { useState,useReducer } from "react";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";
import mathCalculations from "../../mathOperations/mCalculate";
//Reducer
import { uiReducer,initialStateUi } from "../../reducers/areaCalculateView/ui";


function AreaCalculateView ({onChangeCurrentOperationCode}){    
  const [lengthEntry, setLengthEntry] = useState("")
  const [heightEntry, setHeightEntry] = useState("")
  const [totalArea,setTotalArea] = useState(0);
  
  //Reducer
  const [stateUi, dispatchUi] = useReducer(uiReducer,initialStateUi);

  //const [isTextInputEnabled,setIsTextInputEnabled]= useState(true)
  //const [isResetBtnDisabled,setIsResetBtnDisabled]= useState(true)
  //const [isSetBtnDisabled, setIsSetBtnDisabled]= useState(false)
  //const [opacityResetBtn,setOpacityResetBtn]= useState(0.2)
  //const [opacitySetBtn,setOpacitySetBtn]= useState(1)
  
    function setButtonHandler(){
      const length = parseInt(lengthEntry,10)
      const height = parseInt(heightEntry,10)
      const areaResult=mathCalculations.calculateArea(length,height)
      //console.log(isSetBtnDisabled); //calling console log made a problem with hook

      dispatchUi({type:'CHANGE_SET_BTN_OPACITY', payload:0.2})
      //setOpacitySetBtn(0.2)
      
      setTotalArea(areaResult)

      dispatchUi({type:'DISABLED_SET_BTN', payload:true})
      //setIsSetBtnDisabled(true)

      dispatchUi({type:'ENABLE_TEXT_INPUTS', payload:false})
      //setIsTextInputEnabled(false)

      dispatchUi({type:'DISABLED_RESET_BTN', payload:false})
      //setIsResetBtnDisabled(false)

      dispatchUi({type:'CHANGE_RESET_BTN_OPACITY', payload:1})
      //setOpacityResetBtn(1)
      
      onChangeCurrentOperationCode(1,areaResult) //Callback Function
    }

    function resetButtonHandler(){
      //console.log("reset2");

      dispatchUi({type:'DISABLED_SET_BTN', payload:false})
      //setIsSetBtnDisabled(false)

      dispatchUi({type:'DISABLED_RESET_BTN', payload:true})
      //setIsResetBtnDisabled(true)
      
      dispatchUi({type:'CHANGE_RESET_BTN_OPACITY', payload:0.2})
      //setOpacityResetBtn(0.2)

      dispatchUi({type:'CHANGE_SET_BTN_OPACITY', payload:1})
      //setOpacitySetBtn(1)
    
      setLengthEntry("")
      setHeightEntry("")
      setTotalArea(0)
      
      dispatchUi({type:'ENABLE_TEXT_INPUTS', payload:true})
      //setIsTextInputEnabled(true)
      onChangeCurrentOperationCode(0,"No data") //Callback Function
    }

  //todo: Validate text inputs .... "Test useRef" in Text inputs
  return(
    <View style={styles.container}>
      <IntructionText title ="Area"/> 
      <View style={styles.innerContainer}>
        <TextInput
          editable={stateUi.isTextInputEnabled}
          style={styles.textInput}
          placeholder="Length(m)"
          maxLength={3}
          value={lengthEntry}
          onChangeText={(value)=>{setLengthEntry(value)}}
          keyboardType="numeric"
        />
        <IntructionText title ="x"/>
        <TextInput
          editable={stateUi.isTextInputEnabled}
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
            disabled={stateUi.isResetBtnDisabled}
            style={{opacity:stateUi.opacityResetBtn}} //Overriding style. Fix Problem!
            onPress={resetButtonHandler}
          >
          Reset</SecondaryButton>
        </View>
      <View style={styles.innerButtonContainer}>
        <SecondaryButton 
          disabled={stateUi.isSetBtnDisabled}
          style={{opacity:stateUi.opacitySetBtn}} //Overriding style. Fix Problem!
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