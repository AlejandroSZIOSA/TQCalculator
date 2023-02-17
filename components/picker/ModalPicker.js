import React, { useEffect } from "react";
import { StyleSheet,Text,View,TouchableOpacity,Dimensions,ScrollView} from "react-native";
import Colors from "../../constants/colors";
import { ZONE } from "../../data/dummy-data";
import { SEED } from "../../data/dummy-data";
import { selectSeed } from "./picker-functions";
//const OPTIONS =[{state:'Stockholm'},{state:'Malmö'},{state:'Örebro'},{state:'Örby'} ]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function ModalPicker(props){
    
    const onPressItem = (option) =>{
        //console.log(selectedData)
        props.changeModalVisibility(false)
        props.setData(option)
        //console.log(props.setData)
        //console.log(option)
        
    }

    //selectSeed(ZONE)

    const option = ZONE.map((item, index)=>{
        return(
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={()=>onPressItem(item.name)}
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
export default ModalPicker;