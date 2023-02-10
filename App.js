import { StyleSheet,View } from 'react-native';
import Colors from './constants/colors';

import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/Login';

export default function App() {
  return(
    <View style={styles.rootScreen}>
        <NavigationContainer>
          <Login/>
        </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
    rootScreen:{
      flex:1,
      backgroundColor: Colors.primaryGreen1,
    }
});
