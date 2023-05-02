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
    paddingBottom:8,
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
    borderRadius:5,
    backgroundColor:'black',
    padding:4,
  },
  textUnit:{
    fontSize:40,
    color:'white',
  },
})