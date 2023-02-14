import ResultText from "./ResultText";
import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function AreaResultView(){
    return(
        <View style= {styles.container}>
            <View style={{paddingBottom:10}}>
                <ResultText title="For"/>
            </View>
            <View style={styles.innerContainer}> 
                <View style={styles.numberContainer}>
                    <Text style={styles.textNumber}>100</Text>
                </View>
                <View style={styles.unitContainer}>
                    <Text style={styles.textUnit}>M2</Text>
                </View>
            </View>
        </View>
    )
}
export default AreaResultView;
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        //margin:10
    },
    innerContainer:{
        flexDirection:'row'
    },
    numberContainer:{
        paddingHorizontal:80,
        alignContent:'center',
        backgroundColor:Colors.primaryDarkBlue
    },
    unitContainer:{
        paddingLeft:10
    },
    textNumber:{
        fontSize:64,
        color:'white',
    },
    textUnit:{
        fontSize:64,
        color:Colors.primaryGreen5
    },
})