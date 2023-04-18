import { StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView} from "react-native";
import Colors from "../../constants/colors";

import { CATEGORIES } from "../../data/categories";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function ModalPickerCategory(props){
  const onPressItem = (option) =>{
  props.changeModalVisibility(false)
  props.setData(option) //callback function
  }
  
  const option = CATEGORIES.map((item, index)=>{
  return(
    <TouchableOpacity
      style={styles.option}
      key={index}
      onPress={()=>onPressItem(item.name)}
    >
      <Text style={styles.text}>
        {item.name}
      </Text>
    </TouchableOpacity>
  )
  })

  return(
    <TouchableOpacity
      onPress={() => props.changeModalVisibility(false)}
      style={styles.container}
    >
      <View style={[styles.modal,{width:WIDTH -50,height:HEIGHT/3}]}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  modal:{
    backgroundColor:Colors.primaryYellow,
    borderRadius:10,
  },
  option:{
    alignItems:'center'
  },
  text:{
    margin:20,
    fontSize:20,
    fontWeight:'bold'
  }
})
export default ModalPickerCategory;