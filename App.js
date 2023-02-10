import { StyleSheet,View } from 'react-native';
import Colors from './constants/colors';

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from './screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
        <NavigationContainer>
          <Stack.Navigator 
            screenOptions={{
              headerStyle:{backgroundColor:Colors.primaryGreen3},
              headerTitleStyle:{
                fontSize: 30,
              },
              contentStyle:{ backgroundColor:Colors.primaryGreen1}
            }}
          >
            <Stack.Screen 
              name="LoginScreen" 
              component={Login} 
              options={{
                title:'Login'
              }}
              />
          </Stack.Navigator>
        </NavigationContainer>
    
  );
}
const styles = StyleSheet.create({
    rootScreen:{
      flex:1,
      backgroundColor: Colors.primaryGreen1,
    }
});
