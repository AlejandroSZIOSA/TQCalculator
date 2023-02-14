import { View,Text,TextInput,StyleSheet } from "react-native";
import { useState } from "react";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";
import calculateArea from "../../operations/calculateArea";
function AreaView(){
    
    const [lenghtNumber, setLenghtNumber] = useState("");
    const [heightNumber, setHeightNumber] = useState("")
    const [totalArea,setTotalArea] = useState("Result(m2)")

    const [enableTextInput,setEnableTextInput]= useState(true)
    const [disableSetBtn, setDisableSetBtn]= useState(false)
    
    function setButtonHandler(){
        let lenght = parseInt(lenghtNumber,10)
        let height = parseInt(heightNumber,10)
        setTotalArea(calculateArea(lenght,height))
        setDisableSetBtn(true)
        setEnableTextInput(false)
    }
    function resetButtonHandler(){
      setLenghtNumber("")
      setHeightNumber("")
      setTotalArea("Result(m2)")

      setDisableSetBtn(false)
      setEnableTextInput(true)
    }
    return(
        <View style={styles.container}>
            <IntructionText title ="Area"/> 
            <View style={styles.innerContainer}>
              <TextInput
                editable={enableTextInput}
                style={styles.textInput}
                placeholder="Length(m)" //implement ternary conditional
                maxLength={3}
                value={lenghtNumber}
                onChangeText={(value)=>{setLenghtNumber(value)}}
                keyboardType="numeric"
              />
            <IntructionText title ="x"/>
              <TextInput
                editable={enableTextInput}
                style={styles.textInput}
                placeholder="Height(m)" 
                maxLength={3}
                value={heightNumber}
                onChangeText={(value)=>{setHeightNumber(value)}}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.innerContainer2}>
              <IntructionText title = "="/>
              <Text style={styles.textResult}> {totalArea}</Text>
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
                disabled={disableSetBtn}
                onPress={setButtonHandler}
                >Set</SecondaryButton>
              </View>
            </View>
        </View>
    )
}
export default AreaView;
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
        width:'65%'
    },
    textResult:{
        fontSize:30,
        color:'black',
        backgroundColor: Colors.primaryGreen4,
    },
    textInput:{
      fontSize:30,
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