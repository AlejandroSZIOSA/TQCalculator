import { StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView} from "react-native";
import Colors from "../../constants/colors";

import { CATEGORIES } from "../../data/categories";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function ModalPickerSeed(props){
  var seedsDb =  props.seedDb; // Seeds data from Mongo Db
  
  //Filter Algorithm do not need optimization because there is not much data
  const extractSeedIds = () => {
    let seedIds=[]
    CATEGORIES.forEach((element, index) => {
        CATEGORIES[index].seedsIds.forEach(element2 => {
          if(element.name==props.selectedCategory){
          seedIds.push(element2)
          }
        })
    });
    return seedIds
  }

  //Filter Algorithm do not need optimization because there is not much data
  function getSeedsData(temp){
    let seedData=[{}]
      temp.forEach(element => {
        //Can change "seedsDb" for Dummy-Data "SEED" for testing
        seedsDb.forEach(element2 => {
          if(element == element2.id){
            seedData.push(element2)
          }
        })
      })
    return seedData;
  }

  var finalSeedData = getSeedsData(extractSeedIds()) //filtered data

  // OnPress Item Handler Event
  const onPressItem = (selectedOption,seedWeightData) => {
    props.changeModalVisibility(false)
    props.setData(selectedOption,seedWeightData) //Callback Function
  }

  const option = finalSeedData.map((item, index)=>{
    return(
      <TouchableOpacity
        style={styles.option}
        key={index}
        onPress={()=>onPressItem(item.name,item.weightPerSquareMeter)}
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
      <View style={[styles.modal,{width:WIDTH -50,height:HEIGHT/4}]}>
        <ScrollView>
          { option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  modal:{
    backgroundColor:Colors.primaryYellow,
    borderRadius:10
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
export default ModalPickerSeed;