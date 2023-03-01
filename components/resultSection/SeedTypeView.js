import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import ResultText from "./ResultText";

function SeedTypeView(props){
  return(
    <View style={styles.container}>
      <View style={{paddingBottom:10}}>
        <ResultText title="Of"/>
      </View>
      <View style={styles.seedTypeContainer}>
        <Text style={styles.seedTypeText}>{props.seedType}</Text>
      </View>
    </View>
  )
}
export default SeedTypeView;

const styles= StyleSheet.create({
  container:{
    alignItems:'center',
    marginVertical:10,
  },
  seedTypeContainer:{
    backgroundColor:Colors.primaryGreen3,
    paddingHorizontal:60,
    paddingVertical:30
  },
  seedTypeText:{
    color:'#FAFF00',
    fontSize:48
  }
})
