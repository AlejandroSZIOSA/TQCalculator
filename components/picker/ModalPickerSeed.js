import { StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView} from "react-native";
import { useEffect } from "react";
import Colors from "../../constants/colors";
import { SEED } from "../../data/dummy-data";
//const OPTIONS =[{state:'Stockholm'},{state:'Malmö'},{state:'Örebro'},{state:'Örby'} ]

import { ZONE } from "../../data/dummy-data"; 

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


function ModalPickerSeed(props){  
  

  //Extracting data from a "selected seed type"

  //A Callback function
  

  var extractSeedIds = () =>{
    var seedIds=[]
    ZONE.forEach((element, index) =>  {
        ZONE[index].seedsIds.forEach(element2 => {
          if(element.name==props.selectedZone){
          seedIds.push(element2)
          }
        })
    });
    return seedIds
  }
  function getSeedsData(temp){
    var seedData=[{}]
      temp.forEach(element =>  {
        SEED.forEach(element2 => {
          if(element == element2.id){
            seedData.push(element2)
          }
        })
      }
      )
    return seedData;
  }
  //console.log(props.selectedZone);

  //console.log(extractSeedIds());

  const onPressItem = (selectedOption,seedWeightData) =>{
    props.changeModalVisibility(false)
    
    //Callback Function
    props.setData(selectedOption,seedWeightData)
    //todo: search a prop for restart the picker
  }

  
  var finalSeedData = getSeedsData(extractSeedIds())

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
      <View style={[styles.modal,{width:WIDTH -20,height:HEIGHT/3}]}>
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
    alignItems:'flex-start'
  },
  text:{
    margin:20,
    fontSize:20,
    fontWeight:'bold'
  }
})
export default ModalPickerSeed;