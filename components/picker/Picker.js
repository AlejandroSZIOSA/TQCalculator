import { useState} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import ModalPicker from "./ModalPicker";

function Picker(){
    const [chooseData,setChooseData] = useState('Select item')
    const [isModalVisible,setisModalVisible] = useState(false)

    const changeModalVisibility = (bool) => {
    setisModalVisible(bool)
    }
    const setData = (option)=>{
    setChooseData(option)
    }
    return(
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.TouchableOpacity}
        onPress={()=> changeModalVisibility(true)}
      >
        <Text style={styles.text}> {chooseData } </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={()=>changeModalVisibility(false)}
      >
        <ModalPicker
         changeModalVisibility={changeModalVisibility}
         setData={setData}
        />
      </Modal>
    </View>
    )
}
const styles= StyleSheet.create({
    container:{
      backgroundColor: 'white',
      alignItems:'stretch',
      justifyContent:'center',
      //marginVertical:100,
      //paddingHorizontal:50
    },
    text:{
      //marginVertical:20,
      paddingHorizontal:120,
      fontSize:25
    },
    TouchableOpacity:{
      backgroundColor:Colors.primaryYellow,
      alignSelf:'stretch',
      //paddingHorizontal:100,
    },  
})
export default Picker;