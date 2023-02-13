import { View,Text,StyleSheet } from "react-native";
import Colors from "../../constants/colors";
import ResultText from "./ResultText";

function SeedTypeView(){
    return(
        <View style={styles.container}>
            <View style={{paddingBottom:20}}>
                <ResultText title="Of"/>
            </View>
            <View style={styles.seedTypeContainer}>
                <Text style={styles.textSeedType}>Seed Type</Text>
            </View>
        </View>
    )
}
export default SeedTypeView;

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        margin:10,
    },
    seedTypeContainer:{
        backgroundColor:Colors.primaryGreen3,
        paddingHorizontal:90,
        paddingVertical:30
    },
    textSeedType:{
        color:'#FAFF00',
        fontSize:48
    }
})
