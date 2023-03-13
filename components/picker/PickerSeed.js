import { useState} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import { useContext,useEffect } from "react";
import DataContext from "../../context/DataContext";
import ModalPickerSeed from "./ModalPickerSeed";

function PickerSeed({onChangeStatusCode,selectedZone,isPickerSeedDisabled,
style,seedDb}){

  const [chooseData,setChooseData] = useState('Press here')
  const [isModalVisible,setIsModalVisible] = useState(false)

  useEffect(() => {
    setChooseData('Press here')
  }, [selectedZone])

  const ctx = useContext(DataContext);

  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  //Callback Function
  const setData = (selectedOption,seedWeightData)=>{
    setChooseData(selectedOption)

    ctx.seedSelectedToTrue(); //Context works well! :)
    
    onChangeStatusCode(3,selectedOption,seedWeightData) // Callback function
  }
  //console.log(selectedZone);
  
  return(
    <View style={[styles.container,style]}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={()=> changeModalVisibility(true)}

        disabled={isPickerSeedDisabled} //working on!
      >
        <Text style={styles.text}> {chooseData } </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={()=>changeModalVisibility(false)}
      >
        <ModalPickerSeed
          changeModalVisibility={changeModalVisibility}
          setData={setData}

          seedDb={seedDb}
          
          selectedZone={selectedZone}
        />
      </Modal>
    </View>
  )
}

const styles= StyleSheet.create({
  container:{
    backgroundColor:Colors.primaryYellow,
    alignItems:'center',
    justifyContent:'center',
    marginVertical:15,
    paddingHorizontal:10,
    borderWidth:2,
    borderColor:'black',
    borderRadius:10 
  },
  text:{
    //marginHorizontal:100,
    //paddingHorizontal:110,
    fontSize:30
  },
  TouchableOpacity:{
    alignSelf:'center',
    //paddingHorizontal:100,
  },
})
export default PickerSeed;