import { View, Text,Pressable,StyleSheet } from "react-native";

function SecondaryButton({children}){
    return(
        <View>
          <Pressable>
            <Text> {children} </Text>
          </Pressable>
        </View>
    )
}
export default SecondaryButton;
const style = StyleSheet.create({

})