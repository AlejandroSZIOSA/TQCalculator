import ResultText from "./ResultText";
import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function AreaResultView(props){
  return(
    <View style= {styles.container}>
      <View style={{paddingBottom:10,alignItems:'center'}}>
        <ResultText title="For"/>
      </View>        
        <View style={styles.innerContainer}> 
          <View style={styles.numberContainer}>
            <Text style={styles.textNumber}>{props.areaTotal}</Text>
          </View>
          <View style={styles.unitContainer}>
            <Text style={styles.textUnit}>m²</Text>
          </View>
        </View>        
    </View>
    )
}
export default AreaResultView;

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    paddingBottom:8,
  },
  innerContainer:{
    marginHorizontal:15
  },
  numberContainer:{
    alignItems:'center',
    backgroundColor:Colors.primaryDarkBlue,
    paddingHorizontal:8,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
  },
  textNumber:{
    fontSize:55,
    color:'white',
  },
  unitContainer:{
    alignItems:'center',
    backgroundColor:'black',
    padding:4,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
  },
  textUnit:{
    fontSize:30,
    color:'white',
  },
})