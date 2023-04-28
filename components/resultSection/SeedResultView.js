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
    margin:10
  },
  innerContainer:{
    //flexDirection:'column',
    alignItems:'center',
    //backgroundColor:Colors.primaryDarkBlue,
    //borderRadius:10,
  },
  numberContainer:{
    paddingHorizontal:8,
  },
  textNumber:{
    fontSize:55,
    color:'white',
    //backgroundColor:Colors.primaryDarkBlue
  },
  unitContainer:{
    //paddingRight:4,
    //alignItems:'center',
    backgroundColor:Colors.primaryDarkBlue,
    borderRadius:5,
    padding:4
  },
  textUnit:{
    fontSize:35,
    //marginVertical:10,
    color:'white',
    
  }
})