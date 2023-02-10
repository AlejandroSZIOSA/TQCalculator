import { StyleSheet,View } from 'react-native';
import Colors from './constants/colors';

import Login from './screens/Login';

export default function App() {
  return(
    <View style={styles.rootScreen}>
        <Login/>
    </View>
  );
}
const styles = StyleSheet.create({
    rootScreen:{
      flex:1,
      backgroundColor: Colors.primaryGreen1,
    }
});
