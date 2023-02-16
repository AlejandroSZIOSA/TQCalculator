import { useState} from "react";
import { StyleSheet,Text,Modal, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";
import ModalPicker from "./ModalPicker";

function Picker(){
    const [chooseData,setChooseData] = useState('Press here')
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
export default Picker;