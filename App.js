import Colors from './constants/colors';

import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { useState,useMemo } from 'react';

import LoginScreen from './screens/LoginScreen';
import CalculationScreen from './screens/CalculationScreen';
import ResultScreen from './screens/ResultScreen';
import SignUpScreen from './screens/SignUpScreen';

//Context
import { AuthContext } from './context/AuthContext';

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

//Declaration of "Main Stack" Navigation
const MainStack = createNativeStackNavigator();
const MainStackScreens = () => (
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

// Declaration of "Root Stack" Navigation
const RootStack = createNativeStackNavigator();
const RootStackScreens = ({userToken}) => (
  <RootStack.Navigator 
    screenOptions={{headerShown:false}} //fix Header problem!
  >
    {/* Conditional value switch Between "Stack Navigation" when User Is Log in */}
    {
      !userToken ?(<RootStack.Screen name="Auth" component={AuthStackScreens}/>) :
      (<RootStack.Screen name="Main" component={MainStackScreens}/>)
    }  
  </RootStack.Navigator>
)

//////////************ */
const Stack = createNativeStackNavigator();

export default function App() {
  
  const [isAuth,setIsAuth]= useState(false)

  //CallBack function to check if user is logged in
  const authContext = useMemo(() => {
    return{
      signIn: () => {
        setIsAuth(true);
      }
  }
  }, []);
  //console.log(isAuth); // testing
  
  return(
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* passing props to root stack screen */}
        <RootStackScreens userToken ={isAuth}/>
      </NavigationContainer>   
    </AuthContext.Provider> 
  );  
}