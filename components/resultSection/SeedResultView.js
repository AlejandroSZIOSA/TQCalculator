import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import ResultText from "./ResultText";

function SeedResultView(props){
  return(
    <View style={styles.container}>
      <View style={{paddingBottom:20,alignItems:'center'}}>
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
    justifyContent:'center',
  },
  innerContainer:{
    marginHorizontal:15,   
  },
  numberContainer:{
    backgroundColor:Colors.primaryDarkBlue,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    paddingHorizontal:8,
    alignItems:'center',
  },
  textNumber:{
    fontSize:55,
    color:'white',
  },
  unitContainer:{
    backgroundColor:'black',
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    padding:4,
    alignItems:'center',
  },
  textUnit:{
    fontSize:30,
    color:'white',
  }
})