import { useEffect, useState} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View, Button } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import ModalPickerZone from "./ModalPickerZone";

function PickerZone({selectedZone}){

    const [chooseData,setChooseData] = useState('press here')
    const [isModalVisible,setisModalVisible] = useState(false)
    const [isTouchAreaDisabled,setIsTouchAreaDisabled]= useState(false)
    const [isResetBtnEnabled,setIsResetBtnEnabled]= useState(false)
    // separate button secundary ..no funciono
// regresar el valor de  touch area disabled

useEffect( ()=>{
  setIsResetBtnEnabled(true);
  
},[chooseData])

function resetBtn(){
  console.log("button pressed");
  //setIsTouchAreaDisabled(false); //problem
}
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
    setIsTouchAreaDisabled(true);
    debug(option);
    }
    return(
    <View>
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={()=> changeModalVisibility(true)}
        disabled={isTouchAreaDisabled}
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
    <View>
      <SecondaryButton  disabled={isResetBtnEnabled} onPress={resetBtn}> Reset
        </SecondaryButton>
    </View>
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
export default PickerZone;