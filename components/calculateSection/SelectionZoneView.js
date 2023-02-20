import { View,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import SecondaryButton from "../buttons/SecondaryButton";
import IntructionText from "./IntructionText";

import PickerZone from "../picker/PickerZone";

//Picker data as Prop here
function SelectionZoneView({title}){
    //console.log(title)
    // if title is growing zone
    //const [isResetBtnEnabled,setIsResetBtnEnabled]= useState(false) //from child to parent
    //const [isPickerDisabled, setIsPickerDisabled] = useState(false)

    return(
        <View style={styles.container}>
            {/*Nested Components */}
            <IntructionText title={title} />
                <PickerZone
                selectedZone={title}
                //changeResetBtnStatus={setIsResetBtnEnabled}
                //disableTouchArea={isPickerDisabled}
                />
        </View>
    )
}
export default SelectionZoneView;

const styles= StyleSheet.create({
    container:{
        backgroundColor: Colors.primaryGreen3,
        marginVertical:10,
        alignItems:'center'
    }
})
