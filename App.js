import Colors from './constants/colors';

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import LoginScreen from './screens/LoginScreen';
import CalculationScreen from './screens/CalculationScreen';
import ResultScreen from './screens/ResultScreen';
import SignUpScreen from './screens/SignUpScreen';


//Declaration  "Authentication" Navigation Stack
const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () =>(
<AuthStack.Navigator
  screenOptions={{
    headerStyle:{backgroundColor:Colors.primaryGreen4},
    headerTitleStyle:{
    fontSize: 30,
    },
  contentStyle:{ backgroundColor:Colors.primaryGreen1}
  }}
>
  <AuthStack.Screen 
    name="LoginSc" 
    component={LoginScreen}
    options={{title: 'Login'}}
  />
  <AuthStack.Screen 
    name="SignUpSc" 
    component={SignUpScreen}
    options={{title: 'Sign Up'}}
  />

  
</AuthStack.Navigator>
);  

//Declaration "Main" Navigation Stack
const MainStack = createNativeStackNavigator();
const MainScreens = () => (
  <MainStack.Navigator 
    screenOptions={{
      headerStyle:{backgroundColor:Colors.primaryGreen4},
      headerTitleStyle:{
      fontSize: 30,
      },
      contentStyle:{ backgroundColor:Colors.primaryGreen1}
    }}
  >
    <MainStack.Screen 
      name="CalculateSC" 
      component={CalculationScreen} 
      options={{
        title:'Seeds Calculator'
      }}
    />
    <MainStack.Screen 
      name="ResultSC" 
      component={ResultScreen} 
      options={{
      title:'Results'
      }}
    />
  </MainStack.Navigator>
);


//////////************ */

const Stack = createNativeStackNavigator();

export default function App() {
  
  return(
    <NavigationContainer>
      <MainScreens/>
      {/* <AuthStackScreens/> */}
    </NavigationContainer>    
  );  
}