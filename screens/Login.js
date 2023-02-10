import { TextInput, View,StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function Login(){
    return(
        <View style={styles.inputContainer} >
            <TextInput 
                style={styles.textInput}
                maxLength={10} 
                placeholder="User Name" 
            />
            <TextInput 
                style={styles.textInput} 
                placeholder="Password" 
            /> 
            <PrimaryButton> Login </PrimaryButton> 
        </View> 
    )
}
export default Login;

const styles= StyleSheet.create({
    rootContainer:{
        flex:1,
        backgroundColor: Colors.primaryGreen1,
        //alignContent:'center'
    },
    inputContainer:{
        marginTop:100, //take space from top
        marginHorizontal:24, //take left and right space
        padding:16, //
        backgroundColor:Colors.primaryGreen1
    },
    InnerInputContainer:{
        padding:10,
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