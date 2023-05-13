import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import ResultText from "./ResultText";

function SeedTypeView(props){
  return(
    <View style={styles.container}>
      <View style={{paddingBottom:10,alignItems:'center'}}>
        <ResultText title="Of"/>
      </View>
      <View style={styles.seedTypeContainer}>
        <Text style={styles.seedTypeText}>{props.seedType}</Text>
      </View>
    </View>
  )
}
export default SeedTypeView;

const styles=StyleSheet.create({
  container:{
    marginVertical:5,
    marginHorizontal:15,
  },
  seedTypeContainer:{
    backgroundColor:Colors.primaryGreen3,
    paddingHorizontal:25,
    paddingVertical:15,
    borderRadius:15
  },
  seedTypeText:{
    textAlign:'center',
    color:'#FAFF00',
    fontSize:40
  }
})
