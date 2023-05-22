import { Text,StyleSheet } from "react-native";

function IntructionText({title}){
  return <Text style={styles.textTitle}> {title} </Text>
}
export default IntructionText;

const styles = StyleSheet.create({
  textTitle:{
    fontSize:33,
    color:'white',
    paddingVertical:2
  },
})
