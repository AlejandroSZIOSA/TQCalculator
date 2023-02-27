import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import ResultText from "./ResultText";

function SeedResultView(){
  return(
    <View style={styles.container}>
      <View style={{paddingBottom:20}}>
        <ResultText title="You will need"/>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.numberContainer}>
          <Text style={styles.textNumber}>1000</Text>
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.textUnit}>gr</Text>
        </View>
      </View>
    </View>
    )
}
export default SeedResultView;
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    margin:10
  },
  innerContainer:{
    flexDirection:'row',
  },
  numberContainer:{
    paddingHorizontal:75,
    alignContent:'center',
    backgroundColor:Colors.primaryDarkBlue
  },
  unitContainer:{
    paddingLeft:10
  },
  textNumber:{
    fontSize:64,
    color:'white',
    backgroundColor:Colors.primaryDarkBlue
  },
  textUnit:{
    fontSize:64,
    color:Colors.primaryGreen5
  }
})