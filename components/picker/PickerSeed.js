import { useState} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

import ModalPickerSeed from "./ModalPickerSeed";


function PickerSeed({selectedZone,isPickerDisabled}){

    const [chooseData,setChooseData] = useState('press here')
    const [isModalVisible,setisModalVisible] = useState(false)

    //console.log(isPickerDisabled)
//test



const debug =(value) => {
  console.log(value);
}
    const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
    debug(selectedZone);
    }
    const setData = (option)=>{
    setChooseData(option)
    //setIsTouchAreaDisabled(true);
    debug(option);
    }
    return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={()=> changeModalVisibility(true)}
        disabled={isPickerDisabled}
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