import { View,Text,TextInput,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "../ui/IntructionText";

function Area(){
    return(
        <View style={styles.container}>
            <IntructionText title ="Area"/> 
            <View style={styles.innerContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Length" 
              />
            <IntructionText title ="x"/>
              <TextInput
                style={styles.textInput}
                placeholder="Height" 
              />
            </View>
            <View style={styles.innerContainer2}>
              <IntructionText title ="="/>
              <Text style={styles.textResult}> Result (m2)</Text>
            </View>
            <View style={styles.buttonContainer}>
              <SecondaryButton>Reset</SecondaryButton>
              <SecondaryButton>Set</SecondaryButton>
            </View>
        </View>
    )
}
export default Area;
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:Colors.primaryDarkBlue,
        margin:10
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
      width: '35%', //fix problem with Text Input size
    },
    buttonContainer:{
      flexDirection:'row',
      padding:10
    }
})