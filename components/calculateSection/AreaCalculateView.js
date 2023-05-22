import { View,Text,TextInput,StyleSheet } from "react-native";
import { useState,useReducer } from "react";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";
import mathCalculations from "../../mathOperations/mCalculate";
//Reducers
import { uiReducer,initialStateUi } from "../../reducers/areaCalculateView/ui";

function AreaCalculateView ({onChangeCurrentOperationCode}){    
  const [lengthEntry, setLengthEntry] = useState("")
  const [heightEntry, setHeightEntry] = useState("")
  const [totalArea,setTotalArea] = useState(0);
  
  //Reducer
  const [stateUi, dispatchUi] = useReducer(uiReducer,initialStateUi);
  
    function setButtonHandler(){
      const length = parseInt(lengthEntry,10)
      const height = parseInt(heightEntry,10)
      const areaResult=mathCalculations.calculateArea(length,height)
      setTotalArea(areaResult)
      dispatchUi({type:'CHANGE_SET_BTN_OPACITY', payload:0.2})
      dispatchUi({type:'DISABLED_SET_BTN', payload:true})
      dispatchUi({type:'ENABLE_TEXT_INPUTS', payload:false})
      dispatchUi({type:'DISABLED_RESET_BTN', payload:false})
      dispatchUi({type:'CHANGE_RESET_BTN_OPACITY', payload:1})
      onChangeCurrentOperationCode(1,areaResult) //Callback Function
    }

    function resetButtonHandler(){
      dispatchUi({type:'DISABLED_SET_BTN', payload:false})
      dispatchUi({type:'DISABLED_RESET_BTN', payload:true})
      dispatchUi({type:'CHANGE_RESET_BTN_OPACITY', payload:0.2})
      dispatchUi({type:'CHANGE_SET_BTN_OPACITY', payload:1})  
      setLengthEntry("")
      setHeightEntry("")
      setTotalArea(0)
      dispatchUi({type:'ENABLE_TEXT_INPUTS', payload:true})
      onChangeCurrentOperationCode(0,"No data") //Callback Function
    }

  return(
    <View style={styles.container}>
      <IntructionText title ="Area (m)"/> 
      <View style={styles.innerContainer}>
          <TextInput
            editable={stateUi.isTextInputEnabled}
            style={styles.textInput}
            placeholder="L (m)"
            maxLength={4}
            value={lengthEntry}
            onChangeText={(value)=>{setLengthEntry(value)}}
            keyboardType="numeric"
          />
        <View>
          <IntructionText title ="x"/>
        </View>
          <TextInput
            editable={stateUi.isTextInputEnabled}
            style={styles.textInput}
            placeholder="H (m)"
            maxLength={4}
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
          <IntructionText title = "( m² )"/>
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
    marginBottom:5 // fix a problem!
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
    fontSize:38,
    color:'white'
    //backgroundColor: Colors.primaryGreen4,
  },
  textInput:{
    fontSize:30,
    backgroundColor:'white',
    borderRadius:10,
    borderColor:'black',
    borderWidth:3,
    margin:10,
    width: '25%', //fix! problem with Text Input size
    padding:2
  },
  buttonContainer:{
    flexDirection:'row',
    padding:10,
  },
  innerButtonContainer:{
    marginHorizontal:10 //fix! separation buttons problem
  }
})