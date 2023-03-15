import { StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView} from "react-native";
import Colors from "../../constants/colors";

import { SEED } from "../../data/dummy-data";
import { ZONE } from "../../data/dummy-data"; 

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function ModalPickerSeed(props){
  //console.log(props.seedDb[1].name) //testing

  //var seedsDb =  props.seedDb; //it is working / get seeds data from Db
  
  const extractSeedIds = () =>{
    let seedIds=[]
    ZONE.forEach((element, index) => {
        ZONE[index].seedsIds.forEach(element2 => {
          if(element.name==props.selectedZone){
          seedIds.push(element2)
          }
        })
    });
    return seedIds //Return seeds Ids
  }
  function getSeedsData(temp){
    let seedData=[{}]
      temp.forEach(element => {
        //Can change "seedsDb" for Dummy-Data "SEED" for testing
        props.seedDb.forEach(element2 => {
          if(element == element2.id){
            seedData.push(element2)
          }
        })
      })
    return seedData; //return a list of seeds objects
  }
  var finalSeedData = getSeedsData(extractSeedIds()) //filtered data

  // OnPress Item Handler Event
  const onPressItem = (selectedOption,seedWeightData) => {
    props.changeModalVisibility(false)
    //Callback Function
    props.setData(selectedOption,seedWeightData)
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