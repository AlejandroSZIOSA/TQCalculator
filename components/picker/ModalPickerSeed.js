import { StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView} from "react-native";

import Colors from "../../constants/colors";
import { SEED } from "../../data/dummy-data";
//const OPTIONS =[{state:'Stockholm'},{state:'Malmö'},{state:'Örebro'},{state:'Örby'} ]

import { ZONE } from "../../data/dummy-data"; 

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

//let tempObject=[]

function ModalPickerSeed(props){  

  //Extracting data from a "selected seed type"
  const onPressItem = (selectedOption,seedWeightData) =>{
  //console.log(selectedData)
    props.changeModalVisibility(false)
    props.setData(selectedOption,seedWeightData)
    //console.log(props.setData)
    //console.log(option)
  }
  //selectSeed(ZONE)
//console.log(props.selectedZone);

function getSeedIds(){
  var filteredSeedIds=[]
  ZONE.forEach((element, index) =>  {
    if(element.name==props.selectedZone){
      //console.log(` zone: ${element.name} index: ${index} `);
        ZONE[index].seedsIds.forEach(element2 => {
          //console.log(element2);
          filteredSeedIds.push(element2)
        })
    //console.log(filteredSeedIds);
    }
  }
  );
  return filteredSeedIds
}
function getSeedsData(){

}



const temp = getSeedIds()
console.log(temp);




  const option = SEED.map((item, index)=>{
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