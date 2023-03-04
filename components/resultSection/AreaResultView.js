import ResultText from "./ResultText";
import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function AreaResultView(props){
  return(
    <View style= {styles.container}>
      <View style={{paddingBottom:10}}>
        <ResultText title="For"/>
      </View>
      <View style={styles.innerContainer}> 
        <View style={styles.numberContainer}>
          <Text style={styles.textNumber}>{props.areaTotal}</Text>
        </View>
        <View style={styles.unitContainer}>
          <Text style={styles.textUnit}>m2</Text>
        </View>
      </View>
    </View>
    )
}
export default AreaResultView;

const styles = StyleSheet.create({
  container:{
    alignItems:'center',  
  },
  innerContainer:{
    flexDirection:'row'
  },
  numberContainer:{
    paddingHorizontal:20,
    alignContent:'center',
    borderRadius:23,
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
    fontSize:40,
    marginVertical:10,
    color:Colors.primaryGreen5
  },
})