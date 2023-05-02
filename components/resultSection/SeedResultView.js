import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import ResultText from "./ResultText";

function SeedResultView(props){
  return(
    <View style={styles.container}>
      <View style={{paddingBottom:20}}>
        <ResultText title="You will need"/>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.numberContainer}>
          <Text style={styles.textNumber}>{props.seedTotal}</Text>
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.textUnit}>{props.unit}</Text>
        </View>
      </View>
    </View>
    )
}
export default SeedResultView;
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  innerContainer:{
    alignItems:'center',
  },
  numberContainer:{
    backgroundColor:Colors.primaryDarkBlue,
    borderRadius:10,
    paddingHorizontal:8,
  },
  textNumber:{
    fontSize:55,
    color:'white',
  },
  unitContainer:{
    backgroundColor:'black',
    borderRadius:5,
    padding:5
  },
  textUnit:{
    fontSize:35,
    color:'white',
  }
})