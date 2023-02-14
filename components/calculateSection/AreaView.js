import { View,Text,TextInput,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";

function AreaView(){
    return(
        <View style={styles.container}>
            <IntructionText title ="Area"/> 
            <View style={styles.innerContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Length(m)" 
                maxLength={3}
              />
            <IntructionText title ="x"/>
              <TextInput
                style={styles.textInput}
                placeholder="Height(m)" 
                maxLength={3}
              />
            </View>
            <View style={styles.innerContainer2}>
              <IntructionText title = "="/>
              <Text style={styles.textResult}> Result(m2)</Text>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.innerButtonContainer}>
                <SecondaryButton>Reset</SecondaryButton>
              </View>
              <View style={styles.innerButtonContainer}>
                <SecondaryButton>Set</SecondaryButton>
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