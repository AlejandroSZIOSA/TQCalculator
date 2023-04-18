import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

import { useEffect, useState } from "react";
import ModalPickerZone from "./ModalPickerZone";

function PickerZone({onChangeCurrentOperationCode,isPickerCategoryDisabled,style}){

  const [chooseData,setChooseData] = useState('Press here')
  const [isModalVisible,setIsModalVisible] = useState(false)
  
  const changeModalVisibility = (bool) => {
  setIsModalVisible(bool)
  }

  //this first , when User select a zone 
  const setData = (option)=>{
  setChooseData(option)
  onChangeCurrentOperationCode(2,option)
  }

  return(
    <View style={[styles.container,style]}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={()=> changeModalVisibility(true)}
        disabled={isPickerCategoryDisabled} //working on this
      >
        <Text style={styles.text}> {chooseData } </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={()=>changeModalVisibility(false)}
      >
        <ModalPickerZone
        changeModalVisibility={changeModalVisibility}
        setData={setData}
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
    borderRadius:10,
    //opacity:1
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
export default PickerZone;