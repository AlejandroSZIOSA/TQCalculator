import { View,Text,TextInput,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";

function AreaSection(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}> Area</Text>
            <View style={styles.innerContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Length" 
              />
            <Text style={styles.textTitle}> x </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Height" 
              />
            </View>
            <View style={styles.innerContainer2}>
              <Text style={styles.textTitle}> = </Text>
              <Text style={styles.textResult}> Result (m2)</Text>
            </View>
            <View style={styles.buttonContainer}>
              <SecondaryButton>Reset</SecondaryButton>
              <SecondaryButton>Set</SecondaryButton>
            </View>
        </View>
    )
}
export default AreaSection;
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:Colors.primaryDarkBlue
    },
    innerContainer:{
        flexDirection:'row',
    },
    innerContainer2:{
        flexDirection:'row',
        padding:10,
        width:'65%'
    },
    textTitle:{
        fontSize:30,
        color:'white'
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
      width: '35%', //fix problem with Text Input size
    },
    buttonContainer:{
      flexDirection:'row',
      padding:10
    }
})