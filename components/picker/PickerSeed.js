import { useState,useEffect} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import ModalPickerSeed from "./ModalPickerSeed";

function PickerSeed({onChangeCurrentOperationCode,selectedCategory,isPickerSeedDisabled,
style,seedDb}){
  const [chooseData,setChooseData] = useState('Press here')
  const [isModalVisible,setIsModalVisible] = useState(false)

  useEffect(() => {
    setChooseData('Press here')
  }, [selectedCategory])
  
  const changeModalVisibility = (bool) => {
    setIsModalVisible(bool)
  }

  //Callback Function
  const setData = (selectedOption,seedWeightData)=>{
    setChooseData(selectedOption)    
    onChangeCurrentOperationCode(3,selectedOption,seedWeightData) // Callback function
  }
  
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
          selectedCategory={selectedCategory}
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
    fontSize:30
  },
  TouchableOpacity:{
    alignSelf:'center',
  },
})
export default PickerSeed;