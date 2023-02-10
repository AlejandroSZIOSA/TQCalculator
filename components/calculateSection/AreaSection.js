import { View,Text,TextInput,StyleSheet } from "react-native";

function AreaSection(){
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}> Area</Text>
            <View style={styles.innerContainer}>
              <TextInput
                placeholder="Length" 
              />
            <Text> * </Text>
              <TextInput
                placeholder="Height" 
              />
            </View>
        </View>
    )
}
export default AreaSection;
const styles= StyleSheet.create({
    container:{
        backgroundColor:'blue',
        alignItems:'center'
    },
    innerContainer:{
        flexDirection:'row'
    },
    textTitle:{
        fontSize:30
    },
    textInput:{
      fontSize:30
    }
})